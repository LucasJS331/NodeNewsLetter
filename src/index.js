const { json } = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const { dirname } = require('path');
const connection = require("../db/connection");
const user = require("../routes/UserRouter");


//basic configuration

app.use(express.urlencoded({extended: false}));
app.use(json());
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine", "ejs");
app.use(user);


app.get("/", (req,res)=>{
    res.render("index");

})



app.get("/user", (req,res)=>{
    res.render("index");
})

app.post("/user", async (req,res)=>{
    let {nome,sobrenome,email} = req.body;

    if(nome == undefined || nome == "" || nome.lenght <=1){
        res.render("index");
        return;
    }

    if(sobrenome == undefined || sobrenome == "" || nome.lenght <=1){
        res.render("index");
        return;
    }

    if(email == undefined || email == "" || email.lenght <=1){
        res.render("index");
        return;
    }


    try {
        await connection.insert({nome,sobrenome,email}).from("user");
        res.render("success",{
            nome,
            sobrenome
        });
    } catch (error) {
        res.json({err: "deu erro man"});
        console.log(error);
    }


     
})



app.listen(port, ()=>{
    console.log("a aplicação está rodando na porta " + port);
    
});