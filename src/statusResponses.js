const http = require('http');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const status = [
    {"id" : "Success", "message" : "Message: This is a successful response"},
    {"id" : "Bad Request","message" : "Message: Missing vlaid query parameter set to true"},
    {"id" : "Unauthorized","message" : "Message: Missing loggedIn query parameter set to yes"},
    {"id" : "Forbidden","message" : "Message: You do not have access to this content"},
    {"id" : "Internal Server Error","message" : "Message: Internal Server Error. Something went wrong."},
    {"id" : "Not Implemented","message" : "Message: A get request for this page has not been implemented yet. Check again later for updated content."},
    {"id" : "Resource Not Found","message" : "Message: The page you are looking for was not found"}
];

const getStatus = (request,response) =>{
    response.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin':'*'});
    let json = "";
    switch (request.url){
        case '/success':
            json = JSON.stringify(status[0])
            break;
        case '/badRequest':
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

module.exports.getStatus = getStatus;