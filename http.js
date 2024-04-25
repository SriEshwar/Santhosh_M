const http=require('http')
// createServer()---> create an HTTP server.
// http.createServer((request,response)=>{
//  response.write('Welcome to learn Nodejs');
//  response.end();
// }).listen(3000);


const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/html")
    res.end('<p>hii! Welcome to learn node js.</p>')
});
server.listen(3000,()=>{
console.log("server is running on http://localhost:3000");
});
