'use strict';

const CACHE_NAME = 'box-drive-import-content-v1';
const CONTENT_SCOPE_PATH = new URL(self.registration.scope).pathname;

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  if (
    event.request.method !== 'GET' ||
    requestUrl.origin !== self.location.origin ||
    !requestUrl.pathname.startsWith(CONTENT_SCOPE_PATH)
  ) {
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const response = await cache.match(event.request, { ignoreSearch: true });
    if (response) {
      return response;
    }

    return new Response('保存済みファイルが見つかりません。フォルダを再度取り込んでください。', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store'
      }
    });
  })());
});
