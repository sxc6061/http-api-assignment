const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const statusHandler = require('./statusResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': htmlHandler.getIndex,
  '/success': statusHandler.success,
  '/badRequest': statusHandler.badRequest,
  '/unauthorized': statusHandler.unauthorized,
  '/forbidden': statusHandler.forbidden,
  '/internal': statusHandler.internal,
  '/notImplemented': statusHandler.notImplemented,
  notFound: statusHandler.notFound,
};

const onRequest = (request, response) => {
  // const url = request.url;
  const parsedUrl = url.parse(request.url);
  const params = query.parse(parsedUrl.query);
  const valid = query.parse(parsedUrl.query).valid;
  console.dir(parsedUrl);
  console.dir(params);
  console.dir(valid);
  if (urlStruct[parsedUrl.pathname]) {
    urlStruct[parsedUrl.pathname](request, response, params);
  } else {
    urlStruct.notFound(request, response, params);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
