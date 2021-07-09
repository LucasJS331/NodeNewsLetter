const { render } = require("ejs");
const {Router} = require("express")
const route = Router();
const user = require("../controllers/UserController");



route.get("/", async (req,res)=>{
    res.render("index");

})

route.post("/teste", user.registerUser);

module.exports = route;