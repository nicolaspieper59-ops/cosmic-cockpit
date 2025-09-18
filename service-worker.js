const CACHE_NAME = 'cockpit-cache-v1';
const FILES_TO_CACHE = [
  '/', '/index.html', '/manifest.json', '/settings.js',
  '/icon-192.png', '/icon-512.png', '/style.css',
  '/modules/interface.html', '/modules/rtx-vitesse.html',
  '/modules/inertiel.html', '/modules/rtx-vitesse.js',
  '/modules/inertiel.js', '/modules/mobile-panel.html',
  '/modules/mobile-panel.js', '/modules/mobile-panel.css'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
