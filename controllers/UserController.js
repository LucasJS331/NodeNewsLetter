const UserService = require("../Services/UserService");
const validator = require("validator");

class User{
    async registerUser(req,res){

        let {nome,sobrenome,email} = req.body;

        if(nome == undefined || nome == "" || nome.lenght <=1){
            res.render("index");
            return;
        }

        if(sobrenome == undefined || sobrenome == "" || nome.lenght <=1){
            res.render("index");
            return;
        }

        if(!validator.isEmail(email)){
            res.render("index");
            return;
        }


        try {
            let result = await UserService.verifyUserExistByEmail(email);

            if(result){
                res.render("index");
            } else if(!result){

                let verify = await UserService.NewUser(nome,sobrenome,email);

                if(verify){

                    res.render("success",{
                        nome,
                        sobrenome
                    });
                } else{
                    res.render("index");
                }
                
            } else{
                res.render("index");
            }

        } catch (error) {
            res.json({err: "deu erro man"});
            console.log(error);
        }
    }
}


module.exports = new User();