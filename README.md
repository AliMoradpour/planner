# برنامه ۱۲ هفته — 12-week planner

A Persian (RTL) personal planner that works offline. It is a static web app, installed on iPhone through Safari's "Add to Home Screen".

- Everything (HTML, CSS, JS) lives in `index.html`. There is no build step and no dependencies.
- Data stays on the device in `localStorage` under the key `planner12-v1`.
- `sw.js` caches every file so the app works without a network.
- Every path is relative, so the site works when served from a subpath such as `/planner/`.

Run it locally from the parent folder so the URL matches the hosted subpath:

```
python -m http.server 8000   # run in the folder that contains planner/
# open http://localhost:8000/planner/
```
