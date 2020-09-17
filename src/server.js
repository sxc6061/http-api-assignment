const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const statusHandler = require('./statusResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  if (request.url == '/'){
    htmlHandler.getIndex(request, response);
  }
  else{
    statusHandler.getStatus(request,response);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
