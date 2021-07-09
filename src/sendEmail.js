const nodemailer = require("nodemailer");
const UserService = require("../Services/UserService");
const NewService = require("../Services/newService");
const NewsFactory = require("../factory/NewsFactory");
const utils = require("../Utils/var");


module.exports = setInterval( async () => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'brenden.nikolaus@ethereal.email',
                pass: 'AbwgentZXQfRKkM3FY'
            }
        });

        // get all users and news
        let users = await UserService.selectAll();
        let news = await  NewService.SelectAllNews();



        users.forEach( async user => {
            news.forEach(async noticia =>{
                if(noticia.enviada == 0){
                    let formatedNews = NewsFactory.toHTML(noticia);

                    await transporter.sendMail({
                        from: 'NodeNews' + utils.email, // sender address
                        to: user.email, // list of receivers
                        subject: formatedNews.titulo, // Subject line
                        text: formatedNews.text, // plain text body
                        html: formatedNews.corpo, // html body
                      });

                      await NewService.EnviarStatus(noticia.id, 1);

                }

            })
             
        });
        
       
       } catch (error) {
           console.log(error);
       }

}, 30000);



