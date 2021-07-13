const knex = require("knex");

const database = knex({
    client: 'mysql2',
    connection: {
      host : process.env.HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASS_KEY ,
      database : process.env.DATABASE
    }
  });

module.exports =  database;