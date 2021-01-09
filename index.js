require ('dotenv').config();
const express = require ('express');
const  app = express();

var puerto = process.env.PORT || 80;
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("index.ejs")
})

app.listen(puerto,()=>{
    console.log("Servidor Activo",process.env.db)
})