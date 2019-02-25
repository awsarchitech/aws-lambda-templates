exports.handler = function(event, context, callback) {
  const html =
    '<html><head><title>Cloud Architech</title></head>' +
    '<body><h1>HTML via Lambda + API Gateway</h1></body></html>'

  return callback(null, html)
}
