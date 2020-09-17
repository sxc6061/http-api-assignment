const http = require('http');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const status = [
    {"status" : "Success", "message" : "Message: This is a successful response"},
    {"status" : "Bad Request","message" : "Message: Missing vlaid query parameter set to true"},
    {"status" : "Unauthorized","message" : "Message: Missing loggedIn query parameter set to yes"},
    {"status" : "Forbidden","message" : "Message: You do not have access to this content"},
    {"status" : "Internal Server Error","message" : "Message: Internal Server Error. Something went wrong."},
    {"status" : "Not Implemented","message" : "Message: A get request for this page has not been implemented yet. Check again later for updated content."},
    {"status" : "Resource Not Found","message" : "Message: The page you are looking for was not found"}
];

const getStatus = (request,response) =>{
    response.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin':'*'});
    const json;
    switch (request.url){
        case '/success':
            json = JSON.stringify(status[0]);
            break;
    }
    response.write(json);
    response.end();
}

module.exports.getStatus = getStatus;