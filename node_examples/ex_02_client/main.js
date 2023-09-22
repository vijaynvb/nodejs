// act like a client to consume a server.

const http = require('http')

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/todos/1',
    method: 'GET',
  };

const req = http.request(options, res => {
    let data =''

    res.on('data', chunk => {
        data+=chunk
    });

    res.on('end', ()=>{
        console.log(data);
    });
})

req.on('error', (error)=>{
    console.log(error);
});

req.end();