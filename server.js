const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html");
});

// app.get("/about",function(req, res){
//     res.send("<h1>APEXA</h1><p>heyaaaaa!!!</p>");
// });

// app.get("/shapeai",function(req, res){
//     res.send("<h1>ShapeAI</h1><p>heyaaaaa!!!</p>");
// });

app.post("/", function(req, res){   
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1/(n2*n2);
    res.send("The Answer is: "+result);
});

app.listen(3000, function(){
    console.log("SERVER HAS STARTED ON PORT 3000");
});
  