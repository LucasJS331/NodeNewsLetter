const { json } = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const { dirname } = require('path');
const connection = require("../db/connection");
const user = require("../routes/UserRouter");
//const info = require("./sendEmail");
const session = require("express-session");
const flash = require("express-flash");
const cookieP = require("cookie-parser");


//basic configuration

app.use(express.urlencoded({extended: false}));
app.use(json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(cookieP("jfnjefnej"));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 3600000}
  }))

app.use(flash());
app.use(user);


//todoo: 8h pra conseguir finalmente usar esse express-session, agora falta finalizar com o front-end '-'


app.listen(port, ()=>{
    console.log("a aplicação está rodando na porta " + port);
    
});