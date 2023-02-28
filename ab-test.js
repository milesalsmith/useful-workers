// Set the percentage of requests to act on
const ACT_ON_PERCENT = 10;
// Set the IP addresses for the two destinations
const DESTINATION_A_IP = '<IP Address A>';
const DESTINATION_B_IP = '<IP Address B>';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Determine if this request should be acted on
  const shouldActOnRequest = Math.random() * 100 < 
ACT_ON_PERCENT;

  if (shouldActOnRequest) {
    // Determine which destination to send the request to
    const destination = Math.random() < 0.5 ? 
DESTINATION_A_IP : DESTINATION_B_IP;

    // Modify the request to send it to the selected 
destination
    const modifiedRequest = new Request(request);
    modifiedRequest.headers.set('Host', destination);

    // Send the modified request and return the response
    return fetch(modifiedRequest);
  } else {
    // Return the original response without modification
    return fetch(request);
  }
}

