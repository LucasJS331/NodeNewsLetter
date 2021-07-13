const express = require("express");
const app = express();
const port = 3000;
const user = require("../routes/UserRouter");
const sendEmail = require("./sendEmail");
const session = require("express-session");
const flash = require("express-flash");


//basic configuration

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 3600000}
  }))

app.use(flash());
app.use(user);


app.listen(port, ()=>{
    console.log("a aplicação está rodando na porta " + port);
    
});