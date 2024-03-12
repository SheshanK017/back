const http = require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welecome to home page")
    }
    if(req.url==='/about'){
        res.end("know something about us")
    }
    res.end(`
        <h1>OOPS!!!!!!!</h1>
        <p>there is nothing here</p>
        <a href='/'>home page </a>`
    )
   
})
server.listen(5000);