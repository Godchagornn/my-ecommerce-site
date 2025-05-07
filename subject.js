const http = require('http');

const server = http.createServer(function(req, res){
    res.setHeader('Access-Control-allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-control-Allow-Headers', 'Content-Type');
    res.writeHead(200, {'Content-Type': 'text/json'})
    res.write('{"contactSubject": ["General Enquiry","Class","Schedule","instructor","Price","Location","Other"]}')
    res.end();
})

server.listen(4040);