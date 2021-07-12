const {Router} = require("express")
const route = Router();
const user = require("../controllers/UserController");


route.get("/", user.renderIndex);
route.post("/teste", user.registerUser);

module.exports = route;