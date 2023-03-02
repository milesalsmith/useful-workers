async function handleRequest(request) {
  const url = new URL(request.url);
  const cacheKey = new Request(url.toString(), request);
  
  // Check if website is offline
  const response = await fetch(url.toString(), {
    cf: {
      cacheEverything: true,
      // Add other options here if needed
    },
  });
  
  // If website is offline, serve static content from cache
  if (!response.ok) {
    const cache = caches.default;
    let staticResponse = await cache.match(cacheKey);
    if (!staticResponse) {
      // Replace "backup.html" with the path to your static content file
      const backupUrl = "https://electricjellyfish.org/backup.html";
      staticResponse = await fetch(backupUrl);
      event.waitUntil(cache.put(cacheKey, staticResponse.clone()));
    }
    return staticResponse;
  }
  
  // If website is online, serve content from website
  return response;
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

