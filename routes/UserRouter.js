const { render } = require("ejs");
const {Router} = require("express")
const route = Router();
const user = require("../controllers/UserController");
const dateFormat = require("dateformat");
const now = new Date();
const NewService = require("../Services/newService");



route.get("/", async (req,res)=>{
    res.render("index");
    console.log(dateFormat(now, "shortDate"));

  let news  = await NewService.SelectAllNews();

  news.forEach(n => {
      let n1 = dateFormat(n.data, "dd/mm/yyyy");

      console.log(n1);
  })


})
route.post("/teste", user.registerUser);

module.exports = route;