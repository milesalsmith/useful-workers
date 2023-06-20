async function handleRequest(request) {
  const language = request.headers.get("Accept-Language")
  const requestUrl = new URL(request.url)
  const url = requestUrl.toString()
                 .replace("electricjellyfish.org","electricjellyfish.org/cn")

if (language.includes('zh')) {
  return Response.redirect(url, 301)
} else {
    return new Response("mlem", { status: 403})  
  } 
  return await fetch(request)
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
