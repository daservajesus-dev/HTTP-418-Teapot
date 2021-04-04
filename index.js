import template from './template'

async function handleRequest(request) {
	return new Response(template, {
		status: 418,
		headers: {
			"content-type": "text/html;charset=UTF-8",
		},
	})
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})