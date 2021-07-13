const UserService = require("../Services/UserService");
const validator = require("validator");

class User{
    async registerUser(req,res){

        let {nome,sobrenome,email} = req.body;

        let nomeError;
        let sobrenomeError;
        let emailError;
        let emailExist; 


        if(nome == undefined || nome == " " || nome.length <=1){
            nomeError = "Nome invalido!";
        }

        if(sobrenome == undefined || sobrenome == " " || sobrenome.length <=1){
            sobrenomeError = "sobrenome invalido!";
        }
  

        if(!validator.isEmail(email)){
            // se o email nao existir
            emailError = "email é invalido!";
          
        } else{
            // se existir então verifica se está cadastrado
            try {
                let result = await UserService.verifyUserExistByEmail(email);

                if(result){
                    emailExist = "esse email já está cadastrado!";
                }
  
            } catch (error) {
                console.log(error);
            }
        }
        
        try {
            if(nomeError != undefined || sobrenomeError != undefined || emailError != undefined || emailExist != undefined){
                // cria as flash mensages 
                req.flash("nomeError", nomeError);
                req.flash("sobrenomeError", sobrenomeError);
                req.flash("emailError", emailError);
                req.flash("emailExist", emailExist);
                req.flash("emailValue", email);
                req.flash("nomeValue", nome);
                req.flash("sobrenomeValue", sobrenome);

                res.redirect("/");
                return;
            }

            res.render("success", {nome});

            await UserService.NewUser(nome,sobrenome, email);
        } catch (error) {
            console.log(error);
            res.redirect("/");
        }
        
        

       
    }

    async renderIndex(req,res){
        let nomeError = req.flash("nomeError");
        let nomeValue = req.flash("nomeValue");
        let sobrenomeError = req.flash("sobrenomeError");
        let sobrenomeValue = req.flash("sobrenomeValue");
        let emailError = req.flash("emailError");
        let emailExist = req.flash("emailExist");
        let emailValue = req.flash("emailValue");


        if(nomeError == undefined || nomeError.length == 0){
            nomeError == "";
        }

        
        if(nomeValue == undefined || nomeValue.length == 0){
            nomeValue == "";
        }

        if(sobrenomeError == undefined || sobrenomeError.length == 0){
            sobrenomeError == "";
        }

        if(sobrenomeValue == undefined || sobrenomeValue.length == 0){
            sobrenomeValue == "";
        }

        if(emailError == undefined || emailError.length == 0){
            emailError == "";
        }

        if(emailExist == undefined || emailExist.length == 0){
            sobrenomeError == "";
        }

        if(emailValue == undefined || emailValue.length == 0){
            emailValue == "";
        }
        
        
        res.render("index", {
             nomeError,
             nomeValue,
             sobrenomeValue,
             sobrenomeError,
             emailValue,
             emailError,
             emailExist
            });
        }
}


module.exports = new User();