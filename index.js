const express = require ('express');
const  app = express();

var puerto = process.env.port || 80;

app.get('/',(req,res)=>{
    res.send("servidor en el puerto  5000")

})

app.listen(puerto,()=>{
    console.log("servidor en el puerto 80")
})