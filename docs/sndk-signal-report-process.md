# Process Log: SNDK Signal Report

Companion doc to [`/sndk-signal-report`](../app/routes/sndk-signal-report.tsx) —
what actually ran locally to produce that article's numbers, and whether any
database was read or written along the way.

**Generated:** 2026-09-27 · **Repo run against:** `~/code/signals-app` ·
**Env:** mamba `signals-app` (`environment.yml` in that repo)

---

## 1. What the signals-app pipeline is

`signals-app` is a standalone local project (separate repo from `ttb8`) that
runs a 5-layer technical-analysis pipeline against a ticker:

```
L1 fetch        DataFetcher pulls OHLCV from yfinance
L2 indicators   compute_indicators() derives ~90 columns (SMA/EMA, RSI,
                MACD, Bollinger x5 window/width combos, ADX, Ichimoku,
                CMF/OBV, Stochastic, ATR, distance-from-MA, range highs/lows…)
L3 detection    detect_all_signals() runs every registered detector against
                the latest bar and returns a list of fired signals
                (name, strength, category, description)
L4 confluence   ConfluenceRanker scores the fired signals into one
                bull/bear net score, a bias, a confidence, and an action
L5 rank/serve   exposed via a Typer CLI (`signals`), a FastAPI app, and an
                MCP server — all three call the same `service.py` functions
```

It's exposed three ways: the `signals` CLI (installed via `pyproject.toml`),
one-off scripts in `scripts/`, and a FastAPI/MCP server. This report used
only the CLI and one script — no server was started.

## 2. Commands run, in order

**Preflight — confirm the env and upstream are alive:**

```bash
mamba env list | grep signals-app
mamba run -n signals-app signals health --json
```
Returned `{"yfinance_ok":true,...,"supabase_configured":true,"llm_configured":false}`
— yfinance reachable, Supabase credentials present but the LLM provider is
not configured, so every command below ran in rule-based mode by default or
by explicit `--no-llm`.

**Step 1 — latest-bar signal report (Markdown), for the live signal table:**

```bash
mamba run -n signals-app python scripts/generate_signal_report.py SNDK --period 1y --out-dir /tmp/sndk-report2
```
Output: `SNDK_<timestamp>_optimal.md` — 7 fired signals on the bar ending
2026-09-25, confluence score 0.153, bias bullish, action HOLD. Read-only:
this script only calls the L1–L4 functions directly and writes a `.md` file
to `--out-dir`; it never touches a database.

**Step 2 — full L1–L5 pipeline via the CLI (JSON), to confirm the same numbers
through the production code path:**

```bash
mamba run -n signals-app signals analyze SNDK --no-llm --json
```
Output: `{"ticker":"SNDK","signal":{"direction":"hold","confidence":0.3,...},
"data_quality_score":0.7,"data_quality_reasons":["stale_last_bar:62.1h>26.0h"],...}`
Matches Step 1's confluence score (0.153 → rounds into the 0.3-confidence
fallback band) and confirms the HOLD action.

**Step 3 — indicator snapshot, for the technical-snapshot table:**

A short inline script (not committed anywhere) imported `DataFetcher` and
`compute_indicators` directly from `src/signals_app/` and printed the last
row — RSI, ADX, ATR, Bollinger %B, MACD, CMF, Ichimoku lines, SMA distances,
volume vs. its 20-day average. This is the same `compute_indicators()` call
Steps 1–2 make internally; it was re-run standalone only to read out the raw
numbers for the table, not to compute anything new.

**Step 4 — backtest, for the buy/wait/avoid verdict:**

```bash
for h in 5 10 20 40; do
  mamba run -n signals-app signals backtest SNDK --horizon "$h" --period 1y --json
done
```
`--period 2y` and `--period max` were tried first and both failed with
`Insufficient data` — SNDK only has ~406 daily bars of history total (it
spun off from Western Digital on 2025-02-13), and yfinance's own `2y`/`max`
period strings returned fewer effective bars than `1y` did for this symbol.
`--horizon 60` also failed (`251 bars, need > 260`). `--period 1y` at
horizons 5/10/20/40 all succeeded with `bars_scanned: 51` — the number of
bars left after the pipeline's 200-bar indicator warmup is consumed.
Fully read-only: `service.backtest()` calls `DataFetcher.fetch` →
`compute_indicators` → `scan_historical` → `score_historical_signals` and
returns the result — no write path exists in this function.

## 3. Was a database used?

**Yes, but only one command wrote to it, and only locally.**

`signals-app` has two data stores:

| Store | What it's for | Touched by this run? |
|---|---|---|
| `signals_local.db` (SQLite, project root) | Local dev history of `analyze` runs | **Yes — written once** |
| Supabase (remote Postgres) | Production `signals scan` / `best1_scan --write-supabase` publish path | **No** |

- `signals analyze SNDK --no-llm --json` (Step 2) **always persists its run**
  to the local SQLite file, per its own docstring: *"persists the run exactly
  as before (fire-and-forget; a DB failure is logged, not raised)."* This
  happens regardless of `--no-llm` — that flag only skips the paid LLM call,
  not the local write.
- `scripts/generate_signal_report.py` (Step 1), `signals backtest` (Step 4),
  and `signals health` are all read-only. None of them import or touch
  `signals_local.db` or Supabase.

**Proof — before/after:**

```bash
sqlite3 ~/code/signals-app/signals_local.db "select * from signal_runs;"
```
```
1|SNDK|3mo|3mo|hold|0.3|1|1|fallback_v1|1790532184898
```
One row, `id=1` — this was the *first* row ever recorded for SNDK in this
local database file (the table exists but had nothing in it before this
session's `signals analyze` call). Columns: ticker, requested period,
resolved period, direction, confidence, `ai_degraded` (true — no LLM
configured), `no_llm` (true — we passed the flag), prompt version, and a
millisecond epoch timestamp.

```bash
git check-ignore -v ~/code/signals-app/signals_local.db
# .gitignore:59:signals_local.db   signals_local.db
```
The file is git-ignored in the `signals-app` repo — it's a local,
ephemeral dev artifact, not something that ships or gets committed. It is
**not** part of `ttb8` and nothing in `ttb8` reads it; it's documented here
only because the question "was a DB touched" deserves a factual answer.

`signals health --json` reported `"supabase_configured":true` — credentials
exist in that repo's environment — but no command run for this report calls
a Supabase write path. Those live behind `signals scan` and
`scripts/best1_scan.py --write-supabase`, neither of which was invoked.

## 4. Reproducing this report

```bash
cd ~/code/signals-app
mamba run -n signals-app signals analyze SNDK --no-llm --json
mamba run -n signals-app signals backtest SNDK --period 1y --horizon 20 --json
```
Numbers will differ on a re-run once Monday's (2026-09-28) bar closes and
rolls into the 251-bar window — this report is a point-in-time snapshot as
of the Friday 2026-09-25 close.
