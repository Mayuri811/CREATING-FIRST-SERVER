const http = require("http");

const port = 8081;
http.createServer((request, response) =>{
    const {method, url} = request;
    if(url=== "/todoList")
    {
        if(method==="GET")
        {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write("<h1>Hello</h1>");
            response.end();
        }
        else if(method==="POST")
        {
            let body="";
            request.on('error', (err)=>{
                console.error(err);
            })
            .on('data', (chunk)=>{
                body+=chunk;
            })
            .on('end', ()=>
            {
                body=JSON.parse(body);
                console.log(body);
            })



        }
        else{
            response.writeHead(501);
            response.end();

        }
    }
    else 
    {
        response.writeHead(401)
        response.end();
    }

})
.listen(port, () =>
{
    console.log(`Node.js server started on port ${port}`);
});