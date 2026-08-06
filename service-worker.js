const CACHE_NAME = "crypto-fund-ai-v1";

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});