// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('xe', 'renato', '1020', {
//     host: 'localhost',
//     dialect:  'mysql'
//   });

//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

const express = require("express");
const App = express();
const mysql = require("mysql2");
const cors = require("cors");


const db =mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1020",
    database: "tarefas",
});

App.use(cors());
App.use(express.json());

// App.get("/",(req,res)=>{
//     let SQL = "INSERT INTO tbtarefa(nome,situacao,detalhes) VALUES('comprar arroz','Em andamento','comprar arroz no mercado mais barato da esquina.' )";

//     db.query(SQL,(err,result)=>{
//         console.log(err)
//     })
// });

App.listen(3001,()=>{console.log("rodando servidor");});