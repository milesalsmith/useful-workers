addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Define the cache key based on the request URL
  const cacheKey = new Request(request.url, request)

  // Check if the response is in the cache
  const cachedResponse = await caches.default.match(cacheKey)

  if (cachedResponse) {
    // If the response is in the cache, return it
    return cachedResponse
  }

  // If the response is not in the cache, fetch it from the origin server
  const response = await fetch(request)

  // Clone the response to avoid modifying the original response object
  const responseClone = response.clone()

  // Cache the response for future requests
  event.waitUntil(caches.default.put(cacheKey, responseClone))

  // Return the response to the client
  return response
}

