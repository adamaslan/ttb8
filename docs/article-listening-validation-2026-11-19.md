# Article reader validation, November 19, 2026

The existing draft PR now includes the previously qualified IAM startup and remaining-time improvements for TTB's queue and per-article player. The article catalog, app wrapper, routes and dependency files are unchanged by this follow-up.

- All eight reviewed source/test files were read back after publication and match the prepared candidate exactly.
- Thirteen local unit/catalog tests passed using `node --test tests/*.test.mjs`.
- A separate synthetic-speech fixture verified preload without autoplay, synchronous first-tap startup, onstart/error state, pause/resume, 2.5x, rejected next-article startup with tap-to-retry recovery, Stop and theme selection. This is not audible output proof.
- Independent source/local review reproduced the tests, clean patch application and merge compatibility. No merge is authorized by this receipt.
- Full local TTB build remains unverified: the existing lockfile's nested Android-specific Rollup entry prevents clean installation on Linux. No lockfile, auth, environment or dependency workaround is included.
- The IAM preview still reports a speech-engine synthesis failure in the available browser. TTB phone sound, rate and continued playback remain unverified. A browser voice-start event is not evidence of audible output.

The remaining-time display is a rough text-based estimate at 180 words/minute at 1x, scaled by the selected rate. It is not a measured audio duration. Browser voices may use network services, and some devices may require a new tap between articles.

Production merge/release remains held. This commit requests the existing free nonproduction preview only, after staging the complete reviewed source with preview suppression. It does not enable a paid voice service, promise offline/private synthesis, or claim locked-screen playback or audio downloads.
