const db = require("../db/connection");

class NewService{

     async Register(titulo, corpo,data,descricao,thumb){
        try {
          let result =  await db.insert({
                titulo: titulo,
                corpo: corpo,
                data: data,
                descricao: descricao,
                enviada: "0",
                thumb: thumb
            }).from("noticia");

            return result;

        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    async SelectAllNews(){
        try {
            let news = await db.select().from("noticia");

            return news;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async EnviarStatus(id,campo){
        try {
            await db.update({enviada: campo}).from("noticia").where({id: id});
            let result = true;
            return result;
            
        } catch (error) {
            console.log(error);
            let result = false;
            return result;
        }
    }
}

module.exports = new NewService();