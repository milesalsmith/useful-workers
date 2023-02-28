var my_project_default = {
  fetch(request) {
    if (request.method === "POST") {
      return new Response("Hello World!", {
        headers: {
          "content-type": "application/json"
        }
      });
    } else {
      return new Response("Error Worker!", {
        headers: {
          "content-type": "text/plain"
        }
      });
    }
  }
};
export {
  my_project_default as default
};
