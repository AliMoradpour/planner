# برنامه ۱۲ هفته — 12-week planner

A Persian (RTL) personal planner that works offline. It is a static web app, installed on iPhone through Safari's "Add to Home Screen".

**Live:** https://alimoradpour.github.io/planner/

- Everything (HTML, CSS, JS) lives in `index.html`. There is no build step and no dependencies.
- Data stays on the device in `localStorage` under the key `planner12-v1`. Use **Goals → Backup** to copy it out or restore it.
- `sw.js` caches every file so the app works without a network.
- Every path is relative, so the site works from the `/planner/` subpath.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app |
| `sw.js` | Offline cache (`VERSION`, `FILES`) |
| `manifest.webmanifest` | Home-screen app settings |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | Icons |
| `fonts/*.woff2` | Doran and Hasti, subset to Latin and Persian |

## Fonts

- **Doran** (Regular, Medium, ExtraBold, ExtraBlack): body text and interface. © fontiran.com.
- **Hasti** Heavy: headings, the main task line and large numbers. © fontiran.com (Moslem Ebrahimi).

Both are commercial fonts from [fontiran.com](https://fontiran.com/licenses), used here under the owner's licence. They are not covered by any licence for this repository; don't reuse them elsewhere without your own licence.

## Updating the app

1. Edit the files.
2. In `sw.js`, bump `VERSION` (for example `planner-v2` → `planner-v3`). If you add or remove a file, update `FILES` too: a missing path breaks the offline install.
3. Commit and push to `main`. GitHub Pages redeploys within a minute or two.
4. On the phone, open the app twice: the first launch fetches the new version and the second shows it.

## Run locally

From the folder that contains `planner/`, so the URL matches the hosted subpath:

```
python -m http.server 8000
# open http://localhost:8000/planner/
```

## Hosting

GitHub Pages, deployed from branch `main`, folder `/ (root)`. To set it up: repository **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save**.
