addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const acceptLanguage = request.headers.get('Accept-Language')

  if (request.url.includes('kiska.com') && acceptLanguage && acceptLanguage.startsWith('el')) {
    const newUrl = request.url.replace('kiska.com', 'kiska.com/cn')
    return Response.redirect(newUrl, 301)
  }

  // Forward the request to the origin server if no redirect is necessary
  return fetch(request)
}

