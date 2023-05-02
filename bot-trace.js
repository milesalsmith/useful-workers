addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const isBot = request.headers.get('cf-bot-management') === 'on'

  if (isBot) {
    console.log('This request was flagged as a bot by Cloudflare Bot Management:', request.url)
  }

  // Pass through the request to the origin server
  return fetch(request)
}

