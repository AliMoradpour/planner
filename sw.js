var VERSION = 'planner-v2';
var FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './fonts/Doran-Regular.woff2',
  './fonts/Doran-Medium.woff2',
  './fonts/Doran-ExtraBold.woff2',
  './fonts/Doran-ExtraBlack.woff2',
  './fonts/Hasti-Heavy.woff2'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      return hit || fetch(e.request).catch(function () {
        if (e.request.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
