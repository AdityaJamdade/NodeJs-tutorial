const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 4000;

const index = fs.readFileSync('index.html', 'utf-8');

const server = http.createServer((req, res)=>{
    url = req.url;
    // res.statusCode(200);
    res.setHeader('Content-type', 'text/html');
    if(url=='/'){
        res.end(index);
    }
    else{
        res.end("<h1>404 not found!</h1>");
    }
})

server.listen(port, hostname, ()=>{
    console.log(`App listening on http://${hostname}:${port}`);
})