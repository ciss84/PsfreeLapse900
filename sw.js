const CACHE_NAME='ps4-jailbreak-v2';
const CACHE_FILES=['./','./index.html','./ps4cache.appcache','./payload.js','./loader.js','./bundle.js','./Style.css','./hen.png','./theme.html','./1.jpg','./2.jpg','./3.jpg','./4.jpg','./5.jpg'];

self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CACHE_FILES)).then(()=>self.skipWaiting()));});

self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(n=>Promise.all(n.map(x=>{if(x!==CACHE_NAME)return caches.delete(x);}))).then(()=>self.clients.claim()));});

self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>{if(r)return r;return fetch(e.request).then(res=>{if(!res||res.status!==200)return res;const clone=res.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));return res;}).catch(()=>caches.match('./index.html'));}));});