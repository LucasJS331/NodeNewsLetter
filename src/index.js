const { json } = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const { dirname } = require('path');
const connection = require("../db/connection");
const user = require("../routes/UserRouter");
const info = require("./sendEmail");


//basic configuration

app.use(express.urlencoded({extended: false}));
app.use(json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(user);


//todoo: finalizei a parte de formatação do email, e fiz a logica do email para n ser enviado 2x, agr falta mexer no front/validação no  back com sessions


app.listen(port, ()=>{
    console.log("a aplicação está rodando na porta " + port);
    
});