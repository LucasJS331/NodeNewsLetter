const connection = require("../db/connection");

class UserService {
     async selectAll(){
        try {
           let users = await connection.select().from("user");
           return users;
        } catch (error) {

            console.log(error);
            return [];
        }
    }

    async selectById(id){
        try {
            let user = await connection.select().from("user").where({id: id});
            
            return user;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    async verifyUserExistByEmail(email){
        try {
            let user = await connection.select().from("user").where({email: email});

            
            if(user.length > 0){
                return true;
            } else{
                return false;
            }
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    async NewUser(nome,sobrenome,email){
        try {
             await connection.insert({email,nome,sobrenome}).from("user");

             return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = new UserService();