const http = require('http');

const PORT = 3000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {

    if(req.url === '/')
        res.write("hello root");
    else if(req.url === '/home')
        res.write("hello home");
    else 
        res.write("path not fount");
    res.end();
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
