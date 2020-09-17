const http = require('http');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const status = [
    {"id" : "Success", "message" : "This is a successful response"},
    {"id" : "Bad Request","message" : "Missing valid query parameter set to true"},
    {"id" : "Unauthorized","message" : "Missing loggedIn query parameter set to yes"},
    {"id" : "Forbidden","message" : "You do not have access to this content"},
    {"id" : "Internal Server Error","message" : "Internal Server Error. Something went wrong."},
    {"id" : "Not Implemented","message" : "A get request for this page has not been implemented yet. Check again later for updated content."},
    {"id" : "Resource Not Found","message" : "The page you are looking for was not found"}
];

const getBadReq = (request,response) =>{
    
}

const getStatus = (request,response) =>{
    response.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin':'*'});
    let json = "";
    switch (request.url){
        case '/success':
            json = JSON.stringify(status[0])
            break;
        case '/badRequest':
            res.status(400);
            res.send('Response');
            json = JSON.stringify(status[1]);
            break;
        case '/unauthorized':
            json = JSON.stringify(status[2]);
            break;
        case '/forbidden':
            json = JSON.stringify(status[3]);
            break;
        case '/internal':
            json = JSON.stringify(status[4]);
            break;
        case '/notImplemented':
            json = JSON.stringify(status[5]);
            break;
        case '/badlink':
            json = JSON.stringify(status[6]);
            break;
    }
    response.write(json);
    response.end();
}

const respondJSON = (request, response, status, object) => {
    response.writeHead(status, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(object));
    response.end();
  };
  
  const success = (request, response) => {
    const responseJSON = {
      message: 'This is a successful response',
    };
  
    respondJSON(request, response, 200, responseJSON);
  };
  
  const badRequest = (request, response, params) => {
    const responseJSON = {
      message: 'This request has the required parameters',
    };
    
    if (!params.valid || params.valid != 'true'){ // REMINDER: everything sent over is a **String**, e.g. not a Boolean or a Number or ...
      responseJSON.message = 'Missing `valid` query parameter set equal to `true`';
      responseJSON.id = "badRequest";
      return respondJSON(request, response, 400, responseJSON);
    }
    return respondJSON(request, response, 200, responseJSON);
  };
  
  const notFound = (request, response) => {
    const responseJSON = {
      message: 'The page you are looking for was not found.',
      id: 'notFound',
    };
    
    return respondJSON(request, response, 404, responseJSON);
  };

  const unauthorized = (request, response) => {
    const responseJSON = {
        message: 'This request has the required parameters',
      };
      
      if (!params.valid || params.valid != 'true'){ // REMINDER: everything sent over is a **String**, e.g. not a Boolean or a Number or ...
        responseJSON.message = 'Missing loggedIn query parameter set to yes';
        responseJSON.id = "unauthorized";
        return respondJSON(request, response, 401, responseJSON);
      }
      return respondJSON(request, response, 200, responseJSON);
    };

    const forbidden = (request, response) => {
        const responseJSON = {
          message: 'You do not have access to this content',
          id: 'forbidden',
        };
        
        return respondJSON(request, response, 403, responseJSON);
      };

    const internal = (request, response) => {
        const responseJSON = {
            message: 'Internal Server Error. Something went wrong.',
            id: 'internalServerError',
        };
        
        return respondJSON(request, response, 500, responseJSON);
        };
    
    const notImplemented = (request, response) => {
        const responseJSON = {
            message: 'A get request for this page has not been implemented yet. Check again later for updated content.',
            id: 'notImplemented',
        };
        
        return respondJSON(request, response, 501, responseJSON);
        };
      
  module.exports = {
    success,
    badRequest,
    notFound,
    unauthorized,
    forbidden,
    internal,
    notImplemented
  };