const dateFormat = require("dateformat");

class NewsFactory{
    toHTML(n){

        //Formata as noticias para sair com a estrutura HTML
        let formatedNews = {
            titulo: n.titulo ,
            text: n.corpo,
            corpo:"<h1 style='color: rgb(15, 204, 15); margin-bottom: 5px; letter-spacing: 1.3px;'>" + n.titulo + "</h1>" + 
                    "<time>" + dateFormat(n.data, "dd/mm/yyyy") + "</time>" + 
                    "<p style='line-height: 1.5; color: rgb(32, 33, 32);'>" + n.corpo + "</p>" + 
                    " <a href='#' style='color: white; text-decoration: none; padding: 10px; border-radius: 5px;background-color: rgb(15, 204, 15);display: inline-block; margin-top: 6px;'>" + 
                    "mais noticias! </a>",
        }

        return formatedNews;
    }
}

module.exports = new NewsFactory()