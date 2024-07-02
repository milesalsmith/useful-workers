addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with JSON
 * @param {Request} request
 */
async function handleRequest(request) {
  const data = {
    message: 'Hello from Cloudflare Worker!',
    timestamp: new Date().toISOString()
  }

  return new Response(JSON.stringify(data), {
    headers: { 'content-type': 'application/json' },
  })
}

