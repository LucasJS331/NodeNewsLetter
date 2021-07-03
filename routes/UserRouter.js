const {Router} = require("express")
const route = Router();
const user = require("../controllers/UserController");



route.post("/teste", user.registerUser);

module.exports = route;