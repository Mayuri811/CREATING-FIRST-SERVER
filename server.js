const express = require("express");
const port = 8081;
const List1 = ["sleep", "cook"];
const app = express();
app.use(express.json());

app.get("/todos", (req, res)=>{
  
    res.status(200).send(List1);
})

app.post("/todos",(req, res)=>{
  
    List1.push(req.body.item);
    console.log(List1);
    res.end();
})

app.delete("/todos",(req, res)=>{
  
    
    List1.find((element, index) => {
        if(element == req.body.item)
        {
            List1.splice(index, 1);
        }

    })
    console.log(List1);
    res.end();
})

app.all("/todos",(req, res)=>{
    res.status(401);
})

app.all("*",(req, res)=>{
    res.status(501);
})


app.listen(port, ()=>{
    console.log(`Server started listening on port ${port}`);
})

