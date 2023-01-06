const http = require("http");
const List1 =["sleep", "cook"];

const port = 8081;
http.createServer((request, response) =>{
    const {method, url} = request;
    if(url=== "/todoList")
    {
        if(method==="GET")
        {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(List1.toString());
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
                List1.push(body.item);
                console.log(List1);
                response.end();
            })



        }else if(method==='DELETE'){
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
                console.log(List1);
                List1.find((element, index) => {
                    if(element == body.item)
                    {
                        List1.splice(index, 1);
                    }

                }
                
            )

            console.log(List1);
            response.end();
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