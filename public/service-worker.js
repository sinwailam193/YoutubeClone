const cacheName = "v2";
const cacheFiles = [
    "./",
    "./index.html",
    "./style/style.css",
    "./bundle.js"
]

self.addEventListener("install", e => {
    console.log("installed");
    e.waitUntil(caches.open(cacheName).then(cache => {
        console.log("caching files");
        return cache.addAll(cacheFiles);
    }));
});

self.addEventListener("activate", e => {
    console.log("activated");
    e.waitUntil(caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.map(cache_name => {
            if (cache_name !== cacheName) {
                console.log("removing cached files from", cache_name);
                return caches.delete(cache_name);
            }
        }));
    }));
});

self.addEventListener("fetch", e => {
    console.log("fetching", e.request.url);
    e.respondWith(caches.match(e.request).then(res => {
        if (res) {
            console.log("Found in cache", e.request.url);
            return res;
        }
        const requestClone = e.request.clone();
        fetch(requestClone).then(res => {
            if (!res) {
                console.log("No response from fetch");
                return res;
            }
            const responseClone = res.clone();
            caches.open(cacheName).then(cache => {
                cache.put(e.request, responseClone);
                return res;
            });
        });
    }).catch(err => {
        console.log("Error fetching & caching data", err)
    }));
});
