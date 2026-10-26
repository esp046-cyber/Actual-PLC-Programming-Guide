const C='agac-v2',A=['./','./index.html','./icon-192.png','./icon-512.png','./manifest.json','./src/css/main.css','./src/js/app.js','./public/offline.html','./public/icons/icon-192x192.svg','./public/icons/icon-512x512.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./public/offline.html')))));
