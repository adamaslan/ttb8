
import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const ASCII_ART = `
╔══════════════════════════════════════════════════════════╗
║   IPI :: HOURLY CONFLUENCE & BOLLINGER SCAN              ║
║                                                          ║
║   Scan Window: 3mo / 1h (189 bars)                       ║
║     ├── Confluence Bias ......... BULLISH (HIGH)         ║
║     ├── Net Score ............... +11.0 (+20.0 / -9.0)   ║
║     ├── Agreement Ratio ......... 65.4% (17 bull / 9 bear)║
║     │                                                    ║
║     ├── Bollinger (30, 1.5) ..... Riding Upper Band      ║
║     ├── Chaikin Money Flow ...... 0.151 (Strong Buying)  ║
║     ├── ADX Trend Conviction .... 30.8 (Strong Uptrend)  ║
║     └── Ichimoku Cloud .......... Price Above Kumo       ║
║                                                          ║
║   189 bars scanned · 7,112 total historical signals      ║
╚══════════════════════════════════════════════════════════╝
`;

const TITLE = "IPI Signal Report: Hourly Technical Confluence & Bollinger Scan";
const DATE = "August 2026";
const SLUG = "ipi-signal-report";
const HERO_IMAGE = "/sexysignal1.jpeg";

const bodyParagraphs = [
  "This technical scan analyzes Intrepid Potash ($IPI) on a 1-hour interval across a 3-month window (189 hourly bars). Using a multi-indicator confluence engine spanning 23 technical categories, the system evaluates real-time conviction, trend momentum, volatility bands, volume pressure, and historical signal distributions.",
  "On the latest bar (August 31, 2026 at 16:00 EDT), IPI registers a High-Confidence Bullish Bias with a net confluence score of +11.0 (Bullish Score: 20.0 vs Bearish Score: 9.0). Seventeen distinct bullish signals fired against nine bearish signals, delivering an agreement ratio of 65.4%.",
  "Key momentum and volume drivers include price breaking and riding above the upper Bollinger Band (30, 1.5), strong Chaikin Money Flow accumulation at 0.151, price holding above the Ichimoku Kumo cloud (38.67 vs 38.02), and a confirming ADX reading of 30.8 denoting a strong uptrend regime."
];

const keyTakeaways = [
  {
    label: "Upper Bollinger Band Breakout",
    detail: "Price at 38.67 closed above the upper Bollinger Band (38.52) for 2 consecutive hourly candles (%B at 1.10), registering Extreme Bullish breakout momentum."
  },
  {
    label: "Institutional Buying Pressure",
    detail: "Chaikin Money Flow (CMF) registered +0.151 alongside positive 3/3 momentum horizon alignment and price holding firmly above the volume-weighted average price (VWAP 37.96)."
  },
  {
    label: "Multi-Horizon Trend Confirmation",
    detail: "ADX at 30.8, Aroon Up at 72.0, PSAR in uptrend (37.90), and Bullish Kumo Span A > Span B cloud expansion indicate robust directional trend structure."
  },
  {
    label: "Counter-Signals & Resistance Levels",
    detail: "RSI(5) at 68.9 and CCI at 133.8 flag overbought conditions near resistance at 38.90-39.18, alongside low-volume consolidation on the closing bar."
  }
];

export interface SignalRow {
  signal: string;
  description: string;
  strength: string;
  category: string;
  value: number | null;
  timestamp: string;
  cls: string;
}

export interface ConfluenceRank {
  bullish_score: number | null;
  bearish_score: number | null;
  net_score: number | null;
  bias: "BULLISH" | "BEARISH" | "NEUTRAL";
  confidence: "HIGH" | "MEDIUM" | "LOW";
  signal_count: number;
  bullish_signal_count: number;
  bearish_signal_count: number;
  agreement_ratio: number | null;
}

/** One scanned bar: its timestamp plus that bar's full confluence result. */
export interface BarConfluence extends ConfluenceRank {
  timestamp: string;
}

export interface ScanPayload {
  metadata: {
    symbol: string;
    period: string;
    interval: string;
    bars_scanned: number;
    generated_at: string;
  };
  signals: Omit<SignalRow, "cls">[];
  confluence_rank: ConfluenceRank;
  signal_summary: {
    symbol: string;
    period: string;
    interval: string;
    bars_scanned: number;
    total_signals: number;
    avg_signals_per_bar: number;
    categories_fired: number;
    by_strength: Record<string, number>;
    by_category: Record<string, number>;
    latest_confluence: ConfluenceRank;
    degraded: boolean;
    detector_failures: Record<string, number>;
  };
  bar_confluence: BarConfluence[];
  historical_signal_count: number;
}

export const scan: ScanPayload = {
  "metadata": {
    "symbol": "IPI",
    "period": "3mo",
    "interval": "1h",
    "bars_scanned": 189,
    "generated_at": "2026-08-31T18:48:28"
  },
  "signals": [
    {
      "signal": "RSI5 OVERBOUGHT (>65)",
      "description": "RSI(5): 68.9",
      "strength": "BEARISH",
      "category": "RSI",
      "value": 68.860915,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "ABOVE UPPER BB(30,1.5)",
      "description": "close 38.67 > upper 38.52",
      "strength": "EXTREME BULLISH",
      "category": "BB_BREAKOUT",
      "value": 0.154368,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "BB(30,1.5) RIDING UPPER BAND",
      "description": "2 consecutive closes above upper band",
      "strength": "STRONG BULLISH",
      "category": "BB_BREAKOUT",
      "value": 0.154368,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "BB(30,1.5) %B > 1",
      "description": "%B 1.10",
      "strength": "BEARISH",
      "category": "BB_BREAKOUT",
      "value": 1.100114,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.3x (MA5)",
      "description": "vol/5MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.5x (MA5)",
      "description": "vol/5MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.7x (MA5)",
      "description": "vol/5MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.3x (MA10)",
      "description": "vol/10MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.5x (MA10)",
      "description": "vol/10MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.7x (MA10)",
      "description": "vol/10MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.3x (MA20)",
      "description": "vol/20MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.5x (MA20)",
      "description": "vol/20MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.7x (MA20)",
      "description": "vol/20MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.3x (MA50)",
      "description": "vol/50MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.5x (MA50)",
      "description": "vol/50MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLUME <0.7x (MA50)",
      "description": "vol/50MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "VOLUME BEARISH DIVERGENCE (10b)",
      "description": "price up, volume down over 10 bars",
      "strength": "BEARISH",
      "category": "VOLUME",
      "value": -10282.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "GAIN >3% (20b)",
      "description": "+4.51% over 20 bars",
      "strength": "STRONG BULLISH",
      "category": "PRICE_ACTION",
      "value": 4.513509,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "WITHIN 5% OF 20b HIGH",
      "description": "close 38.67 vs high 39.46",
      "strength": "BULLISH",
      "category": "RANGE",
      "value": -0.794003,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "WITHIN 5% OF 50b HIGH",
      "description": "close 38.67 vs high 39.80",
      "strength": "BULLISH",
      "category": "RANGE",
      "value": -1.128403,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "WITHIN 5% OF 100b HIGH",
      "description": "close 38.67 vs high 39.80",
      "strength": "BULLISH",
      "category": "RANGE",
      "value": -1.128403,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "WITHIN 5% OF 200b HIGH",
      "description": "close 38.67 vs high 39.80",
      "strength": "BULLISH",
      "category": "RANGE",
      "value": -1.128403,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "WITHIN 5% OF 252b HIGH",
      "description": "close 38.67 vs high 39.80",
      "strength": "BULLISH",
      "category": "RANGE",
      "value": -1.128403,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": ">5% ABOVE 150SMA",
      "description": "+5.88% from 150SMA",
      "strength": "BEARISH",
      "category": "MA_DISTANCE",
      "value": 5.877043,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": ">5% ABOVE 200SMA",
      "description": "+7.30% from 200SMA",
      "strength": "BEARISH",
      "category": "MA_DISTANCE",
      "value": 7.301488,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "NEAR SUPPORT (w=5, prox=2%)",
      "description": "close 38.67 near support 38.00",
      "strength": "BULLISH",
      "category": "SUPPORT_RESISTANCE",
      "value": 0.669998,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "NEAR RESISTANCE (w=5, prox=1%)",
      "description": "close 38.67 near resistance 38.90",
      "strength": "BEARISH",
      "category": "SUPPORT_RESISTANCE",
      "value": -0.234001,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "NEAR RESISTANCE (w=5, prox=1.5%)",
      "description": "close 38.67 near resistance 39.18",
      "strength": "BEARISH",
      "category": "SUPPORT_RESISTANCE",
      "value": -0.510002,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "STRONG UPTREND",
      "description": "ADX 30.8",
      "strength": "TRENDING",
      "category": "ADX",
      "value": 30.805538,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "PRICE ABOVE KUMO",
      "description": "close 38.67 > cloud 38.02",
      "strength": "BULLISH",
      "category": "ICHIMOKU",
      "value": 0.654398,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "BULLISH KUMO",
      "description": "SpanA > SpanB (green cloud)",
      "strength": "BULLISH",
      "category": "ICHIMOKU",
      "value": 0.2514,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "CMF STRONG BUYING PRESSURE",
      "description": "CMF 0.151",
      "strength": "BULLISH",
      "category": "OBV_CMF",
      "value": 0.151168,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "LOW VOLATILITY REGIME",
      "description": "ATR 1.30% of price",
      "strength": "NEUTRAL",
      "category": "ATR",
      "value": 1.302862,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "MOMENTUM ALIGNED BULLISH",
      "description": "3/3 horizons positive",
      "strength": "BULLISH",
      "category": "MOMENTUM",
      "value": 3.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "MOMENTUM REVERSING DOWN",
      "description": "\u0394 ROC5 -0.34pp",
      "strength": "BEARISH",
      "category": "MOMENTUM",
      "value": -0.33678,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "PRICE ABOVE VWAP",
      "description": "close 38.67 > VWAP 37.96",
      "strength": "BULLISH",
      "category": "VWAP",
      "value": 0.714882,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "CCI OVERBOUGHT (>100)",
      "description": "CCI 134",
      "strength": "BEARISH",
      "category": "CCI",
      "value": 133.799484,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "AROON STRONG UPTREND",
      "description": "Aroon up 72",
      "strength": "TRENDING",
      "category": "AROON",
      "value": 72.0,
      "timestamp": "2026-08-31T16:00:00-04:00"
    },
    {
      "signal": "PSAR UPTREND",
      "description": "SAR 37.90 below price",
      "strength": "BULLISH",
      "category": "PSAR",
      "value": 0.766737,
      "timestamp": "2026-08-31T16:00:00-04:00"
    }
  ],
  "confluence_rank": {
    "bullish_score": 20.0,
    "bearish_score": 9.0,
    "net_score": 11.0,
    "bias": "BULLISH",
    "confidence": "HIGH",
    "signal_count": 26,
    "bullish_signal_count": 17,
    "bearish_signal_count": 9,
    "agreement_ratio": 0.654
  },
  "signal_summary": {
    "symbol": "IPI",
    "period": "3mo",
    "interval": "1h",
    "bars_scanned": 189,
    "total_signals": 7112,
    "avg_signals_per_bar": 37.6,
    "categories_fired": 23,
    "by_strength": {
      "BULLISH": 2392,
      "EXTREME BEARISH": 124,
      "BEARISH": 2710,
      "STRONG BULLISH": 383,
      "NEUTRAL": 691,
      "STRONG BEARISH": 101,
      "TRENDING": 198,
      "SIGNIFICANT": 222,
      "EXTREME BULLISH": 291
    },
    "by_category": {
      "RSI": 504,
      "BB_BREAKOUT": 809,
      "VOLUME": 762,
      "RANGE": 1107,
      "SUPPORT_RESISTANCE": 1110,
      "STOCHASTIC": 78,
      "ICHIMOKU": 388,
      "OBV_CMF": 208,
      "ATR": 139,
      "MOMENTUM": 338,
      "CANDLESTICK": 89,
      "VWAP": 278,
      "CCI": 66,
      "WILLIAMS_R": 90,
      "PSAR": 202,
      "AROON": 112,
      "MACD": 116,
      "MA_CROSS": 77,
      "PRICE_ACTION": 235,
      "SQUEEZE": 36,
      "ADX": 119,
      "MA_DISTANCE": 236,
      "MFI": 13
    },
    "latest_confluence": {
      "bullish_score": 20.0,
      "bearish_score": 9.0,
      "net_score": 11.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 26,
      "bullish_signal_count": 17,
      "bearish_signal_count": 9,
      "agreement_ratio": 0.654
    },
    "degraded": false,
    "detector_failures": {}
  },
  "bar_confluence": [
    {
      "timestamp": "2026-07-24T10:30:00-04:00",
      "bullish_score": 19.0,
      "bearish_score": 23.0,
      "net_score": -4.0,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 37,
      "bullish_signal_count": 18,
      "bearish_signal_count": 19,
      "agreement_ratio": 0.486
    },
    {
      "timestamp": "2026-07-24T11:30:00-04:00",
      "bullish_score": 12.0,
      "bearish_score": 16.0,
      "net_score": -4.0,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 27,
      "bullish_signal_count": 11,
      "bearish_signal_count": 16,
      "agreement_ratio": 0.407
    },
    {
      "timestamp": "2026-07-24T12:30:00-04:00",
      "bullish_score": 12.0,
      "bearish_score": 13.0,
      "net_score": -1.0,
      "bias": "BEARISH",
      "confidence": "LOW",
      "signal_count": 24,
      "bullish_signal_count": 11,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.458
    },
    {
      "timestamp": "2026-07-24T13:30:00-04:00",
      "bullish_score": 13.0,
      "bearish_score": 16.5,
      "net_score": -3.5,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 28,
      "bullish_signal_count": 12,
      "bearish_signal_count": 16,
      "agreement_ratio": 0.429
    },
    {
      "timestamp": "2026-07-24T14:30:00-04:00",
      "bullish_score": 19.0,
      "bearish_score": 13.5,
      "net_score": 5.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 16,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.533
    },
    {
      "timestamp": "2026-07-24T15:30:00-04:00",
      "bullish_score": 14.0,
      "bearish_score": 13.5,
      "net_score": 0.5,
      "bias": "NEUTRAL",
      "confidence": "LOW",
      "signal_count": 27,
      "bullish_signal_count": 13,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.481
    },
    {
      "timestamp": "2026-07-27T09:30:00-04:00",
      "bullish_score": 25.0,
      "bearish_score": 49.5,
      "net_score": -24.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 55,
      "bullish_signal_count": 24,
      "bearish_signal_count": 31,
      "agreement_ratio": 0.436
    },
    {
      "timestamp": "2026-07-27T10:30:00-04:00",
      "bullish_score": 16.0,
      "bearish_score": 34.0,
      "net_score": -18.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 38,
      "bullish_signal_count": 14,
      "bearish_signal_count": 24,
      "agreement_ratio": 0.368
    },
    {
      "timestamp": "2026-07-27T11:30:00-04:00",
      "bullish_score": 14.0,
      "bearish_score": 19.0,
      "net_score": -5.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 32,
      "bullish_signal_count": 13,
      "bearish_signal_count": 19,
      "agreement_ratio": 0.406
    },
    {
      "timestamp": "2026-07-27T12:30:00-04:00",
      "bullish_score": 14.0,
      "bearish_score": 17.0,
      "net_score": -3.0,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 29,
      "bullish_signal_count": 12,
      "bearish_signal_count": 17,
      "agreement_ratio": 0.414
    },
    {
      "timestamp": "2026-07-27T13:30:00-04:00",
      "bullish_score": 17.0,
      "bearish_score": 13.0,
      "net_score": 4.0,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 28,
      "bullish_signal_count": 15,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.536
    },
    {
      "timestamp": "2026-07-27T14:30:00-04:00",
      "bullish_score": 24.0,
      "bearish_score": 15.0,
      "net_score": 9.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 35,
      "bullish_signal_count": 20,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.571
    },
    {
      "timestamp": "2026-07-27T15:30:00-04:00",
      "bullish_score": 17.0,
      "bearish_score": 16.0,
      "net_score": 1.0,
      "bias": "BULLISH",
      "confidence": "LOW",
      "signal_count": 31,
      "bullish_signal_count": 15,
      "bearish_signal_count": 16,
      "agreement_ratio": 0.484
    },
    {
      "timestamp": "2026-07-28T09:30:00-04:00",
      "bullish_score": 22.0,
      "bearish_score": 17.0,
      "net_score": 5.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 35,
      "bullish_signal_count": 18,
      "bearish_signal_count": 17,
      "agreement_ratio": 0.514
    },
    {
      "timestamp": "2026-07-28T10:30:00-04:00",
      "bullish_score": 15.0,
      "bearish_score": 15.0,
      "net_score": 0.0,
      "bias": "NEUTRAL",
      "confidence": "LOW",
      "signal_count": 26,
      "bullish_signal_count": 11,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.423
    },
    {
      "timestamp": "2026-07-28T11:30:00-04:00",
      "bullish_score": 9.0,
      "bearish_score": 15.0,
      "net_score": -6.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 23,
      "bullish_signal_count": 9,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.391
    },
    {
      "timestamp": "2026-07-28T12:30:00-04:00",
      "bullish_score": 9.0,
      "bearish_score": 13.0,
      "net_score": -4.0,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 22,
      "bullish_signal_count": 9,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.409
    },
    {
      "timestamp": "2026-07-28T13:30:00-04:00",
      "bullish_score": 12.0,
      "bearish_score": 12.0,
      "net_score": 0.0,
      "bias": "NEUTRAL",
      "confidence": "LOW",
      "signal_count": 23,
      "bullish_signal_count": 11,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.478
    },
    {
      "timestamp": "2026-07-28T14:30:00-04:00",
      "bullish_score": 76.5,
      "bearish_score": 37.0,
      "net_score": 39.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 77,
      "bullish_signal_count": 40,
      "bearish_signal_count": 37,
      "agreement_ratio": 0.519
    },
    {
      "timestamp": "2026-07-28T15:30:00-04:00",
      "bullish_score": 47.5,
      "bearish_score": 15.0,
      "net_score": 32.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 44,
      "bullish_signal_count": 29,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.659
    },
    {
      "timestamp": "2026-07-29T09:30:00-04:00",
      "bullish_score": 11.5,
      "bearish_score": 10.0,
      "net_score": 1.5,
      "bias": "BULLISH",
      "confidence": "LOW",
      "signal_count": 22,
      "bullish_signal_count": 12,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.545
    },
    {
      "timestamp": "2026-07-29T10:30:00-04:00",
      "bullish_score": 19.0,
      "bearish_score": 11.0,
      "net_score": 8.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 27,
      "bullish_signal_count": 16,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.593
    },
    {
      "timestamp": "2026-07-29T11:30:00-04:00",
      "bullish_score": 9.0,
      "bearish_score": 17.0,
      "net_score": -8.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 25,
      "bullish_signal_count": 10,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.4
    },
    {
      "timestamp": "2026-07-29T12:30:00-04:00",
      "bullish_score": 22.0,
      "bearish_score": 11.0,
      "net_score": 11.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 29,
      "bullish_signal_count": 18,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.621
    },
    {
      "timestamp": "2026-07-29T13:30:00-04:00",
      "bullish_score": 26.0,
      "bearish_score": 13.0,
      "net_score": 13.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 32,
      "bullish_signal_count": 19,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.594
    },
    {
      "timestamp": "2026-07-29T14:30:00-04:00",
      "bullish_score": 32.0,
      "bearish_score": 14.0,
      "net_score": 18.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 38,
      "bullish_signal_count": 24,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.632
    },
    {
      "timestamp": "2026-07-29T15:30:00-04:00",
      "bullish_score": 29.0,
      "bearish_score": 12.0,
      "net_score": 17.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 34,
      "bullish_signal_count": 22,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.647
    },
    {
      "timestamp": "2026-07-30T09:30:00-04:00",
      "bullish_score": 8.0,
      "bearish_score": 26.0,
      "net_score": -18.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 9,
      "bearish_signal_count": 21,
      "agreement_ratio": 0.3
    },
    {
      "timestamp": "2026-07-30T10:30:00-04:00",
      "bullish_score": 14.5,
      "bearish_score": 11.0,
      "net_score": 3.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 25,
      "bullish_signal_count": 14,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.56
    },
    {
      "timestamp": "2026-07-30T11:30:00-04:00",
      "bullish_score": 9.5,
      "bearish_score": 12.0,
      "net_score": -2.5,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 22,
      "bullish_signal_count": 10,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.455
    },
    {
      "timestamp": "2026-07-30T12:30:00-04:00",
      "bullish_score": 8.5,
      "bearish_score": 16.0,
      "net_score": -7.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 24,
      "bullish_signal_count": 9,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.375
    },
    {
      "timestamp": "2026-07-30T13:30:00-04:00",
      "bullish_score": 9.5,
      "bearish_score": 12.0,
      "net_score": -2.5,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 22,
      "bullish_signal_count": 10,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.455
    },
    {
      "timestamp": "2026-07-30T14:30:00-04:00",
      "bullish_score": 10.5,
      "bearish_score": 11.0,
      "net_score": -0.5,
      "bias": "NEUTRAL",
      "confidence": "LOW",
      "signal_count": 22,
      "bullish_signal_count": 11,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.5
    },
    {
      "timestamp": "2026-07-30T15:30:00-04:00",
      "bullish_score": 11.5,
      "bearish_score": 11.0,
      "net_score": 0.5,
      "bias": "NEUTRAL",
      "confidence": "LOW",
      "signal_count": 23,
      "bullish_signal_count": 12,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.522
    },
    {
      "timestamp": "2026-07-31T09:30:00-04:00",
      "bullish_score": 20.0,
      "bearish_score": 64.5,
      "net_score": -44.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 65,
      "bullish_signal_count": 20,
      "bearish_signal_count": 45,
      "agreement_ratio": 0.308
    },
    {
      "timestamp": "2026-07-31T10:30:00-04:00",
      "bullish_score": 17.0,
      "bearish_score": 29.5,
      "net_score": -12.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 41,
      "bullish_signal_count": 17,
      "bearish_signal_count": 24,
      "agreement_ratio": 0.415
    },
    {
      "timestamp": "2026-07-31T11:30:00-04:00",
      "bullish_score": 22.0,
      "bearish_score": 37.5,
      "net_score": -15.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 50,
      "bullish_signal_count": 22,
      "bearish_signal_count": 28,
      "agreement_ratio": 0.44
    },
    {
      "timestamp": "2026-07-31T12:30:00-04:00",
      "bullish_score": 11.0,
      "bearish_score": 20.5,
      "net_score": -9.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 29,
      "bullish_signal_count": 10,
      "bearish_signal_count": 19,
      "agreement_ratio": 0.345
    },
    {
      "timestamp": "2026-07-31T13:30:00-04:00",
      "bullish_score": 7.0,
      "bearish_score": 21.0,
      "net_score": -14.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 29,
      "bullish_signal_count": 7,
      "bearish_signal_count": 22,
      "agreement_ratio": 0.241
    },
    {
      "timestamp": "2026-07-31T14:30:00-04:00",
      "bullish_score": 10.0,
      "bearish_score": 21.0,
      "net_score": -11.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 32,
      "bullish_signal_count": 10,
      "bearish_signal_count": 22,
      "agreement_ratio": 0.312
    },
    {
      "timestamp": "2026-07-31T15:30:00-04:00",
      "bullish_score": 20.0,
      "bearish_score": 28.0,
      "net_score": -8.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 43,
      "bullish_signal_count": 20,
      "bearish_signal_count": 23,
      "agreement_ratio": 0.465
    },
    {
      "timestamp": "2026-08-03T09:30:00-04:00",
      "bullish_score": 26.0,
      "bearish_score": 50.0,
      "net_score": -24.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 56,
      "bullish_signal_count": 25,
      "bearish_signal_count": 31,
      "agreement_ratio": 0.446
    },
    {
      "timestamp": "2026-08-03T10:30:00-04:00",
      "bullish_score": 12.0,
      "bearish_score": 33.0,
      "net_score": -21.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 36,
      "bullish_signal_count": 12,
      "bearish_signal_count": 24,
      "agreement_ratio": 0.333
    },
    {
      "timestamp": "2026-08-03T11:30:00-04:00",
      "bullish_score": 16.0,
      "bearish_score": 41.0,
      "net_score": -25.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 44,
      "bullish_signal_count": 16,
      "bearish_signal_count": 28,
      "agreement_ratio": 0.364
    },
    {
      "timestamp": "2026-08-03T12:30:00-04:00",
      "bullish_score": 19.0,
      "bearish_score": 38.0,
      "net_score": -19.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 46,
      "bullish_signal_count": 19,
      "bearish_signal_count": 27,
      "agreement_ratio": 0.413
    },
    {
      "timestamp": "2026-08-03T13:30:00-04:00",
      "bullish_score": 26.0,
      "bearish_score": 40.0,
      "net_score": -14.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 55,
      "bullish_signal_count": 26,
      "bearish_signal_count": 29,
      "agreement_ratio": 0.473
    },
    {
      "timestamp": "2026-08-03T14:30:00-04:00",
      "bullish_score": 19.0,
      "bearish_score": 26.0,
      "net_score": -7.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 38,
      "bullish_signal_count": 17,
      "bearish_signal_count": 21,
      "agreement_ratio": 0.447
    },
    {
      "timestamp": "2026-08-03T15:30:00-04:00",
      "bullish_score": 10.0,
      "bearish_score": 15.0,
      "net_score": -5.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 24,
      "bullish_signal_count": 10,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.417
    },
    {
      "timestamp": "2026-08-04T09:30:00-04:00",
      "bullish_score": 20.0,
      "bearish_score": 11.0,
      "net_score": 9.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 18,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.6
    },
    {
      "timestamp": "2026-08-04T10:30:00-04:00",
      "bullish_score": 17.0,
      "bearish_score": 10.5,
      "net_score": 6.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 27,
      "bullish_signal_count": 16,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.593
    },
    {
      "timestamp": "2026-08-04T11:30:00-04:00",
      "bullish_score": 26.0,
      "bearish_score": 13.5,
      "net_score": 12.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 35,
      "bullish_signal_count": 21,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.6
    },
    {
      "timestamp": "2026-08-04T12:30:00-04:00",
      "bullish_score": 26.0,
      "bearish_score": 14.5,
      "net_score": 11.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 36,
      "bullish_signal_count": 21,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.583
    },
    {
      "timestamp": "2026-08-04T13:30:00-04:00",
      "bullish_score": 21.0,
      "bearish_score": 14.5,
      "net_score": 6.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 34,
      "bullish_signal_count": 19,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.559
    },
    {
      "timestamp": "2026-08-04T14:30:00-04:00",
      "bullish_score": 21.0,
      "bearish_score": 17.5,
      "net_score": 3.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 36,
      "bullish_signal_count": 18,
      "bearish_signal_count": 18,
      "agreement_ratio": 0.5
    },
    {
      "timestamp": "2026-08-04T15:30:00-04:00",
      "bullish_score": 18.0,
      "bearish_score": 14.5,
      "net_score": 3.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 31,
      "bullish_signal_count": 17,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.548
    },
    {
      "timestamp": "2026-08-05T09:30:00-04:00",
      "bullish_score": 22.5,
      "bearish_score": 9.0,
      "net_score": 13.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 29,
      "bullish_signal_count": 20,
      "bearish_signal_count": 9,
      "agreement_ratio": 0.69
    },
    {
      "timestamp": "2026-08-05T10:30:00-04:00",
      "bullish_score": 17.5,
      "bearish_score": 31.0,
      "net_score": -13.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 40,
      "bullish_signal_count": 17,
      "bearish_signal_count": 23,
      "agreement_ratio": 0.425
    },
    {
      "timestamp": "2026-08-05T11:30:00-04:00",
      "bullish_score": 14.5,
      "bearish_score": 11.0,
      "net_score": 3.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 25,
      "bullish_signal_count": 14,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.56
    },
    {
      "timestamp": "2026-08-05T12:30:00-04:00",
      "bullish_score": 21.5,
      "bearish_score": 9.0,
      "net_score": 12.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 28,
      "bullish_signal_count": 19,
      "bearish_signal_count": 9,
      "agreement_ratio": 0.679
    },
    {
      "timestamp": "2026-08-05T13:30:00-04:00",
      "bullish_score": 30.0,
      "bearish_score": 13.0,
      "net_score": 17.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 38,
      "bullish_signal_count": 25,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.658
    },
    {
      "timestamp": "2026-08-05T14:30:00-04:00",
      "bullish_score": 17.0,
      "bearish_score": 16.0,
      "net_score": 1.0,
      "bias": "BULLISH",
      "confidence": "LOW",
      "signal_count": 33,
      "bullish_signal_count": 17,
      "bearish_signal_count": 16,
      "agreement_ratio": 0.515
    },
    {
      "timestamp": "2026-08-05T15:30:00-04:00",
      "bullish_score": 15.0,
      "bearish_score": 10.0,
      "net_score": 5.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 26,
      "bullish_signal_count": 16,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.615
    },
    {
      "timestamp": "2026-08-06T09:30:00-04:00",
      "bullish_score": 17.0,
      "bearish_score": 13.0,
      "net_score": 4.0,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 30,
      "bullish_signal_count": 18,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.6
    },
    {
      "timestamp": "2026-08-06T10:30:00-04:00",
      "bullish_score": 11.5,
      "bearish_score": 19.0,
      "net_score": -7.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 29,
      "bullish_signal_count": 12,
      "bearish_signal_count": 17,
      "agreement_ratio": 0.414
    },
    {
      "timestamp": "2026-08-06T11:30:00-04:00",
      "bullish_score": 19.5,
      "bearish_score": 13.0,
      "net_score": 6.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 18,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.6
    },
    {
      "timestamp": "2026-08-06T12:30:00-04:00",
      "bullish_score": 13.5,
      "bearish_score": 11.0,
      "net_score": 2.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 25,
      "bullish_signal_count": 14,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.56
    },
    {
      "timestamp": "2026-08-06T13:30:00-04:00",
      "bullish_score": 18.5,
      "bearish_score": 14.0,
      "net_score": 4.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 31,
      "bullish_signal_count": 17,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.548
    },
    {
      "timestamp": "2026-08-06T14:30:00-04:00",
      "bullish_score": 10.5,
      "bearish_score": 13.0,
      "net_score": -2.5,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 23,
      "bullish_signal_count": 11,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.478
    },
    {
      "timestamp": "2026-08-06T15:30:00-04:00",
      "bullish_score": 43.5,
      "bearish_score": 16.0,
      "net_score": 27.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 44,
      "bullish_signal_count": 28,
      "bearish_signal_count": 16,
      "agreement_ratio": 0.636
    },
    {
      "timestamp": "2026-08-07T09:30:00-04:00",
      "bullish_score": 33.5,
      "bearish_score": 15.0,
      "net_score": 18.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 37,
      "bullish_signal_count": 22,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.595
    },
    {
      "timestamp": "2026-08-07T10:30:00-04:00",
      "bullish_score": 20.5,
      "bearish_score": 13.0,
      "net_score": 7.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 17,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.567
    },
    {
      "timestamp": "2026-08-07T11:30:00-04:00",
      "bullish_score": 17.5,
      "bearish_score": 18.0,
      "net_score": -0.5,
      "bias": "NEUTRAL",
      "confidence": "LOW",
      "signal_count": 31,
      "bullish_signal_count": 14,
      "bearish_signal_count": 17,
      "agreement_ratio": 0.452
    },
    {
      "timestamp": "2026-08-07T12:30:00-04:00",
      "bullish_score": 21.5,
      "bearish_score": 14.0,
      "net_score": 7.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 16,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.533
    },
    {
      "timestamp": "2026-08-07T13:30:00-04:00",
      "bullish_score": 22.5,
      "bearish_score": 19.0,
      "net_score": 3.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 36,
      "bullish_signal_count": 17,
      "bearish_signal_count": 19,
      "agreement_ratio": 0.472
    },
    {
      "timestamp": "2026-08-07T14:30:00-04:00",
      "bullish_score": 18.5,
      "bearish_score": 17.0,
      "net_score": 1.5,
      "bias": "BULLISH",
      "confidence": "LOW",
      "signal_count": 31,
      "bullish_signal_count": 16,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.516
    },
    {
      "timestamp": "2026-08-07T15:30:00-04:00",
      "bullish_score": 15.5,
      "bearish_score": 8.0,
      "net_score": 7.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 22,
      "bullish_signal_count": 14,
      "bearish_signal_count": 8,
      "agreement_ratio": 0.636
    },
    {
      "timestamp": "2026-08-10T09:30:00-04:00",
      "bullish_score": 63.5,
      "bearish_score": 26.0,
      "net_score": 37.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 62,
      "bullish_signal_count": 36,
      "bearish_signal_count": 26,
      "agreement_ratio": 0.581
    },
    {
      "timestamp": "2026-08-10T10:30:00-04:00",
      "bullish_score": 101.5,
      "bearish_score": 37.0,
      "net_score": 64.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 90,
      "bullish_signal_count": 53,
      "bearish_signal_count": 37,
      "agreement_ratio": 0.589
    },
    {
      "timestamp": "2026-08-10T11:30:00-04:00",
      "bullish_score": 87.5,
      "bearish_score": 38.0,
      "net_score": 49.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 84,
      "bullish_signal_count": 47,
      "bearish_signal_count": 37,
      "agreement_ratio": 0.56
    },
    {
      "timestamp": "2026-08-10T12:30:00-04:00",
      "bullish_score": 92.5,
      "bearish_score": 34.0,
      "net_score": 58.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 84,
      "bullish_signal_count": 50,
      "bearish_signal_count": 34,
      "agreement_ratio": 0.595
    },
    {
      "timestamp": "2026-08-10T13:30:00-04:00",
      "bullish_score": 102.0,
      "bearish_score": 37.0,
      "net_score": 65.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 91,
      "bullish_signal_count": 55,
      "bearish_signal_count": 36,
      "agreement_ratio": 0.604
    },
    {
      "timestamp": "2026-08-10T14:30:00-04:00",
      "bullish_score": 85.0,
      "bearish_score": 33.0,
      "net_score": 52.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 81,
      "bullish_signal_count": 48,
      "bearish_signal_count": 33,
      "agreement_ratio": 0.593
    },
    {
      "timestamp": "2026-08-10T15:30:00-04:00",
      "bullish_score": 78.0,
      "bearish_score": 34.0,
      "net_score": 44.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 78,
      "bullish_signal_count": 44,
      "bearish_signal_count": 34,
      "agreement_ratio": 0.564
    },
    {
      "timestamp": "2026-08-11T09:30:00-04:00",
      "bullish_score": 66.0,
      "bearish_score": 37.0,
      "net_score": 29.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 75,
      "bullish_signal_count": 41,
      "bearish_signal_count": 34,
      "agreement_ratio": 0.547
    },
    {
      "timestamp": "2026-08-11T10:30:00-04:00",
      "bullish_score": 39.0,
      "bearish_score": 15.0,
      "net_score": 24.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 41,
      "bullish_signal_count": 26,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.634
    },
    {
      "timestamp": "2026-08-11T11:30:00-04:00",
      "bullish_score": 28.0,
      "bearish_score": 14.0,
      "net_score": 14.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 35,
      "bullish_signal_count": 21,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.6
    },
    {
      "timestamp": "2026-08-11T12:30:00-04:00",
      "bullish_score": 26.0,
      "bearish_score": 15.0,
      "net_score": 11.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 35,
      "bullish_signal_count": 21,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.6
    },
    {
      "timestamp": "2026-08-11T13:30:00-04:00",
      "bullish_score": 23.0,
      "bearish_score": 11.0,
      "net_score": 12.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 29,
      "bullish_signal_count": 18,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.621
    },
    {
      "timestamp": "2026-08-11T14:30:00-04:00",
      "bullish_score": 14.0,
      "bearish_score": 19.0,
      "net_score": -5.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 29,
      "bullish_signal_count": 14,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.483
    },
    {
      "timestamp": "2026-08-11T15:30:00-04:00",
      "bullish_score": 16.0,
      "bearish_score": 9.0,
      "net_score": 7.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 24,
      "bullish_signal_count": 15,
      "bearish_signal_count": 9,
      "agreement_ratio": 0.625
    },
    {
      "timestamp": "2026-08-12T09:30:00-04:00",
      "bullish_score": 16.0,
      "bearish_score": 9.0,
      "net_score": 7.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 24,
      "bullish_signal_count": 15,
      "bearish_signal_count": 9,
      "agreement_ratio": 0.625
    },
    {
      "timestamp": "2026-08-12T10:30:00-04:00",
      "bullish_score": 17.5,
      "bearish_score": 10.0,
      "net_score": 7.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 25,
      "bullish_signal_count": 16,
      "bearish_signal_count": 9,
      "agreement_ratio": 0.64
    },
    {
      "timestamp": "2026-08-12T11:30:00-04:00",
      "bullish_score": 16.5,
      "bearish_score": 8.0,
      "net_score": 8.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 23,
      "bullish_signal_count": 15,
      "bearish_signal_count": 8,
      "agreement_ratio": 0.652
    },
    {
      "timestamp": "2026-08-12T12:30:00-04:00",
      "bullish_score": 14.5,
      "bearish_score": 12.0,
      "net_score": 2.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 24,
      "bullish_signal_count": 14,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.583
    },
    {
      "timestamp": "2026-08-12T13:30:00-04:00",
      "bullish_score": 15.5,
      "bearish_score": 11.0,
      "net_score": 4.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 25,
      "bullish_signal_count": 15,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.6
    },
    {
      "timestamp": "2026-08-12T14:30:00-04:00",
      "bullish_score": 14.5,
      "bearish_score": 14.0,
      "net_score": 0.5,
      "bias": "NEUTRAL",
      "confidence": "LOW",
      "signal_count": 28,
      "bullish_signal_count": 14,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.5
    },
    {
      "timestamp": "2026-08-12T15:30:00-04:00",
      "bullish_score": 9.5,
      "bearish_score": 14.0,
      "net_score": -4.5,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 22,
      "bullish_signal_count": 10,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.455
    },
    {
      "timestamp": "2026-08-13T09:30:00-04:00",
      "bullish_score": 14.5,
      "bearish_score": 22.0,
      "net_score": -7.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 29,
      "bullish_signal_count": 13,
      "bearish_signal_count": 16,
      "agreement_ratio": 0.448
    },
    {
      "timestamp": "2026-08-13T10:30:00-04:00",
      "bullish_score": 12.5,
      "bearish_score": 16.0,
      "net_score": -3.5,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 24,
      "bullish_signal_count": 12,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.5
    },
    {
      "timestamp": "2026-08-13T11:30:00-04:00",
      "bullish_score": 11.0,
      "bearish_score": 25.5,
      "net_score": -14.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 11,
      "bearish_signal_count": 19,
      "agreement_ratio": 0.367
    },
    {
      "timestamp": "2026-08-13T12:30:00-04:00",
      "bullish_score": 14.0,
      "bearish_score": 38.5,
      "net_score": -24.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 42,
      "bullish_signal_count": 14,
      "bearish_signal_count": 28,
      "agreement_ratio": 0.333
    },
    {
      "timestamp": "2026-08-13T13:30:00-04:00",
      "bullish_score": 11.0,
      "bearish_score": 25.5,
      "net_score": -14.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 32,
      "bullish_signal_count": 10,
      "bearish_signal_count": 22,
      "agreement_ratio": 0.312
    },
    {
      "timestamp": "2026-08-13T14:30:00-04:00",
      "bullish_score": 11.0,
      "bearish_score": 32.0,
      "net_score": -21.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 37,
      "bullish_signal_count": 11,
      "bearish_signal_count": 26,
      "agreement_ratio": 0.297
    },
    {
      "timestamp": "2026-08-13T15:30:00-04:00",
      "bullish_score": 6.0,
      "bearish_score": 28.0,
      "net_score": -22.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 5,
      "bearish_signal_count": 25,
      "agreement_ratio": 0.167
    },
    {
      "timestamp": "2026-08-14T09:30:00-04:00",
      "bullish_score": 25.0,
      "bearish_score": 7.5,
      "net_score": 17.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 29,
      "bullish_signal_count": 21,
      "bearish_signal_count": 8,
      "agreement_ratio": 0.724
    },
    {
      "timestamp": "2026-08-14T10:30:00-04:00",
      "bullish_score": 10.0,
      "bearish_score": 9.5,
      "net_score": 0.5,
      "bias": "NEUTRAL",
      "confidence": "LOW",
      "signal_count": 18,
      "bullish_signal_count": 9,
      "bearish_signal_count": 9,
      "agreement_ratio": 0.5
    },
    {
      "timestamp": "2026-08-14T11:30:00-04:00",
      "bullish_score": 15.0,
      "bearish_score": 9.5,
      "net_score": 5.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 24,
      "bullish_signal_count": 14,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.583
    },
    {
      "timestamp": "2026-08-14T12:30:00-04:00",
      "bullish_score": 8.0,
      "bearish_score": 8.5,
      "net_score": -0.5,
      "bias": "NEUTRAL",
      "confidence": "LOW",
      "signal_count": 16,
      "bullish_signal_count": 8,
      "bearish_signal_count": 8,
      "agreement_ratio": 0.5
    },
    {
      "timestamp": "2026-08-14T13:30:00-04:00",
      "bullish_score": 17.0,
      "bearish_score": 7.5,
      "net_score": 9.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 24,
      "bullish_signal_count": 16,
      "bearish_signal_count": 8,
      "agreement_ratio": 0.667
    },
    {
      "timestamp": "2026-08-14T14:30:00-04:00",
      "bullish_score": 5.0,
      "bearish_score": 16.5,
      "net_score": -11.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 19,
      "bullish_signal_count": 5,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.263
    },
    {
      "timestamp": "2026-08-14T15:30:00-04:00",
      "bullish_score": 18.0,
      "bearish_score": 7.5,
      "net_score": 10.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 24,
      "bullish_signal_count": 16,
      "bearish_signal_count": 8,
      "agreement_ratio": 0.667
    },
    {
      "timestamp": "2026-08-17T09:30:00-04:00",
      "bullish_score": 18.0,
      "bearish_score": 8.0,
      "net_score": 10.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 24,
      "bullish_signal_count": 16,
      "bearish_signal_count": 8,
      "agreement_ratio": 0.667
    },
    {
      "timestamp": "2026-08-17T10:30:00-04:00",
      "bullish_score": 7.0,
      "bearish_score": 18.0,
      "net_score": -11.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 21,
      "bullish_signal_count": 6,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.286
    },
    {
      "timestamp": "2026-08-17T11:30:00-04:00",
      "bullish_score": 8.0,
      "bearish_score": 11.0,
      "net_score": -3.0,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 17,
      "bullish_signal_count": 7,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.412
    },
    {
      "timestamp": "2026-08-17T12:30:00-04:00",
      "bullish_score": 18.0,
      "bearish_score": 6.0,
      "net_score": 12.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 22,
      "bullish_signal_count": 16,
      "bearish_signal_count": 6,
      "agreement_ratio": 0.727
    },
    {
      "timestamp": "2026-08-17T13:30:00-04:00",
      "bullish_score": 28.0,
      "bearish_score": 8.0,
      "net_score": 20.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 29,
      "bullish_signal_count": 21,
      "bearish_signal_count": 8,
      "agreement_ratio": 0.724
    },
    {
      "timestamp": "2026-08-17T14:30:00-04:00",
      "bullish_score": 11.0,
      "bearish_score": 4.0,
      "net_score": 7.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 15,
      "bullish_signal_count": 11,
      "bearish_signal_count": 4,
      "agreement_ratio": 0.733
    },
    {
      "timestamp": "2026-08-17T15:30:00-04:00",
      "bullish_score": 13.0,
      "bearish_score": 4.0,
      "net_score": 9.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 17,
      "bullish_signal_count": 13,
      "bearish_signal_count": 4,
      "agreement_ratio": 0.765
    },
    {
      "timestamp": "2026-08-18T09:30:00-04:00",
      "bullish_score": 6.0,
      "bearish_score": 24.0,
      "net_score": -18.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 25,
      "bullish_signal_count": 6,
      "bearish_signal_count": 19,
      "agreement_ratio": 0.24
    },
    {
      "timestamp": "2026-08-18T10:30:00-04:00",
      "bullish_score": 14.0,
      "bearish_score": 37.0,
      "net_score": -23.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 40,
      "bullish_signal_count": 13,
      "bearish_signal_count": 27,
      "agreement_ratio": 0.325
    },
    {
      "timestamp": "2026-08-18T11:30:00-04:00",
      "bullish_score": 10.0,
      "bearish_score": 20.0,
      "net_score": -10.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 28,
      "bullish_signal_count": 9,
      "bearish_signal_count": 19,
      "agreement_ratio": 0.321
    },
    {
      "timestamp": "2026-08-18T12:30:00-04:00",
      "bullish_score": 8.0,
      "bearish_score": 19.0,
      "net_score": -11.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 26,
      "bullish_signal_count": 8,
      "bearish_signal_count": 18,
      "agreement_ratio": 0.308
    },
    {
      "timestamp": "2026-08-18T13:30:00-04:00",
      "bullish_score": 11.0,
      "bearish_score": 15.0,
      "net_score": -4.0,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 26,
      "bullish_signal_count": 11,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.423
    },
    {
      "timestamp": "2026-08-18T14:30:00-04:00",
      "bullish_score": 11.0,
      "bearish_score": 14.0,
      "net_score": -3.0,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 24,
      "bullish_signal_count": 10,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.417
    },
    {
      "timestamp": "2026-08-18T15:30:00-04:00",
      "bullish_score": 15.0,
      "bearish_score": 7.0,
      "net_score": 8.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 20,
      "bullish_signal_count": 13,
      "bearish_signal_count": 7,
      "agreement_ratio": 0.65
    },
    {
      "timestamp": "2026-08-19T09:30:00-04:00",
      "bullish_score": 82.5,
      "bearish_score": 33.0,
      "net_score": 49.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 80,
      "bullish_signal_count": 49,
      "bearish_signal_count": 31,
      "agreement_ratio": 0.613
    },
    {
      "timestamp": "2026-08-19T10:30:00-04:00",
      "bullish_score": 102.5,
      "bearish_score": 33.0,
      "net_score": 69.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 86,
      "bullish_signal_count": 55,
      "bearish_signal_count": 31,
      "agreement_ratio": 0.64
    },
    {
      "timestamp": "2026-08-19T11:30:00-04:00",
      "bullish_score": 49.0,
      "bearish_score": 27.0,
      "net_score": 22.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 57,
      "bullish_signal_count": 34,
      "bearish_signal_count": 23,
      "agreement_ratio": 0.596
    },
    {
      "timestamp": "2026-08-19T12:30:00-04:00",
      "bullish_score": 19.0,
      "bearish_score": 6.0,
      "net_score": 13.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 23,
      "bullish_signal_count": 17,
      "bearish_signal_count": 6,
      "agreement_ratio": 0.739
    },
    {
      "timestamp": "2026-08-19T13:30:00-04:00",
      "bullish_score": 12.5,
      "bearish_score": 8.0,
      "net_score": 4.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 21,
      "bullish_signal_count": 13,
      "bearish_signal_count": 8,
      "agreement_ratio": 0.619
    },
    {
      "timestamp": "2026-08-19T14:30:00-04:00",
      "bullish_score": 10.5,
      "bearish_score": 10.0,
      "net_score": 0.5,
      "bias": "NEUTRAL",
      "confidence": "LOW",
      "signal_count": 21,
      "bullish_signal_count": 11,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.524
    },
    {
      "timestamp": "2026-08-19T15:30:00-04:00",
      "bullish_score": 8.5,
      "bearish_score": 15.0,
      "net_score": -6.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 22,
      "bullish_signal_count": 9,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.409
    },
    {
      "timestamp": "2026-08-20T09:30:00-04:00",
      "bullish_score": 27.5,
      "bearish_score": 13.0,
      "net_score": 14.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 33,
      "bullish_signal_count": 20,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.606
    },
    {
      "timestamp": "2026-08-20T10:30:00-04:00",
      "bullish_score": 35.5,
      "bearish_score": 16.0,
      "net_score": 19.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 40,
      "bullish_signal_count": 24,
      "bearish_signal_count": 16,
      "agreement_ratio": 0.6
    },
    {
      "timestamp": "2026-08-20T11:30:00-04:00",
      "bullish_score": 35.5,
      "bearish_score": 15.0,
      "net_score": 20.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 41,
      "bullish_signal_count": 26,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.634
    },
    {
      "timestamp": "2026-08-20T12:30:00-04:00",
      "bullish_score": 17.5,
      "bearish_score": 9.0,
      "net_score": 8.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 24,
      "bullish_signal_count": 15,
      "bearish_signal_count": 9,
      "agreement_ratio": 0.625
    },
    {
      "timestamp": "2026-08-20T13:30:00-04:00",
      "bullish_score": 10.5,
      "bearish_score": 7.0,
      "net_score": 3.5,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 18,
      "bullish_signal_count": 11,
      "bearish_signal_count": 7,
      "agreement_ratio": 0.611
    },
    {
      "timestamp": "2026-08-20T14:30:00-04:00",
      "bullish_score": 17.0,
      "bearish_score": 13.0,
      "net_score": 4.0,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 27,
      "bullish_signal_count": 15,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.556
    },
    {
      "timestamp": "2026-08-20T15:30:00-04:00",
      "bullish_score": 33.0,
      "bearish_score": 13.0,
      "net_score": 20.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 38,
      "bullish_signal_count": 25,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.658
    },
    {
      "timestamp": "2026-08-21T09:30:00-04:00",
      "bullish_score": 73.0,
      "bearish_score": 28.0,
      "net_score": 45.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 68,
      "bullish_signal_count": 40,
      "bearish_signal_count": 28,
      "agreement_ratio": 0.588
    },
    {
      "timestamp": "2026-08-21T10:30:00-04:00",
      "bullish_score": 80.0,
      "bearish_score": 29.0,
      "net_score": 51.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 74,
      "bullish_signal_count": 45,
      "bearish_signal_count": 29,
      "agreement_ratio": 0.608
    },
    {
      "timestamp": "2026-08-21T11:30:00-04:00",
      "bullish_score": 81.0,
      "bearish_score": 30.0,
      "net_score": 51.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 75,
      "bullish_signal_count": 45,
      "bearish_signal_count": 30,
      "agreement_ratio": 0.6
    },
    {
      "timestamp": "2026-08-21T12:30:00-04:00",
      "bullish_score": 40.0,
      "bearish_score": 21.0,
      "net_score": 19.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 49,
      "bullish_signal_count": 29,
      "bearish_signal_count": 20,
      "agreement_ratio": 0.592
    },
    {
      "timestamp": "2026-08-21T13:30:00-04:00",
      "bullish_score": 38.0,
      "bearish_score": 17.0,
      "net_score": 21.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 44,
      "bullish_signal_count": 27,
      "bearish_signal_count": 17,
      "agreement_ratio": 0.614
    },
    {
      "timestamp": "2026-08-21T14:30:00-04:00",
      "bullish_score": 27.0,
      "bearish_score": 15.0,
      "net_score": 12.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 38,
      "bullish_signal_count": 23,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.605
    },
    {
      "timestamp": "2026-08-21T15:30:00-04:00",
      "bullish_score": 21.0,
      "bearish_score": 13.0,
      "net_score": 8.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 19,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.633
    },
    {
      "timestamp": "2026-08-24T09:30:00-04:00",
      "bullish_score": 22.0,
      "bearish_score": 14.0,
      "net_score": 8.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 34,
      "bullish_signal_count": 20,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.588
    },
    {
      "timestamp": "2026-08-24T10:30:00-04:00",
      "bullish_score": 11.0,
      "bearish_score": 12.0,
      "net_score": -1.0,
      "bias": "BEARISH",
      "confidence": "LOW",
      "signal_count": 23,
      "bullish_signal_count": 12,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.522
    },
    {
      "timestamp": "2026-08-24T11:30:00-04:00",
      "bullish_score": 12.5,
      "bearish_score": 26.5,
      "net_score": -14.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 34,
      "bullish_signal_count": 13,
      "bearish_signal_count": 21,
      "agreement_ratio": 0.382
    },
    {
      "timestamp": "2026-08-24T12:30:00-04:00",
      "bullish_score": 11.5,
      "bearish_score": 28.5,
      "net_score": -17.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 34,
      "bullish_signal_count": 12,
      "bearish_signal_count": 22,
      "agreement_ratio": 0.353
    },
    {
      "timestamp": "2026-08-24T13:30:00-04:00",
      "bullish_score": 11.5,
      "bearish_score": 16.5,
      "net_score": -5.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 27,
      "bullish_signal_count": 12,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.444
    },
    {
      "timestamp": "2026-08-24T14:30:00-04:00",
      "bullish_score": 11.5,
      "bearish_score": 12.5,
      "net_score": -1.0,
      "bias": "BEARISH",
      "confidence": "LOW",
      "signal_count": 25,
      "bullish_signal_count": 12,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.48
    },
    {
      "timestamp": "2026-08-24T15:30:00-04:00",
      "bullish_score": 12.5,
      "bearish_score": 11.5,
      "net_score": 1.0,
      "bias": "BULLISH",
      "confidence": "LOW",
      "signal_count": 25,
      "bullish_signal_count": 13,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.52
    },
    {
      "timestamp": "2026-08-25T09:30:00-04:00",
      "bullish_score": 17.0,
      "bearish_score": 28.5,
      "net_score": -11.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 37,
      "bullish_signal_count": 16,
      "bearish_signal_count": 21,
      "agreement_ratio": 0.432
    },
    {
      "timestamp": "2026-08-25T10:30:00-04:00",
      "bullish_score": 11.0,
      "bearish_score": 15.5,
      "net_score": -4.5,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 22,
      "bullish_signal_count": 9,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.409
    },
    {
      "timestamp": "2026-08-25T11:30:00-04:00",
      "bullish_score": 9.0,
      "bearish_score": 12.5,
      "net_score": -3.5,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 20,
      "bullish_signal_count": 8,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.4
    },
    {
      "timestamp": "2026-08-25T12:30:00-04:00",
      "bullish_score": 4.0,
      "bearish_score": 11.5,
      "net_score": -7.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 16,
      "bullish_signal_count": 4,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.25
    },
    {
      "timestamp": "2026-08-25T13:30:00-04:00",
      "bullish_score": 15.0,
      "bearish_score": 9.5,
      "net_score": 5.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 25,
      "bullish_signal_count": 15,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.6
    },
    {
      "timestamp": "2026-08-25T14:30:00-04:00",
      "bullish_score": 10.0,
      "bearish_score": 13.5,
      "net_score": -3.5,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 23,
      "bullish_signal_count": 9,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.391
    },
    {
      "timestamp": "2026-08-25T15:30:00-04:00",
      "bullish_score": 13.0,
      "bearish_score": 10.0,
      "net_score": 3.0,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 22,
      "bullish_signal_count": 12,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.545
    },
    {
      "timestamp": "2026-08-26T09:30:00-04:00",
      "bullish_score": 4.0,
      "bearish_score": 15.0,
      "net_score": -11.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 18,
      "bullish_signal_count": 4,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.222
    },
    {
      "timestamp": "2026-08-26T10:30:00-04:00",
      "bullish_score": 2.0,
      "bearish_score": 9.0,
      "net_score": -7.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 10,
      "bullish_signal_count": 2,
      "bearish_signal_count": 8,
      "agreement_ratio": 0.2
    },
    {
      "timestamp": "2026-08-26T11:30:00-04:00",
      "bullish_score": 4.0,
      "bearish_score": 13.0,
      "net_score": -9.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 17,
      "bullish_signal_count": 4,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.235
    },
    {
      "timestamp": "2026-08-26T12:30:00-04:00",
      "bullish_score": 3.0,
      "bearish_score": 13.0,
      "net_score": -10.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 16,
      "bullish_signal_count": 3,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.188
    },
    {
      "timestamp": "2026-08-26T13:30:00-04:00",
      "bullish_score": 2.0,
      "bearish_score": 10.0,
      "net_score": -8.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 12,
      "bullish_signal_count": 2,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.167
    },
    {
      "timestamp": "2026-08-26T14:30:00-04:00",
      "bullish_score": 4.0,
      "bearish_score": 10.0,
      "net_score": -6.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 13,
      "bullish_signal_count": 3,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.231
    },
    {
      "timestamp": "2026-08-26T15:30:00-04:00",
      "bullish_score": 7.0,
      "bearish_score": 18.0,
      "net_score": -11.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 22,
      "bullish_signal_count": 7,
      "bearish_signal_count": 15,
      "agreement_ratio": 0.318
    },
    {
      "timestamp": "2026-08-27T09:30:00-04:00",
      "bullish_score": 22.0,
      "bearish_score": 45.5,
      "net_score": -23.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 51,
      "bullish_signal_count": 22,
      "bearish_signal_count": 29,
      "agreement_ratio": 0.431
    },
    {
      "timestamp": "2026-08-27T10:30:00-04:00",
      "bullish_score": 10.0,
      "bearish_score": 19.5,
      "net_score": -9.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 26,
      "bullish_signal_count": 10,
      "bearish_signal_count": 16,
      "agreement_ratio": 0.385
    },
    {
      "timestamp": "2026-08-27T11:30:00-04:00",
      "bullish_score": 15.0,
      "bearish_score": 29.5,
      "net_score": -14.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 35,
      "bullish_signal_count": 15,
      "bearish_signal_count": 20,
      "agreement_ratio": 0.429
    },
    {
      "timestamp": "2026-08-27T12:30:00-04:00",
      "bullish_score": 9.0,
      "bearish_score": 11.5,
      "net_score": -2.5,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 19,
      "bullish_signal_count": 7,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.368
    },
    {
      "timestamp": "2026-08-27T13:30:00-04:00",
      "bullish_score": 19.0,
      "bearish_score": 5.5,
      "net_score": 13.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 22,
      "bullish_signal_count": 16,
      "bearish_signal_count": 6,
      "agreement_ratio": 0.727
    },
    {
      "timestamp": "2026-08-27T14:30:00-04:00",
      "bullish_score": 5.0,
      "bearish_score": 13.5,
      "net_score": -8.5,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 18,
      "bullish_signal_count": 5,
      "bearish_signal_count": 13,
      "agreement_ratio": 0.278
    },
    {
      "timestamp": "2026-08-27T15:30:00-04:00",
      "bullish_score": 20.0,
      "bearish_score": 5.5,
      "net_score": 14.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 22,
      "bullish_signal_count": 16,
      "bearish_signal_count": 6,
      "agreement_ratio": 0.727
    },
    {
      "timestamp": "2026-08-28T09:30:00-04:00",
      "bullish_score": 7.0,
      "bearish_score": 16.0,
      "net_score": -9.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 20,
      "bullish_signal_count": 6,
      "bearish_signal_count": 14,
      "agreement_ratio": 0.3
    },
    {
      "timestamp": "2026-08-28T10:30:00-04:00",
      "bullish_score": 22.0,
      "bearish_score": 11.0,
      "net_score": 11.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 19,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.633
    },
    {
      "timestamp": "2026-08-28T11:30:00-04:00",
      "bullish_score": 4.0,
      "bearish_score": 11.0,
      "net_score": -7.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 15,
      "bullish_signal_count": 4,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.267
    },
    {
      "timestamp": "2026-08-28T12:30:00-04:00",
      "bullish_score": 9.0,
      "bearish_score": 11.0,
      "net_score": -2.0,
      "bias": "BEARISH",
      "confidence": "MEDIUM",
      "signal_count": 18,
      "bullish_signal_count": 7,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.389
    },
    {
      "timestamp": "2026-08-28T13:30:00-04:00",
      "bullish_score": 4.0,
      "bearish_score": 12.0,
      "net_score": -8.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 16,
      "bullish_signal_count": 4,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.25
    },
    {
      "timestamp": "2026-08-28T14:30:00-04:00",
      "bullish_score": 5.0,
      "bearish_score": 18.0,
      "net_score": -13.0,
      "bias": "BEARISH",
      "confidence": "HIGH",
      "signal_count": 22,
      "bullish_signal_count": 5,
      "bearish_signal_count": 17,
      "agreement_ratio": 0.227
    },
    {
      "timestamp": "2026-08-28T15:30:00-04:00",
      "bullish_score": 16.0,
      "bearish_score": 7.0,
      "net_score": 9.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 21,
      "bullish_signal_count": 14,
      "bearish_signal_count": 7,
      "agreement_ratio": 0.667
    },
    {
      "timestamp": "2026-08-31T09:30:00-04:00",
      "bullish_score": 60.0,
      "bearish_score": 28.0,
      "net_score": 32.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 60,
      "bullish_signal_count": 34,
      "bearish_signal_count": 26,
      "agreement_ratio": 0.567
    },
    {
      "timestamp": "2026-08-31T10:30:00-04:00",
      "bullish_score": 12.0,
      "bearish_score": 11.0,
      "net_score": 1.0,
      "bias": "BULLISH",
      "confidence": "LOW",
      "signal_count": 23,
      "bullish_signal_count": 12,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.522
    },
    {
      "timestamp": "2026-08-31T11:30:00-04:00",
      "bullish_score": 14.0,
      "bearish_score": 11.0,
      "net_score": 3.0,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 25,
      "bullish_signal_count": 14,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.56
    },
    {
      "timestamp": "2026-08-31T12:30:00-04:00",
      "bullish_score": 13.0,
      "bearish_score": 10.0,
      "net_score": 3.0,
      "bias": "BULLISH",
      "confidence": "MEDIUM",
      "signal_count": 23,
      "bullish_signal_count": 13,
      "bearish_signal_count": 10,
      "agreement_ratio": 0.565
    },
    {
      "timestamp": "2026-08-31T13:30:00-04:00",
      "bullish_score": 20.5,
      "bearish_score": 9.0,
      "net_score": 11.5,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 26,
      "bullish_signal_count": 17,
      "bearish_signal_count": 9,
      "agreement_ratio": 0.654
    },
    {
      "timestamp": "2026-08-31T14:30:00-04:00",
      "bullish_score": 24.0,
      "bearish_score": 11.0,
      "net_score": 13.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 30,
      "bullish_signal_count": 19,
      "bearish_signal_count": 11,
      "agreement_ratio": 0.633
    },
    {
      "timestamp": "2026-08-31T15:30:00-04:00",
      "bullish_score": 32.0,
      "bearish_score": 12.0,
      "net_score": 20.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 35,
      "bullish_signal_count": 23,
      "bearish_signal_count": 12,
      "agreement_ratio": 0.657
    },
    {
      "timestamp": "2026-08-31T16:00:00-04:00",
      "bullish_score": 20.0,
      "bearish_score": 9.0,
      "net_score": 11.0,
      "bias": "BULLISH",
      "confidence": "HIGH",
      "signal_count": 26,
      "bullish_signal_count": 17,
      "bearish_signal_count": 9,
      "agreement_ratio": 0.654
    }
  ],
  "historical_signal_count": 7112
};

export const signalsByCategory: Record<string, SignalRow[]> = {
  "BB_BREAKOUT": [
    {
      "signal": "ABOVE UPPER BB(30,1.5)",
      "description": "close 38.67 > upper 38.52",
      "strength": "EXTREME BULLISH",
      "category": "BB_BREAKOUT",
      "value": 0.154368,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "xbull"
    },
    {
      "signal": "BB(30,1.5) RIDING UPPER BAND",
      "description": "2 consecutive closes above upper band",
      "strength": "STRONG BULLISH",
      "category": "BB_BREAKOUT",
      "value": 0.154368,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "sbull"
    },
    {
      "signal": "BB(30,1.5) %B > 1",
      "description": "%B 1.10",
      "strength": "BEARISH",
      "category": "BB_BREAKOUT",
      "value": 1.100114,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bear"
    }
  ],
  "PRICE_ACTION": [
    {
      "signal": "GAIN >3% (20b)",
      "description": "+4.51% over 20 bars",
      "strength": "STRONG BULLISH",
      "category": "PRICE_ACTION",
      "value": 4.513509,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "sbull"
    }
  ],
  "ICHIMOKU": [
    {
      "signal": "BULLISH KUMO",
      "description": "SpanA > SpanB (green cloud)",
      "strength": "BULLISH",
      "category": "ICHIMOKU",
      "value": 0.2514,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    },
    {
      "signal": "PRICE ABOVE KUMO",
      "description": "close 38.67 > cloud 38.02",
      "strength": "BULLISH",
      "category": "ICHIMOKU",
      "value": 0.654398,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    }
  ],
  "MOMENTUM": [
    {
      "signal": "MOMENTUM ALIGNED BULLISH",
      "description": "3/3 horizons positive",
      "strength": "BULLISH",
      "category": "MOMENTUM",
      "value": 3.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    },
    {
      "signal": "MOMENTUM REVERSING DOWN",
      "description": "\u0394 ROC5 -0.34pp",
      "strength": "BEARISH",
      "category": "MOMENTUM",
      "value": -0.33678,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bear"
    }
  ],
  "OBV_CMF": [
    {
      "signal": "CMF STRONG BUYING PRESSURE",
      "description": "CMF 0.151",
      "strength": "BULLISH",
      "category": "OBV_CMF",
      "value": 0.151168,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    }
  ],
  "PSAR": [
    {
      "signal": "PSAR UPTREND",
      "description": "SAR 37.90 below price",
      "strength": "BULLISH",
      "category": "PSAR",
      "value": 0.766737,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    }
  ],
  "RANGE": [
    {
      "signal": "WITHIN 5% OF 100b HIGH",
      "description": "close 38.67 vs high 39.80",
      "strength": "BULLISH",
      "category": "RANGE",
      "value": -1.128403,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    },
    {
      "signal": "WITHIN 5% OF 200b HIGH",
      "description": "close 38.67 vs high 39.80",
      "strength": "BULLISH",
      "category": "RANGE",
      "value": -1.128403,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    },
    {
      "signal": "WITHIN 5% OF 20b HIGH",
      "description": "close 38.67 vs high 39.46",
      "strength": "BULLISH",
      "category": "RANGE",
      "value": -0.794003,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    },
    {
      "signal": "WITHIN 5% OF 252b HIGH",
      "description": "close 38.67 vs high 39.80",
      "strength": "BULLISH",
      "category": "RANGE",
      "value": -1.128403,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    },
    {
      "signal": "WITHIN 5% OF 50b HIGH",
      "description": "close 38.67 vs high 39.80",
      "strength": "BULLISH",
      "category": "RANGE",
      "value": -1.128403,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    }
  ],
  "SUPPORT_RESISTANCE": [
    {
      "signal": "NEAR SUPPORT (w=5, prox=2%)",
      "description": "close 38.67 near support 38.00",
      "strength": "BULLISH",
      "category": "SUPPORT_RESISTANCE",
      "value": 0.669998,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    },
    {
      "signal": "NEAR RESISTANCE (w=5, prox=1%)",
      "description": "close 38.67 near resistance 38.90",
      "strength": "BEARISH",
      "category": "SUPPORT_RESISTANCE",
      "value": -0.234001,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bear"
    },
    {
      "signal": "NEAR RESISTANCE (w=5, prox=1.5%)",
      "description": "close 38.67 near resistance 39.18",
      "strength": "BEARISH",
      "category": "SUPPORT_RESISTANCE",
      "value": -0.510002,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bear"
    }
  ],
  "VWAP": [
    {
      "signal": "PRICE ABOVE VWAP",
      "description": "close 38.67 > VWAP 37.96",
      "strength": "BULLISH",
      "category": "VWAP",
      "value": 0.714882,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bull"
    }
  ],
  "ADX": [
    {
      "signal": "STRONG UPTREND",
      "description": "ADX 30.8",
      "strength": "TRENDING",
      "category": "ADX",
      "value": 30.805538,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "trend"
    }
  ],
  "AROON": [
    {
      "signal": "AROON STRONG UPTREND",
      "description": "Aroon up 72",
      "strength": "TRENDING",
      "category": "AROON",
      "value": 72.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "trend"
    }
  ],
  "ATR": [
    {
      "signal": "LOW VOLATILITY REGIME",
      "description": "ATR 1.30% of price",
      "strength": "NEUTRAL",
      "category": "ATR",
      "value": 1.302862,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    }
  ],
  "VOLUME": [
    {
      "signal": "LOW VOLUME <0.3x (MA10)",
      "description": "vol/10MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.3x (MA20)",
      "description": "vol/20MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.3x (MA5)",
      "description": "vol/5MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.3x (MA50)",
      "description": "vol/50MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.5x (MA10)",
      "description": "vol/10MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.5x (MA20)",
      "description": "vol/20MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.5x (MA5)",
      "description": "vol/5MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.5x (MA50)",
      "description": "vol/50MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.7x (MA10)",
      "description": "vol/10MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.7x (MA20)",
      "description": "vol/20MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.7x (MA5)",
      "description": "vol/5MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "LOW VOLUME <0.7x (MA50)",
      "description": "vol/50MA = 0.00",
      "strength": "NEUTRAL",
      "category": "VOLUME",
      "value": 0.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "neut"
    },
    {
      "signal": "VOLUME BEARISH DIVERGENCE (10b)",
      "description": "price up, volume down over 10 bars",
      "strength": "BEARISH",
      "category": "VOLUME",
      "value": -10282.0,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bear"
    }
  ],
  "CCI": [
    {
      "signal": "CCI OVERBOUGHT (>100)",
      "description": "CCI 134",
      "strength": "BEARISH",
      "category": "CCI",
      "value": 133.799484,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bear"
    }
  ],
  "MA_DISTANCE": [
    {
      "signal": ">5% ABOVE 150SMA",
      "description": "+5.88% from 150SMA",
      "strength": "BEARISH",
      "category": "MA_DISTANCE",
      "value": 5.877043,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bear"
    },
    {
      "signal": ">5% ABOVE 200SMA",
      "description": "+7.30% from 200SMA",
      "strength": "BEARISH",
      "category": "MA_DISTANCE",
      "value": 7.301488,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bear"
    }
  ],
  "RSI": [
    {
      "signal": "RSI5 OVERBOUGHT (>65)",
      "description": "RSI(5): 68.9",
      "strength": "BEARISH",
      "category": "RSI",
      "value": 68.860915,
      "timestamp": "2026-08-31T16:00:00-04:00",
      "cls": "bear"
    }
  ]
};

/** One bar of the strongest-signals chart, pre-positioned in the viewBox. */
export interface StrengthRow {
  label: string;
  category: string;
  strength: string;
  points: number | null;
  direction: "bull" | "bear";
  y: number;
  h: number;
  x: number;
  w: number;
}

/** One bar of the bull/bear pressure chart. */
export interface PressureRect {
  x: number;
  w: number;
  bull_y: number;
  bull_h: number;
  bear_y: number;
  bear_h: number;
}

/**
 * Chart geometry, computed in Python by ``build_charts`` and embedded here.
 * The HTML report draws the identical numbers, so the two renderers cannot
 * drift.
 *
 * A run too short to plot emits `{}` for that chart. Each chart is therefore a
 * discriminated union on a literal `ok` flag rather than a bare optional: with
 * `Record<string, never>` alone, TypeScript still permits property access on the
 * union and the guard becomes decorative. The flag makes an unguarded
 * `charts.net_score.line` a compile error, which is the whole point of shipping
 * types alongside the payload.
 */
export type EmptyChart = { ok: false };

export interface NetScoreChart {
  ok: true;
  line: string;
  area: string;
  zero_y: number;
  min: number | null;
  max: number | null;
  first_timestamp: string;
  last_timestamp: string;
  bars: number;
}

export interface PressureChart {
  ok: true;
  rects: PressureRect[];
  mid_y: number;
  peak: number | null;
}

export interface StrengthChart {
  ok: true;
  rows: StrengthRow[];
  mid_x: number;
  height: number;
  peak: number | null;
  shown: number;
  total_directional: number;
  categories_represented: number;
}

export interface Charts {
  net_score: NetScoreChart | EmptyChart;
  pressure: PressureChart | EmptyChart;
  strength: StrengthChart | EmptyChart;
}

export const charts: Charts = {
  "net_score": {
    "ok": true,
    "line": "0.00,21.92 0.53,21.92 1.06,21.03 1.60,21.77 2.13,19.09 2.66,20.58 3.19,28.04 3.72,26.10 4.26,22.22 4.79,21.62 5.32,19.54 5.85,18.04 6.38,20.43 6.91,19.24 7.45,20.73 7.98,22.52 8.51,21.92 9.04,20.73 9.57,8.95 10.11,11.04 10.64,20.28 11.17,18.34 11.70,23.11 12.23,17.45 12.77,16.85 13.30,15.36 13.83,15.66 14.36,26.10 14.89,19.68 15.43,21.47 15.96,22.96 16.49,21.47 17.02,20.88 17.55,20.58 18.09,34.00 18.62,24.46 19.15,25.35 19.68,23.56 20.21,24.90 20.74,24.01 21.28,23.11 21.81,27.89 22.34,26.99 22.87,28.18 23.40,26.39 23.94,24.90 24.47,22.82 25.00,22.22 25.53,18.04 26.06,18.79 26.60,17.00 27.13,17.30 27.66,18.79 28.19,19.68 28.72,19.68 29.26,16.70 29.79,24.75 30.32,19.68 30.85,17.00 31.38,15.66 31.91,20.43 32.45,19.24 32.98,19.54 33.51,22.96 34.04,18.79 34.57,19.98 35.11,19.39 35.64,21.47 36.17,12.53 36.70,15.21 37.23,18.49 37.77,20.88 38.30,18.49 38.83,19.68 39.36,20.28 39.89,18.49 40.43,9.54 40.96,1.49 41.49,5.96 42.02,3.28 42.55,1.34 43.09,5.22 43.62,7.61 44.15,12.08 44.68,13.57 45.21,16.55 45.74,17.45 46.28,17.15 46.81,22.22 47.34,18.64 47.87,18.64 48.40,18.49 48.94,18.19 49.47,19.98 50.00,19.39 50.53,20.58 51.06,22.07 51.60,22.96 52.13,21.77 52.66,25.05 53.19,28.04 53.72,25.05 54.26,26.99 54.79,27.29 55.32,15.51 55.85,20.58 56.38,19.09 56.91,20.88 57.45,17.89 57.98,24.16 58.51,17.60 59.04,17.75 59.57,24.01 60.11,21.62 60.64,17.15 61.17,14.76 61.70,18.64 62.23,18.04 62.77,26.10 63.30,27.59 63.83,23.71 64.36,24.01 64.89,21.92 65.43,21.62 65.96,18.34 66.49,5.96 67.02,0.00 67.55,14.17 68.09,16.85 68.62,19.39 69.15,20.58 69.68,22.67 70.21,16.40 70.74,14.91 71.28,14.61 71.81,18.19 72.34,19.68 72.87,19.54 73.40,14.76 73.94,7.31 74.47,5.52 75.00,5.52 75.53,15.06 76.06,14.46 76.60,17.15 77.13,18.34 77.66,18.34 78.19,21.03 78.72,24.90 79.26,25.80 79.79,22.22 80.32,21.03 80.85,20.43 81.38,24.16 81.91,22.07 82.45,21.77 82.98,22.96 83.51,19.09 84.04,21.77 84.57,19.83 85.11,24.01 85.64,22.82 86.17,23.41 86.70,23.71 87.23,23.11 87.77,22.52 88.30,24.01 88.83,27.74 89.36,23.56 89.89,25.05 90.43,21.47 90.96,16.70 91.49,23.26 92.02,16.40 92.55,23.41 93.09,17.45 93.62,22.82 94.15,21.32 94.68,23.11 95.21,24.61 95.74,18.04 96.28,11.18 96.81,20.43 97.34,19.83 97.87,19.83 98.40,17.30 98.94,16.85 99.47,14.76 100.00,17.45",
    "area": "0.00,20.73 0.00,21.92 0.53,21.92 1.06,21.03 1.60,21.77 2.13,19.09 2.66,20.58 3.19,28.04 3.72,26.10 4.26,22.22 4.79,21.62 5.32,19.54 5.85,18.04 6.38,20.43 6.91,19.24 7.45,20.73 7.98,22.52 8.51,21.92 9.04,20.73 9.57,8.95 10.11,11.04 10.64,20.28 11.17,18.34 11.70,23.11 12.23,17.45 12.77,16.85 13.30,15.36 13.83,15.66 14.36,26.10 14.89,19.68 15.43,21.47 15.96,22.96 16.49,21.47 17.02,20.88 17.55,20.58 18.09,34.00 18.62,24.46 19.15,25.35 19.68,23.56 20.21,24.90 20.74,24.01 21.28,23.11 21.81,27.89 22.34,26.99 22.87,28.18 23.40,26.39 23.94,24.90 24.47,22.82 25.00,22.22 25.53,18.04 26.06,18.79 26.60,17.00 27.13,17.30 27.66,18.79 28.19,19.68 28.72,19.68 29.26,16.70 29.79,24.75 30.32,19.68 30.85,17.00 31.38,15.66 31.91,20.43 32.45,19.24 32.98,19.54 33.51,22.96 34.04,18.79 34.57,19.98 35.11,19.39 35.64,21.47 36.17,12.53 36.70,15.21 37.23,18.49 37.77,20.88 38.30,18.49 38.83,19.68 39.36,20.28 39.89,18.49 40.43,9.54 40.96,1.49 41.49,5.96 42.02,3.28 42.55,1.34 43.09,5.22 43.62,7.61 44.15,12.08 44.68,13.57 45.21,16.55 45.74,17.45 46.28,17.15 46.81,22.22 47.34,18.64 47.87,18.64 48.40,18.49 48.94,18.19 49.47,19.98 50.00,19.39 50.53,20.58 51.06,22.07 51.60,22.96 52.13,21.77 52.66,25.05 53.19,28.04 53.72,25.05 54.26,26.99 54.79,27.29 55.32,15.51 55.85,20.58 56.38,19.09 56.91,20.88 57.45,17.89 57.98,24.16 58.51,17.60 59.04,17.75 59.57,24.01 60.11,21.62 60.64,17.15 61.17,14.76 61.70,18.64 62.23,18.04 62.77,26.10 63.30,27.59 63.83,23.71 64.36,24.01 64.89,21.92 65.43,21.62 65.96,18.34 66.49,5.96 67.02,0.00 67.55,14.17 68.09,16.85 68.62,19.39 69.15,20.58 69.68,22.67 70.21,16.40 70.74,14.91 71.28,14.61 71.81,18.19 72.34,19.68 72.87,19.54 73.40,14.76 73.94,7.31 74.47,5.52 75.00,5.52 75.53,15.06 76.06,14.46 76.60,17.15 77.13,18.34 77.66,18.34 78.19,21.03 78.72,24.90 79.26,25.80 79.79,22.22 80.32,21.03 80.85,20.43 81.38,24.16 81.91,22.07 82.45,21.77 82.98,22.96 83.51,19.09 84.04,21.77 84.57,19.83 85.11,24.01 85.64,22.82 86.17,23.41 86.70,23.71 87.23,23.11 87.77,22.52 88.30,24.01 88.83,27.74 89.36,23.56 89.89,25.05 90.43,21.47 90.96,16.70 91.49,23.26 92.02,16.40 92.55,23.41 93.09,17.45 93.62,22.82 94.15,21.32 94.68,23.11 95.21,24.61 95.74,18.04 96.28,11.18 96.81,20.43 97.34,19.83 97.87,19.83 98.40,17.30 98.94,16.85 99.47,14.76 100.00,17.45 100.00,20.73",
    "zero_y": 20.73,
    "min": -44.5,
    "max": 69.5,
    "first_timestamp": "2026-07-24T10:30:00-04:00",
    "last_timestamp": "2026-08-31T16:00:00-04:00",
    "bars": 189
  },
  "pressure": {
    "ok": true,
    "rects": [
      {
        "x": 0.07,
        "w": 0.38,
        "bull_y": 13.85,
        "bull_h": 3.15,
        "bear_y": 17.0,
        "bear_h": 3.81
      },
      {
        "x": 0.6,
        "w": 0.38,
        "bull_y": 15.01,
        "bull_h": 1.99,
        "bear_y": 17.0,
        "bear_h": 2.65
      },
      {
        "x": 1.13,
        "w": 0.38,
        "bull_y": 15.01,
        "bull_h": 1.99,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 1.66,
        "w": 0.38,
        "bull_y": 14.84,
        "bull_h": 2.16,
        "bear_y": 17.0,
        "bear_h": 2.74
      },
      {
        "x": 2.19,
        "w": 0.38,
        "bull_y": 13.85,
        "bull_h": 3.15,
        "bear_y": 17.0,
        "bear_h": 2.24
      },
      {
        "x": 2.72,
        "w": 0.38,
        "bull_y": 14.68,
        "bull_h": 2.32,
        "bear_y": 17.0,
        "bear_h": 2.24
      },
      {
        "x": 3.25,
        "w": 0.38,
        "bull_y": 12.85,
        "bull_h": 4.15,
        "bear_y": 17.0,
        "bear_h": 8.21
      },
      {
        "x": 3.78,
        "w": 0.38,
        "bull_y": 14.35,
        "bull_h": 2.65,
        "bear_y": 17.0,
        "bear_h": 5.64
      },
      {
        "x": 4.31,
        "w": 0.38,
        "bull_y": 14.68,
        "bull_h": 2.32,
        "bear_y": 17.0,
        "bear_h": 3.15
      },
      {
        "x": 4.84,
        "w": 0.38,
        "bull_y": 14.68,
        "bull_h": 2.32,
        "bear_y": 17.0,
        "bear_h": 2.82
      },
      {
        "x": 5.37,
        "w": 0.38,
        "bull_y": 14.18,
        "bull_h": 2.82,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 5.89,
        "w": 0.38,
        "bull_y": 13.02,
        "bull_h": 3.98,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 6.42,
        "w": 0.38,
        "bull_y": 14.18,
        "bull_h": 2.82,
        "bear_y": 17.0,
        "bear_h": 2.65
      },
      {
        "x": 6.95,
        "w": 0.38,
        "bull_y": 13.35,
        "bull_h": 3.65,
        "bear_y": 17.0,
        "bear_h": 2.82
      },
      {
        "x": 7.48,
        "w": 0.38,
        "bull_y": 14.51,
        "bull_h": 2.49,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 8.01,
        "w": 0.38,
        "bull_y": 15.51,
        "bull_h": 1.49,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 8.54,
        "w": 0.38,
        "bull_y": 15.51,
        "bull_h": 1.49,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 9.07,
        "w": 0.38,
        "bull_y": 15.01,
        "bull_h": 1.99,
        "bear_y": 17.0,
        "bear_h": 1.99
      },
      {
        "x": 9.6,
        "w": 0.38,
        "bull_y": 4.31,
        "bull_h": 12.69,
        "bear_y": 17.0,
        "bear_h": 6.14
      },
      {
        "x": 10.13,
        "w": 0.38,
        "bull_y": 9.12,
        "bull_h": 7.88,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 10.66,
        "w": 0.38,
        "bull_y": 15.09,
        "bull_h": 1.91,
        "bear_y": 17.0,
        "bear_h": 1.66
      },
      {
        "x": 11.19,
        "w": 0.38,
        "bull_y": 13.85,
        "bull_h": 3.15,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 11.71,
        "w": 0.38,
        "bull_y": 15.51,
        "bull_h": 1.49,
        "bear_y": 17.0,
        "bear_h": 2.82
      },
      {
        "x": 12.24,
        "w": 0.38,
        "bull_y": 13.35,
        "bull_h": 3.65,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 12.77,
        "w": 0.38,
        "bull_y": 12.69,
        "bull_h": 4.31,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 13.3,
        "w": 0.38,
        "bull_y": 11.69,
        "bull_h": 5.31,
        "bear_y": 17.0,
        "bear_h": 2.32
      },
      {
        "x": 13.83,
        "w": 0.38,
        "bull_y": 12.19,
        "bull_h": 4.81,
        "bear_y": 17.0,
        "bear_h": 1.99
      },
      {
        "x": 14.36,
        "w": 0.38,
        "bull_y": 15.67,
        "bull_h": 1.33,
        "bear_y": 17.0,
        "bear_h": 4.31
      },
      {
        "x": 14.89,
        "w": 0.38,
        "bull_y": 14.6,
        "bull_h": 2.4,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 15.42,
        "w": 0.38,
        "bull_y": 15.42,
        "bull_h": 1.58,
        "bear_y": 17.0,
        "bear_h": 1.99
      },
      {
        "x": 15.95,
        "w": 0.38,
        "bull_y": 15.59,
        "bull_h": 1.41,
        "bear_y": 17.0,
        "bear_h": 2.65
      },
      {
        "x": 16.48,
        "w": 0.38,
        "bull_y": 15.42,
        "bull_h": 1.58,
        "bear_y": 17.0,
        "bear_h": 1.99
      },
      {
        "x": 17.01,
        "w": 0.38,
        "bull_y": 15.26,
        "bull_h": 1.74,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 17.53,
        "w": 0.38,
        "bull_y": 15.09,
        "bull_h": 1.91,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 18.06,
        "w": 0.38,
        "bull_y": 13.68,
        "bull_h": 3.32,
        "bear_y": 17.0,
        "bear_h": 10.7
      },
      {
        "x": 18.59,
        "w": 0.38,
        "bull_y": 14.18,
        "bull_h": 2.82,
        "bear_y": 17.0,
        "bear_h": 4.89
      },
      {
        "x": 19.12,
        "w": 0.38,
        "bull_y": 13.35,
        "bull_h": 3.65,
        "bear_y": 17.0,
        "bear_h": 6.22
      },
      {
        "x": 19.65,
        "w": 0.38,
        "bull_y": 15.18,
        "bull_h": 1.82,
        "bear_y": 17.0,
        "bear_h": 3.4
      },
      {
        "x": 20.18,
        "w": 0.38,
        "bull_y": 15.84,
        "bull_h": 1.16,
        "bear_y": 17.0,
        "bear_h": 3.48
      },
      {
        "x": 20.71,
        "w": 0.38,
        "bull_y": 15.34,
        "bull_h": 1.66,
        "bear_y": 17.0,
        "bear_h": 3.48
      },
      {
        "x": 21.24,
        "w": 0.38,
        "bull_y": 13.68,
        "bull_h": 3.32,
        "bear_y": 17.0,
        "bear_h": 4.64
      },
      {
        "x": 21.77,
        "w": 0.38,
        "bull_y": 12.69,
        "bull_h": 4.31,
        "bear_y": 17.0,
        "bear_h": 8.29
      },
      {
        "x": 22.3,
        "w": 0.38,
        "bull_y": 15.01,
        "bull_h": 1.99,
        "bear_y": 17.0,
        "bear_h": 5.47
      },
      {
        "x": 22.83,
        "w": 0.38,
        "bull_y": 14.35,
        "bull_h": 2.65,
        "bear_y": 17.0,
        "bear_h": 6.8
      },
      {
        "x": 23.35,
        "w": 0.38,
        "bull_y": 13.85,
        "bull_h": 3.15,
        "bear_y": 17.0,
        "bear_h": 6.3
      },
      {
        "x": 23.88,
        "w": 0.38,
        "bull_y": 12.69,
        "bull_h": 4.31,
        "bear_y": 17.0,
        "bear_h": 6.63
      },
      {
        "x": 24.41,
        "w": 0.38,
        "bull_y": 13.85,
        "bull_h": 3.15,
        "bear_y": 17.0,
        "bear_h": 4.31
      },
      {
        "x": 24.94,
        "w": 0.38,
        "bull_y": 15.34,
        "bull_h": 1.66,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 25.47,
        "w": 0.38,
        "bull_y": 13.68,
        "bull_h": 3.32,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 26.0,
        "w": 0.38,
        "bull_y": 14.18,
        "bull_h": 2.82,
        "bear_y": 17.0,
        "bear_h": 1.74
      },
      {
        "x": 26.53,
        "w": 0.38,
        "bull_y": 12.69,
        "bull_h": 4.31,
        "bear_y": 17.0,
        "bear_h": 2.24
      },
      {
        "x": 27.06,
        "w": 0.38,
        "bull_y": 12.69,
        "bull_h": 4.31,
        "bear_y": 17.0,
        "bear_h": 2.4
      },
      {
        "x": 27.59,
        "w": 0.38,
        "bull_y": 13.52,
        "bull_h": 3.48,
        "bear_y": 17.0,
        "bear_h": 2.4
      },
      {
        "x": 28.12,
        "w": 0.38,
        "bull_y": 13.52,
        "bull_h": 3.48,
        "bear_y": 17.0,
        "bear_h": 2.9
      },
      {
        "x": 28.65,
        "w": 0.38,
        "bull_y": 14.01,
        "bull_h": 2.99,
        "bear_y": 17.0,
        "bear_h": 2.4
      },
      {
        "x": 29.17,
        "w": 0.38,
        "bull_y": 13.27,
        "bull_h": 3.73,
        "bear_y": 17.0,
        "bear_h": 1.49
      },
      {
        "x": 29.7,
        "w": 0.38,
        "bull_y": 14.1,
        "bull_h": 2.9,
        "bear_y": 17.0,
        "bear_h": 5.14
      },
      {
        "x": 30.23,
        "w": 0.38,
        "bull_y": 14.6,
        "bull_h": 2.4,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 30.76,
        "w": 0.38,
        "bull_y": 13.43,
        "bull_h": 3.57,
        "bear_y": 17.0,
        "bear_h": 1.49
      },
      {
        "x": 31.29,
        "w": 0.38,
        "bull_y": 12.02,
        "bull_h": 4.98,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 31.82,
        "w": 0.38,
        "bull_y": 14.18,
        "bull_h": 2.82,
        "bear_y": 17.0,
        "bear_h": 2.65
      },
      {
        "x": 32.35,
        "w": 0.38,
        "bull_y": 14.51,
        "bull_h": 2.49,
        "bear_y": 17.0,
        "bear_h": 1.66
      },
      {
        "x": 32.88,
        "w": 0.38,
        "bull_y": 14.18,
        "bull_h": 2.82,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 33.41,
        "w": 0.38,
        "bull_y": 15.09,
        "bull_h": 1.91,
        "bear_y": 17.0,
        "bear_h": 3.15
      },
      {
        "x": 33.94,
        "w": 0.38,
        "bull_y": 13.77,
        "bull_h": 3.23,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 34.47,
        "w": 0.38,
        "bull_y": 14.76,
        "bull_h": 2.24,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 34.99,
        "w": 0.38,
        "bull_y": 13.93,
        "bull_h": 3.07,
        "bear_y": 17.0,
        "bear_h": 2.32
      },
      {
        "x": 35.52,
        "w": 0.38,
        "bull_y": 15.26,
        "bull_h": 1.74,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 36.05,
        "w": 0.38,
        "bull_y": 9.79,
        "bull_h": 7.21,
        "bear_y": 17.0,
        "bear_h": 2.65
      },
      {
        "x": 36.58,
        "w": 0.38,
        "bull_y": 11.44,
        "bull_h": 5.56,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 37.11,
        "w": 0.38,
        "bull_y": 13.6,
        "bull_h": 3.4,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 37.64,
        "w": 0.38,
        "bull_y": 14.1,
        "bull_h": 2.9,
        "bear_y": 17.0,
        "bear_h": 2.99
      },
      {
        "x": 38.17,
        "w": 0.38,
        "bull_y": 13.43,
        "bull_h": 3.57,
        "bear_y": 17.0,
        "bear_h": 2.32
      },
      {
        "x": 38.7,
        "w": 0.38,
        "bull_y": 13.27,
        "bull_h": 3.73,
        "bear_y": 17.0,
        "bear_h": 3.15
      },
      {
        "x": 39.23,
        "w": 0.38,
        "bull_y": 13.93,
        "bull_h": 3.07,
        "bear_y": 17.0,
        "bear_h": 2.82
      },
      {
        "x": 39.76,
        "w": 0.38,
        "bull_y": 14.43,
        "bull_h": 2.57,
        "bear_y": 17.0,
        "bear_h": 1.33
      },
      {
        "x": 40.29,
        "w": 0.38,
        "bull_y": 6.47,
        "bull_h": 10.53,
        "bear_y": 17.0,
        "bear_h": 4.31
      },
      {
        "x": 40.81,
        "w": 0.38,
        "bull_y": 0.17,
        "bull_h": 16.83,
        "bear_y": 17.0,
        "bear_h": 6.14
      },
      {
        "x": 41.34,
        "w": 0.38,
        "bull_y": 2.49,
        "bull_h": 14.51,
        "bear_y": 17.0,
        "bear_h": 6.3
      },
      {
        "x": 41.87,
        "w": 0.38,
        "bull_y": 1.66,
        "bull_h": 15.34,
        "bear_y": 17.0,
        "bear_h": 5.64
      },
      {
        "x": 42.4,
        "w": 0.38,
        "bull_y": 0.08,
        "bull_h": 16.92,
        "bear_y": 17.0,
        "bear_h": 6.14
      },
      {
        "x": 42.93,
        "w": 0.38,
        "bull_y": 2.9,
        "bull_h": 14.1,
        "bear_y": 17.0,
        "bear_h": 5.47
      },
      {
        "x": 43.46,
        "w": 0.38,
        "bull_y": 4.06,
        "bull_h": 12.94,
        "bear_y": 17.0,
        "bear_h": 5.64
      },
      {
        "x": 43.99,
        "w": 0.38,
        "bull_y": 6.05,
        "bull_h": 10.95,
        "bear_y": 17.0,
        "bear_h": 6.14
      },
      {
        "x": 44.52,
        "w": 0.38,
        "bull_y": 10.53,
        "bull_h": 6.47,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 45.05,
        "w": 0.38,
        "bull_y": 12.36,
        "bull_h": 4.64,
        "bear_y": 17.0,
        "bear_h": 2.32
      },
      {
        "x": 45.58,
        "w": 0.38,
        "bull_y": 12.69,
        "bull_h": 4.31,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 46.11,
        "w": 0.38,
        "bull_y": 13.19,
        "bull_h": 3.81,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 46.63,
        "w": 0.38,
        "bull_y": 14.68,
        "bull_h": 2.32,
        "bear_y": 17.0,
        "bear_h": 3.15
      },
      {
        "x": 47.16,
        "w": 0.38,
        "bull_y": 14.35,
        "bull_h": 2.65,
        "bear_y": 17.0,
        "bear_h": 1.49
      },
      {
        "x": 47.69,
        "w": 0.38,
        "bull_y": 14.35,
        "bull_h": 2.65,
        "bear_y": 17.0,
        "bear_h": 1.49
      },
      {
        "x": 48.22,
        "w": 0.38,
        "bull_y": 14.1,
        "bull_h": 2.9,
        "bear_y": 17.0,
        "bear_h": 1.66
      },
      {
        "x": 48.75,
        "w": 0.38,
        "bull_y": 14.26,
        "bull_h": 2.74,
        "bear_y": 17.0,
        "bear_h": 1.33
      },
      {
        "x": 49.28,
        "w": 0.38,
        "bull_y": 14.6,
        "bull_h": 2.4,
        "bear_y": 17.0,
        "bear_h": 1.99
      },
      {
        "x": 49.81,
        "w": 0.38,
        "bull_y": 14.43,
        "bull_h": 2.57,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 50.34,
        "w": 0.38,
        "bull_y": 14.6,
        "bull_h": 2.4,
        "bear_y": 17.0,
        "bear_h": 2.32
      },
      {
        "x": 50.87,
        "w": 0.38,
        "bull_y": 15.42,
        "bull_h": 1.58,
        "bear_y": 17.0,
        "bear_h": 2.32
      },
      {
        "x": 51.4,
        "w": 0.38,
        "bull_y": 14.6,
        "bull_h": 2.4,
        "bear_y": 17.0,
        "bear_h": 3.65
      },
      {
        "x": 51.93,
        "w": 0.38,
        "bull_y": 14.93,
        "bull_h": 2.07,
        "bear_y": 17.0,
        "bear_h": 2.65
      },
      {
        "x": 52.46,
        "w": 0.38,
        "bull_y": 15.18,
        "bull_h": 1.82,
        "bear_y": 17.0,
        "bear_h": 4.23
      },
      {
        "x": 52.98,
        "w": 0.38,
        "bull_y": 14.68,
        "bull_h": 2.32,
        "bear_y": 17.0,
        "bear_h": 6.39
      },
      {
        "x": 53.51,
        "w": 0.38,
        "bull_y": 15.18,
        "bull_h": 1.82,
        "bear_y": 17.0,
        "bear_h": 4.23
      },
      {
        "x": 54.04,
        "w": 0.38,
        "bull_y": 15.18,
        "bull_h": 1.82,
        "bear_y": 17.0,
        "bear_h": 5.31
      },
      {
        "x": 54.57,
        "w": 0.38,
        "bull_y": 16.0,
        "bull_h": 1.0,
        "bear_y": 17.0,
        "bear_h": 4.64
      },
      {
        "x": 55.1,
        "w": 0.38,
        "bull_y": 12.85,
        "bull_h": 4.15,
        "bear_y": 17.0,
        "bear_h": 1.24
      },
      {
        "x": 55.63,
        "w": 0.38,
        "bull_y": 15.34,
        "bull_h": 1.66,
        "bear_y": 17.0,
        "bear_h": 1.58
      },
      {
        "x": 56.16,
        "w": 0.38,
        "bull_y": 14.51,
        "bull_h": 2.49,
        "bear_y": 17.0,
        "bear_h": 1.58
      },
      {
        "x": 56.69,
        "w": 0.38,
        "bull_y": 15.67,
        "bull_h": 1.33,
        "bear_y": 17.0,
        "bear_h": 1.41
      },
      {
        "x": 57.22,
        "w": 0.38,
        "bull_y": 14.18,
        "bull_h": 2.82,
        "bear_y": 17.0,
        "bear_h": 1.24
      },
      {
        "x": 57.75,
        "w": 0.38,
        "bull_y": 16.17,
        "bull_h": 0.83,
        "bear_y": 17.0,
        "bear_h": 2.74
      },
      {
        "x": 58.28,
        "w": 0.38,
        "bull_y": 14.01,
        "bull_h": 2.99,
        "bear_y": 17.0,
        "bear_h": 1.24
      },
      {
        "x": 58.8,
        "w": 0.38,
        "bull_y": 14.01,
        "bull_h": 2.99,
        "bear_y": 17.0,
        "bear_h": 1.33
      },
      {
        "x": 59.33,
        "w": 0.38,
        "bull_y": 15.84,
        "bull_h": 1.16,
        "bear_y": 17.0,
        "bear_h": 2.99
      },
      {
        "x": 59.86,
        "w": 0.38,
        "bull_y": 15.67,
        "bull_h": 1.33,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 60.39,
        "w": 0.38,
        "bull_y": 14.01,
        "bull_h": 2.99,
        "bear_y": 17.0,
        "bear_h": 1.0
      },
      {
        "x": 60.92,
        "w": 0.38,
        "bull_y": 12.36,
        "bull_h": 4.64,
        "bear_y": 17.0,
        "bear_h": 1.33
      },
      {
        "x": 61.45,
        "w": 0.38,
        "bull_y": 15.18,
        "bull_h": 1.82,
        "bear_y": 17.0,
        "bear_h": 0.66
      },
      {
        "x": 61.98,
        "w": 0.38,
        "bull_y": 14.84,
        "bull_h": 2.16,
        "bear_y": 17.0,
        "bear_h": 0.66
      },
      {
        "x": 62.51,
        "w": 0.38,
        "bull_y": 16.0,
        "bull_h": 1.0,
        "bear_y": 17.0,
        "bear_h": 3.98
      },
      {
        "x": 63.04,
        "w": 0.38,
        "bull_y": 14.68,
        "bull_h": 2.32,
        "bear_y": 17.0,
        "bear_h": 6.14
      },
      {
        "x": 63.57,
        "w": 0.38,
        "bull_y": 15.34,
        "bull_h": 1.66,
        "bear_y": 17.0,
        "bear_h": 3.32
      },
      {
        "x": 64.1,
        "w": 0.38,
        "bull_y": 15.67,
        "bull_h": 1.33,
        "bear_y": 17.0,
        "bear_h": 3.15
      },
      {
        "x": 64.62,
        "w": 0.38,
        "bull_y": 15.18,
        "bull_h": 1.82,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 65.15,
        "w": 0.38,
        "bull_y": 15.18,
        "bull_h": 1.82,
        "bear_y": 17.0,
        "bear_h": 2.32
      },
      {
        "x": 65.68,
        "w": 0.38,
        "bull_y": 14.51,
        "bull_h": 2.49,
        "bear_y": 17.0,
        "bear_h": 1.16
      },
      {
        "x": 66.21,
        "w": 0.38,
        "bull_y": 3.32,
        "bull_h": 13.68,
        "bear_y": 17.0,
        "bear_h": 5.47
      },
      {
        "x": 66.74,
        "w": 0.38,
        "bull_y": 0.0,
        "bull_h": 17.0,
        "bear_y": 17.0,
        "bear_h": 5.47
      },
      {
        "x": 67.27,
        "w": 0.38,
        "bull_y": 8.87,
        "bull_h": 8.13,
        "bear_y": 17.0,
        "bear_h": 4.48
      },
      {
        "x": 67.8,
        "w": 0.38,
        "bull_y": 13.85,
        "bull_h": 3.15,
        "bear_y": 17.0,
        "bear_h": 1.0
      },
      {
        "x": 68.33,
        "w": 0.38,
        "bull_y": 14.93,
        "bull_h": 2.07,
        "bear_y": 17.0,
        "bear_h": 1.33
      },
      {
        "x": 68.86,
        "w": 0.38,
        "bull_y": 15.26,
        "bull_h": 1.74,
        "bear_y": 17.0,
        "bear_h": 1.66
      },
      {
        "x": 69.39,
        "w": 0.38,
        "bull_y": 15.59,
        "bull_h": 1.41,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 69.92,
        "w": 0.38,
        "bull_y": 12.44,
        "bull_h": 4.56,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 70.44,
        "w": 0.38,
        "bull_y": 11.11,
        "bull_h": 5.89,
        "bear_y": 17.0,
        "bear_h": 2.65
      },
      {
        "x": 70.97,
        "w": 0.38,
        "bull_y": 11.11,
        "bull_h": 5.89,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 71.5,
        "w": 0.38,
        "bull_y": 14.1,
        "bull_h": 2.9,
        "bear_y": 17.0,
        "bear_h": 1.49
      },
      {
        "x": 72.03,
        "w": 0.38,
        "bull_y": 15.26,
        "bull_h": 1.74,
        "bear_y": 17.0,
        "bear_h": 1.16
      },
      {
        "x": 72.56,
        "w": 0.38,
        "bull_y": 14.18,
        "bull_h": 2.82,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 73.09,
        "w": 0.38,
        "bull_y": 11.53,
        "bull_h": 5.47,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 73.62,
        "w": 0.38,
        "bull_y": 4.89,
        "bull_h": 12.11,
        "bear_y": 17.0,
        "bear_h": 4.64
      },
      {
        "x": 74.15,
        "w": 0.38,
        "bull_y": 3.73,
        "bull_h": 13.27,
        "bear_y": 17.0,
        "bear_h": 4.81
      },
      {
        "x": 74.68,
        "w": 0.38,
        "bull_y": 3.57,
        "bull_h": 13.43,
        "bear_y": 17.0,
        "bear_h": 4.98
      },
      {
        "x": 75.21,
        "w": 0.38,
        "bull_y": 10.37,
        "bull_h": 6.63,
        "bear_y": 17.0,
        "bear_h": 3.48
      },
      {
        "x": 75.74,
        "w": 0.38,
        "bull_y": 10.7,
        "bull_h": 6.3,
        "bear_y": 17.0,
        "bear_h": 2.82
      },
      {
        "x": 76.26,
        "w": 0.38,
        "bull_y": 12.52,
        "bull_h": 4.48,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 76.79,
        "w": 0.38,
        "bull_y": 13.52,
        "bull_h": 3.48,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 77.32,
        "w": 0.38,
        "bull_y": 13.35,
        "bull_h": 3.65,
        "bear_y": 17.0,
        "bear_h": 2.32
      },
      {
        "x": 77.85,
        "w": 0.38,
        "bull_y": 15.18,
        "bull_h": 1.82,
        "bear_y": 17.0,
        "bear_h": 1.99
      },
      {
        "x": 78.38,
        "w": 0.38,
        "bull_y": 14.93,
        "bull_h": 2.07,
        "bear_y": 17.0,
        "bear_h": 4.4
      },
      {
        "x": 78.91,
        "w": 0.38,
        "bull_y": 15.09,
        "bull_h": 1.91,
        "bear_y": 17.0,
        "bear_h": 4.73
      },
      {
        "x": 79.44,
        "w": 0.38,
        "bull_y": 15.09,
        "bull_h": 1.91,
        "bear_y": 17.0,
        "bear_h": 2.74
      },
      {
        "x": 79.97,
        "w": 0.38,
        "bull_y": 15.09,
        "bull_h": 1.91,
        "bear_y": 17.0,
        "bear_h": 2.07
      },
      {
        "x": 80.5,
        "w": 0.38,
        "bull_y": 14.93,
        "bull_h": 2.07,
        "bear_y": 17.0,
        "bear_h": 1.91
      },
      {
        "x": 81.03,
        "w": 0.38,
        "bull_y": 14.18,
        "bull_h": 2.82,
        "bear_y": 17.0,
        "bear_h": 4.73
      },
      {
        "x": 81.56,
        "w": 0.38,
        "bull_y": 15.18,
        "bull_h": 1.82,
        "bear_y": 17.0,
        "bear_h": 2.57
      },
      {
        "x": 82.08,
        "w": 0.38,
        "bull_y": 15.51,
        "bull_h": 1.49,
        "bear_y": 17.0,
        "bear_h": 2.07
      },
      {
        "x": 82.61,
        "w": 0.38,
        "bull_y": 16.34,
        "bull_h": 0.66,
        "bear_y": 17.0,
        "bear_h": 1.91
      },
      {
        "x": 83.14,
        "w": 0.38,
        "bull_y": 14.51,
        "bull_h": 2.49,
        "bear_y": 17.0,
        "bear_h": 1.58
      },
      {
        "x": 83.67,
        "w": 0.38,
        "bull_y": 15.34,
        "bull_h": 1.66,
        "bear_y": 17.0,
        "bear_h": 2.24
      },
      {
        "x": 84.2,
        "w": 0.38,
        "bull_y": 14.84,
        "bull_h": 2.16,
        "bear_y": 17.0,
        "bear_h": 1.66
      },
      {
        "x": 84.73,
        "w": 0.38,
        "bull_y": 16.34,
        "bull_h": 0.66,
        "bear_y": 17.0,
        "bear_h": 2.49
      },
      {
        "x": 85.26,
        "w": 0.38,
        "bull_y": 16.67,
        "bull_h": 0.33,
        "bear_y": 17.0,
        "bear_h": 1.49
      },
      {
        "x": 85.79,
        "w": 0.38,
        "bull_y": 16.34,
        "bull_h": 0.66,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 86.32,
        "w": 0.38,
        "bull_y": 16.5,
        "bull_h": 0.5,
        "bear_y": 17.0,
        "bear_h": 2.16
      },
      {
        "x": 86.85,
        "w": 0.38,
        "bull_y": 16.67,
        "bull_h": 0.33,
        "bear_y": 17.0,
        "bear_h": 1.66
      },
      {
        "x": 87.38,
        "w": 0.38,
        "bull_y": 16.34,
        "bull_h": 0.66,
        "bear_y": 17.0,
        "bear_h": 1.66
      },
      {
        "x": 87.9,
        "w": 0.38,
        "bull_y": 15.84,
        "bull_h": 1.16,
        "bear_y": 17.0,
        "bear_h": 2.99
      },
      {
        "x": 88.43,
        "w": 0.38,
        "bull_y": 13.35,
        "bull_h": 3.65,
        "bear_y": 17.0,
        "bear_h": 7.55
      },
      {
        "x": 88.96,
        "w": 0.38,
        "bull_y": 15.34,
        "bull_h": 1.66,
        "bear_y": 17.0,
        "bear_h": 3.23
      },
      {
        "x": 89.49,
        "w": 0.38,
        "bull_y": 14.51,
        "bull_h": 2.49,
        "bear_y": 17.0,
        "bear_h": 4.89
      },
      {
        "x": 90.02,
        "w": 0.38,
        "bull_y": 15.51,
        "bull_h": 1.49,
        "bear_y": 17.0,
        "bear_h": 1.91
      },
      {
        "x": 90.55,
        "w": 0.38,
        "bull_y": 13.85,
        "bull_h": 3.15,
        "bear_y": 17.0,
        "bear_h": 0.91
      },
      {
        "x": 91.08,
        "w": 0.38,
        "bull_y": 16.17,
        "bull_h": 0.83,
        "bear_y": 17.0,
        "bear_h": 2.24
      },
      {
        "x": 91.61,
        "w": 0.38,
        "bull_y": 13.68,
        "bull_h": 3.32,
        "bear_y": 17.0,
        "bear_h": 0.91
      },
      {
        "x": 92.14,
        "w": 0.38,
        "bull_y": 15.84,
        "bull_h": 1.16,
        "bear_y": 17.0,
        "bear_h": 2.65
      },
      {
        "x": 92.67,
        "w": 0.38,
        "bull_y": 13.35,
        "bull_h": 3.65,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 93.2,
        "w": 0.38,
        "bull_y": 16.34,
        "bull_h": 0.66,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 93.72,
        "w": 0.38,
        "bull_y": 15.51,
        "bull_h": 1.49,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 94.25,
        "w": 0.38,
        "bull_y": 16.34,
        "bull_h": 0.66,
        "bear_y": 17.0,
        "bear_h": 1.99
      },
      {
        "x": 94.78,
        "w": 0.38,
        "bull_y": 16.17,
        "bull_h": 0.83,
        "bear_y": 17.0,
        "bear_h": 2.99
      },
      {
        "x": 95.31,
        "w": 0.38,
        "bull_y": 14.35,
        "bull_h": 2.65,
        "bear_y": 17.0,
        "bear_h": 1.16
      },
      {
        "x": 95.84,
        "w": 0.38,
        "bull_y": 7.05,
        "bull_h": 9.95,
        "bear_y": 17.0,
        "bear_h": 4.64
      },
      {
        "x": 96.37,
        "w": 0.38,
        "bull_y": 15.01,
        "bull_h": 1.99,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 96.9,
        "w": 0.38,
        "bull_y": 14.68,
        "bull_h": 2.32,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 97.43,
        "w": 0.38,
        "bull_y": 14.84,
        "bull_h": 2.16,
        "bear_y": 17.0,
        "bear_h": 1.66
      },
      {
        "x": 97.96,
        "w": 0.38,
        "bull_y": 13.6,
        "bull_h": 3.4,
        "bear_y": 17.0,
        "bear_h": 1.49
      },
      {
        "x": 98.49,
        "w": 0.38,
        "bull_y": 13.02,
        "bull_h": 3.98,
        "bear_y": 17.0,
        "bear_h": 1.82
      },
      {
        "x": 99.02,
        "w": 0.38,
        "bull_y": 11.69,
        "bull_h": 5.31,
        "bear_y": 17.0,
        "bear_h": 1.99
      },
      {
        "x": 99.54,
        "w": 0.38,
        "bull_y": 13.68,
        "bull_h": 3.32,
        "bear_y": 17.0,
        "bear_h": 1.49
      }
    ],
    "mid_y": 17.0,
    "peak": 102.5
  },
  "strength": {
    "ok": true,
    "rows": [
      {
        "label": "ABOVE UPPER BB(30,1.5)",
        "category": "BB_BREAKOUT",
        "strength": "EXTREME BULLISH",
        "points": 3.0,
        "direction": "bull",
        "y": 0.0,
        "h": 8.0,
        "x": 50.0,
        "w": 50.0
      },
      {
        "label": "GAIN >3% (20b)",
        "category": "PRICE_ACTION",
        "strength": "STRONG BULLISH",
        "points": 2.0,
        "direction": "bull",
        "y": 11.0,
        "h": 8.0,
        "x": 50.0,
        "w": 33.33
      },
      {
        "label": "CCI OVERBOUGHT (>100)",
        "category": "CCI",
        "strength": "BEARISH",
        "points": -1.0,
        "direction": "bear",
        "y": 22.0,
        "h": 8.0,
        "x": 33.33,
        "w": 16.67
      },
      {
        "label": "BULLISH KUMO",
        "category": "ICHIMOKU",
        "strength": "BULLISH",
        "points": 1.0,
        "direction": "bull",
        "y": 33.0,
        "h": 8.0,
        "x": 50.0,
        "w": 16.67
      },
      {
        "label": ">5% ABOVE 150SMA",
        "category": "MA_DISTANCE",
        "strength": "BEARISH",
        "points": -1.0,
        "direction": "bear",
        "y": 44.0,
        "h": 8.0,
        "x": 33.33,
        "w": 16.67
      },
      {
        "label": "MOMENTUM ALIGNED BULLISH",
        "category": "MOMENTUM",
        "strength": "BULLISH",
        "points": 1.0,
        "direction": "bull",
        "y": 55.0,
        "h": 8.0,
        "x": 50.0,
        "w": 16.67
      },
      {
        "label": "CMF STRONG BUYING PRESSURE",
        "category": "OBV_CMF",
        "strength": "BULLISH",
        "points": 1.0,
        "direction": "bull",
        "y": 66.0,
        "h": 8.0,
        "x": 50.0,
        "w": 16.67
      },
      {
        "label": "PSAR UPTREND",
        "category": "PSAR",
        "strength": "BULLISH",
        "points": 1.0,
        "direction": "bull",
        "y": 77.0,
        "h": 8.0,
        "x": 50.0,
        "w": 16.67
      },
      {
        "label": "WITHIN 5% OF 100b HIGH",
        "category": "RANGE",
        "strength": "BULLISH",
        "points": 1.0,
        "direction": "bull",
        "y": 88.0,
        "h": 8.0,
        "x": 50.0,
        "w": 16.67
      },
      {
        "label": "RSI5 OVERBOUGHT (>65)",
        "category": "RSI",
        "strength": "BEARISH",
        "points": -1.0,
        "direction": "bear",
        "y": 99.0,
        "h": 8.0,
        "x": 33.33,
        "w": 16.67
      },
      {
        "label": "NEAR RESISTANCE (w=5, prox=1%)",
        "category": "SUPPORT_RESISTANCE",
        "strength": "BEARISH",
        "points": -1.0,
        "direction": "bear",
        "y": 110.0,
        "h": 8.0,
        "x": 33.33,
        "w": 16.67
      },
      {
        "label": "VOLUME BEARISH DIVERGENCE (10b)",
        "category": "VOLUME",
        "strength": "BEARISH",
        "points": -1.0,
        "direction": "bear",
        "y": 121.0,
        "h": 8.0,
        "x": 33.33,
        "w": 16.67
      }
    ],
    "mid_x": 50.0,
    "height": 129.0,
    "peak": 3.0,
    "shown": 12,
    "total_directional": 26,
    "categories_represented": 15
  }
};

const CHART_WIDTH = 100.0;
const CHART_HEIGHT = 34.0;

const SPARKLINE_POINTS = "0.00,18.05 0.53,18.05 1.06,17.32 1.60,17.93 2.13,15.72 2.66,16.95 3.19,23.09 3.72,21.49 4.26,18.30 4.79,17.81 5.32,16.09 5.85,14.86 6.38,16.82 6.91,15.84 7.45,17.07 7.98,18.54 8.51,18.05 9.04,17.07 9.57,7.37 10.11,9.09 10.64,16.70 11.17,15.11 11.70,19.04 12.23,14.37 12.77,13.88 13.30,12.65 13.83,12.89 14.36,21.49 14.89,16.21 15.43,17.68 15.96,18.91 16.49,17.68 17.02,17.19 17.55,16.95 18.09,28.00 18.62,20.14 19.15,20.88 19.68,19.40 20.21,20.51 20.74,19.77 21.28,19.04 21.81,22.96 22.34,22.23 22.87,23.21 23.40,21.74 23.94,20.51 24.47,18.79 25.00,18.30 25.53,14.86 26.06,15.47 26.60,14.00 27.13,14.25 27.66,15.47 28.19,16.21 28.72,16.21 29.26,13.75 29.79,20.39 30.32,16.21 30.85,14.00 31.38,12.89 31.91,16.82 32.45,15.84 32.98,16.09 33.51,18.91 34.04,15.47 34.57,16.46 35.11,15.96 35.64,17.68 36.17,10.32 36.70,12.53 37.23,15.23 37.77,17.19 38.30,15.23 38.83,16.21 39.36,16.70 39.89,15.23 40.43,7.86 40.96,1.23 41.49,4.91 42.02,2.70 42.55,1.11 43.09,4.30 43.62,6.26 44.15,9.95 44.68,11.18 45.21,13.63 45.74,14.37 46.28,14.12 46.81,18.30 47.34,15.35 47.87,15.35 48.40,15.23 48.94,14.98 49.47,16.46 50.00,15.96 50.53,16.95 51.06,18.18 51.60,18.91 52.13,17.93 52.66,20.63 53.19,23.09 53.72,20.63 54.26,22.23 54.79,22.47 55.32,12.77 55.85,16.95 56.38,15.72 56.91,17.19 57.45,14.74 57.98,19.89 58.51,14.49 59.04,14.61 59.57,19.77 60.11,17.81 60.64,14.12 61.17,12.16 61.70,15.35 62.23,14.86 62.77,21.49 63.30,22.72 63.83,19.53 64.36,19.77 64.89,18.05 65.43,17.81 65.96,15.11 66.49,4.91 67.02,0.00 67.55,11.67 68.09,13.88 68.62,15.96 69.15,16.95 69.68,18.67 70.21,13.51 70.74,12.28 71.28,12.04 71.81,14.98 72.34,16.21 72.87,16.09 73.40,12.16 73.94,6.02 74.47,4.54 75.00,4.54 75.53,12.40 76.06,11.91 76.60,14.12 77.13,15.11 77.66,15.11 78.19,17.32 78.72,20.51 79.26,21.25 79.79,18.30 80.32,17.32 80.85,16.82 81.38,19.89 81.91,18.18 82.45,17.93 82.98,18.91 83.51,15.72 84.04,17.93 84.57,16.33 85.11,19.77 85.64,18.79 86.17,19.28 86.70,19.53 87.23,19.04 87.77,18.54 88.30,19.77 88.83,22.84 89.36,19.40 89.89,20.63 90.43,17.68 90.96,13.75 91.49,19.16 92.02,13.51 92.55,19.28 93.09,14.37 93.62,18.79 94.15,17.56 94.68,19.04 95.21,20.26 95.74,14.86 96.28,9.21 96.81,16.82 97.34,16.33 97.87,16.33 98.40,14.25 98.94,13.88 99.47,12.16 100.00,14.37";

const fmt = (n: number | null | undefined, digits = 2) =>
  n === null || n === undefined ? "—" : n.toFixed(digits);

const biasClass = (bias: string) =>
  bias === "BULLISH" ? "bull" : bias === "BEARISH" ? "bear" : "neut";



export const meta: MetaFunction = () => [
  { title: TITLE },
  { name: "description", content: bodyParagraphs[0]?.slice(0, 160) ?? "" },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: bodyParagraphs[0]?.slice(0, 160) ?? "" },
  { property: "og:type", content: "article" },
  { property: "og:image", content: HERO_IMAGE },
  { property: "twitter:card", content: "summary_large_image" },
  { property: "twitter:image", content: HERO_IMAGE },
];

export default function IpiSignalReportPage() {
  const { metadata: metaData, confluence_rank: conf, signal_summary: summary } = scan;
  const categories = Object.keys(signalsByCategory).sort();

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Terminal ASCII Header */}
      <header className="border-b border-gray-800 bg-black py-6">
        <div className="container mx-auto px-4">
          <pre className="overflow-x-auto font-mono text-xs leading-tight text-green-400">
            {ASCII_ART}
          </pre>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl space-y-8 px-4 py-8">
        {/* Cover Hero Image */}
        <section className="mb-4">
          <img
            className="mx-auto h-auto max-h-[420px] w-full max-w-2xl rounded-2xl border border-gray-800 object-cover shadow-2xl"
            src={HERO_IMAGE}
            alt="IPI Technical Signal Scan Terminal"
          />
        </section>

        {/* Title & Badge Block */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-green-700 px-3 py-1 text-sm font-bold text-white">
              Finance - Signal Scan
            </span>
            <span className="rounded-full bg-gray-900 border border-gray-800 px-3 py-1 text-xs font-mono text-gray-400">
              {metaData.symbol} · {metaData.interval} · {metaData.bars_scanned} bars
            </span>
          </div>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">
            {TITLE}
          </h1>
          <p className="text-sm text-gray-500">
            {DATE} · Generated {metaData.generated_at} · TastyTechBytes Signal Intelligence
          </p>
        </div>

        {/* Executive Summary Cards */}
        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Scan Executive Summary
          </h2>
          {bodyParagraphs.map((para, i) => (
            <p key={i} className="text-sm leading-relaxed text-gray-300">
              {para}
            </p>
          ))}
        </section>

        {/* Confluence Metrics Grid */}
        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Latest Bar Confluence Rank
          </h2>

          {summary.degraded && (
            <div className="rounded-lg border border-red-800 bg-red-950/50 p-3 text-xs text-red-300">
              Degraded run — detector failures:{" "}
              {Object.entries(summary.detector_failures)
                .map(([k, v]) => `${k}=${v}`)
                .join(", ")}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Net Score
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-green-400">
                {conf.net_score !== null && conf.net_score >= 0 ? "+" : ""}
                {fmt(conf.net_score)}
              </div>
            </div>

            <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Bias
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-green-400">
                {conf.bias}
              </div>
            </div>

            <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Confidence
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-cyan-400">
                {conf.confidence}
              </div>
            </div>

            <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Bull / Bear
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-gray-200">
                <span className="text-green-400">{conf.bullish_signal_count}</span>
                <span className="text-gray-600"> / </span>
                <span className="text-red-400">{conf.bearish_signal_count}</span>
              </div>
            </div>

            <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Agreement
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-purple-400">
                {conf.agreement_ratio === null
                  ? "—"
                  : `${Math.round(conf.agreement_ratio * 100)}%`}
              </div>
            </div>
          </div>

          {/* Sparkline */}
          {SPARKLINE_POINTS && (
            <div className="pt-2">
              <div className="mb-1 flex justify-between text-xs text-gray-500 font-mono">
                <span>Net Confluence Trend (189 Bars)</span>
                <span>Latest: +{fmt(conf.net_score)}</span>
              </div>
              <div className="rounded-lg border border-gray-800 bg-black/70 p-3">
                <svg
                  className="h-12 w-full"
                  viewBox="0 0 100 28"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Net confluence score sparkline"
                >
                  <polyline
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="1.5"
                    points={SPARKLINE_POINTS}
                  />
                </svg>
              </div>
            </div>
          )}
        </section>

        {/* Key Takeaways Grid */}
        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Indicator Analysis & Key Drivers
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {keyTakeaways.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-800 bg-black/60 p-4 space-y-1.5"
              >
                <div className="text-sm font-semibold text-green-400">
                  {item.label}
                </div>
                <div className="text-xs leading-relaxed text-gray-400">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Charts Section */}
        <section className="space-y-6 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Technical Confluence Charts
          </h2>

          {/* Conviction / Strength Chart */}
          {charts.strength.ok && (
            <figure className="space-y-3 rounded-lg border border-gray-800 bg-black/60 p-4">
              <figcaption className="text-xs text-gray-400 leading-relaxed">
                <span className="font-semibold text-gray-200">
                  Strongest Signals on Latest Bar:
                </span>{" "}
                Top {charts.strength.shown} highest-conviction categories ranked by
                confluence weight. Bars extend left for Bearish (red) and right for
                Bullish (green).
              </figcaption>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-[16rem_1fr] items-stretch">
                <div className="space-y-1.5 font-mono text-xs">
                  {charts.strength.rows.map((r) => (
                    <div
                      key={`${r.category}-${r.label}`}
                      className="flex items-center justify-between border-b border-gray-900 pb-1"
                    >
                      <div className="truncate pr-2">
                        <span className="text-[10px] font-bold text-gray-500 block uppercase">
                          {r.category}
                        </span>
                        <span className="text-xs text-gray-300 truncate">
                          {r.label}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-bold shrink-0 ${
                          r.direction === "bull"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {r.points !== null && r.points > 0 ? "+" : ""}
                        {r.points}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-full min-h-[160px]">
                  <svg
                    className="h-full w-full"
                    viewBox={`0 0 ${CHART_WIDTH} ${charts.strength.height}`}
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Signal conviction chart"
                  >
                    <line
                      x1={charts.strength.mid_x}
                      y1={0}
                      x2={charts.strength.mid_x}
                      y2={charts.strength.height}
                      stroke="#374151"
                      strokeWidth="0.8"
                    />
                    {charts.strength.rows.map((r) => (
                      <g key={`${r.category}-${r.label}`}>
                        <rect
                          x={r.x}
                          y={r.y}
                          width={r.w}
                          height={r.h}
                          rx={1}
                          fill={r.direction === "bull" ? "#22c55e" : "#ef4444"}
                        />
                        <title>
                          {`${r.label} — ${r.strength} (${r.points})`}
                        </title>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </figure>
          )}

          {/* Net Confluence History Area Chart */}
          {charts.net_score.ok && (
            <figure className="space-y-3 rounded-lg border border-gray-800 bg-black/60 p-4">
              <figcaption className="text-xs text-gray-400 leading-relaxed">
                <span className="font-semibold text-gray-200">
                  Net Confluence Score Across All {charts.net_score.bars} Scored Bars:
                </span>{" "}
                Filled from the zero line. Green area above zero denotes bullish
                expansion; area below represents bearish pressure. Range:{" "}
                {charts.net_score.min} to +{charts.net_score.max}.
              </figcaption>
              <div className="h-40 w-full">
                <svg
                  className="h-full w-full"
                  viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Net confluence score history"
                >
                  <polygon
                    fill="#3b82f6"
                    fillOpacity="0.22"
                    points={charts.net_score.area}
                  />
                  <line
                    x1={0}
                    y1={charts.net_score.zero_y}
                    x2={CHART_WIDTH}
                    y2={charts.net_score.zero_y}
                    stroke="#4b5563"
                    strokeWidth="0.8"
                  />
                  <polyline
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="1.2"
                    points={charts.net_score.line}
                  />
                </svg>
              </div>
              <div className="flex justify-between font-mono text-[10px] text-gray-500">
                <span>{charts.net_score.first_timestamp}</span>
                <span>{charts.net_score.last_timestamp}</span>
              </div>
            </figure>
          )}

          {/* Pressure Chart */}
          {charts.pressure.ok && (
            <figure className="space-y-3 rounded-lg border border-gray-800 bg-black/60 p-4">
              <figcaption className="text-xs text-gray-400 leading-relaxed">
                <span className="font-semibold text-gray-200">
                  Bullish vs Bearish Intensity per Bar:
                </span>{" "}
                Displays volume of bull vs bear forces simultaneously from a shared
                center line (peak: {charts.pressure.peak} points).
              </figcaption>
              <div className="h-36 w-full">
                <svg
                  className="h-full w-full"
                  viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Bullish vs Bearish Pressure"
                >
                  {charts.pressure.rects.map((r, i) => (
                    <g key={i}>
                      <rect
                        x={r.x}
                        y={r.bull_y}
                        width={r.w}
                        height={r.bull_h}
                        fill="#22c55e"
                        fillOpacity="0.85"
                      />
                      <rect
                        x={r.x}
                        y={r.bear_y}
                        width={r.w}
                        height={r.bear_h}
                        fill="#ef4444"
                        fillOpacity="0.85"
                      />
                    </g>
                  ))}
                  <line
                    x1={0}
                    y1={charts.pressure.mid_y}
                    x2={CHART_WIDTH}
                    y2={charts.pressure.mid_y}
                    stroke="#4b5563"
                    strokeWidth="0.8"
                  />
                </svg>
              </div>
            </figure>
          )}
        </section>

        {/* Latest Bar Signals by Category Grid */}
        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
              Active Signals by Category ({categories.length} Categories Fired)
            </h2>
            <span className="font-mono text-xs text-gray-500">
              {summary.total_signals} Total Historical Signals
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat}
                className="rounded-lg border border-gray-800 bg-black/60 p-4 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-green-400">
                    {cat}
                  </h3>
                  <span className="rounded-full bg-gray-800 px-2 py-0.5 font-mono text-[10px] text-gray-400">
                    {signalsByCategory[cat].length}
                  </span>
                </div>
                <ul className="space-y-2">
                  {signalsByCategory[cat].map((s, i) => {
                    const isBull = s.strength.includes("BULLISH");
                    const isBear = s.strength.includes("BEARISH");
                    const badgeColor = isBull
                      ? "bg-green-950 text-green-300 border-green-800"
                      : isBear
                      ? "bg-red-950 text-red-300 border-red-800"
                      : "bg-gray-900 text-gray-400 border-gray-700";

                    return (
                      <li
                        key={`${cat}-${i}`}
                        className="flex flex-col gap-1 border-b border-gray-900 pb-2 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-xs text-gray-200">
                            {s.signal}
                          </span>
                          <span
                            className={`rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase font-bold shrink-0 ${badgeColor}`}
                          >
                            {s.strength}
                          </span>
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono">
                          {s.description}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Distribution Tables */}
        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Historical Signal Distributions (189 Scanned Bars)
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-300">
                Signals by Category
              </h3>
              <div className="max-h-72 overflow-y-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-gray-800 text-gray-500">
                      <th className="py-1">Category</th>
                      <th className="py-1 text-right">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(summary.by_category)
                      .sort((a, b) => b[1] - a[1])
                      .map(([cat, n]) => (
                        <tr
                          key={cat}
                          className="border-b border-gray-900/60 text-gray-300 hover:bg-gray-900/40"
                        >
                          <td className="py-1">{cat}</td>
                          <td className="py-1 text-right text-green-400">{n}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-lg border border-gray-800 bg-black/60 p-4">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-300">
                Signals by Strength
              </h3>
              <div className="max-h-72 overflow-y-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-gray-800 text-gray-500">
                      <th className="py-1">Strength Class</th>
                      <th className="py-1 text-right">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(summary.by_strength)
                      .sort((a, b) => b[1] - a[1])
                      .map(([strength, n]) => {
                        const isBull = strength.includes("BULLISH");
                        const isBear = strength.includes("BEARISH");
                        const textColor = isBull
                          ? "text-green-400"
                          : isBear
                          ? "text-red-400"
                          : "text-gray-400";

                        return (
                          <tr
                            key={strength}
                            className="border-b border-gray-900/60 text-gray-300 hover:bg-gray-900/40"
                          >
                            <td className="py-1">{strength}</td>
                            <td className={`py-1 text-right font-bold ${textColor}`}>
                              {n}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Scan Methodology */}
        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Scan Parameters & Engine Metadata
          </h2>
          <div className="grid grid-cols-2 gap-4 text-xs font-mono sm:grid-cols-4">
            <div className="rounded-lg border border-gray-800 bg-black/40 p-3">
              <span className="text-gray-500 block">Symbol</span>
              <span className="text-green-400 font-bold">{metaData.symbol}</span>
            </div>
            <div className="rounded-lg border border-gray-800 bg-black/40 p-3">
              <span className="text-gray-500 block">Period / Interval</span>
              <span className="text-gray-200">{metaData.period} / {metaData.interval}</span>
            </div>
            <div className="rounded-lg border border-gray-800 bg-black/40 p-3">
              <span className="text-gray-500 block">Avg Signals / Bar</span>
              <span className="text-gray-200">{summary.avg_signals_per_bar}</span>
            </div>
            <div className="rounded-lg border border-gray-800 bg-black/40 p-3">
              <span className="text-gray-500 block">Engine Version</span>
              <span className="text-gray-200">Boll-4 Sigs v2.6</span>
            </div>
          </div>
        </section>

        {/* Back to Home Link */}
        <p className="text-center pt-4">
          <Link to="/" className="text-sm text-green-400 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Finance · {SLUG} · TastyTechBytes
      </footer>
    </div>
  );
}
