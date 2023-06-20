addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const acceptLanguage = request.headers.get('accept-language')

  // Check if the 'accept-language' header includes simplified Chinese (zh-CN)
  if (acceptLanguage && acceptLanguage.includes('zh-CN')) {
    const url = new URL(request.url)

    // Redirect to 'electricjellyfish.org/secure'
    url.pathname = '/secure'

    return Response.redirect(url.toString(), 302)
  }

  // Pass the request through without redirection
  return fetch(request)
}

