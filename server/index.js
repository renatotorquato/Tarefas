
require('dotenv').config()

const express = require("express");
const App = express();
const mysql = require("mysql2");
const cors = require("cors");


const db =mysql.createPool({
    //Variaveis de anbiente com dados do banco de dados.
    host: process.env.HOST_EVE,
    user:process.env.USER_EVE,
    password:process.env.PASSWORD_EVE,
    database:process.env.DATABASE_EVE,
});

App.use(cors());
App.use(express.json());

//Para salvar todos dados
App.post("/register",(req,res)=>{
   const {title} = req.body;
   const {date} = req.body;
   const {details} = req.body;
   
   let SQL = "INSERT INTO tbtarefa(nome,data,detalhes) VALUES(?,?,?)";

   db.query(SQL,[title,date,details],(err,result)=>{
             console.log(err)
   })
})

// Para pegar a data sem as horas.
// App.get("/getDate",(req,res)=>{
//     let SQL = "SELECT trunc(data) FROM tarefas.tbtarefa;";

//     db.query(SQL,(err,result)=>{
//        if (err) console.log(err);
//        else res.send(result);
//     })
// });

//Para pegar todos dados armazenados
App.get("/getData",(req,res)=>{
    let SQL = "SELECT * FROM tarefas.tbtarefa;";

    db.query(SQL,(err,result)=>{
       if (err) console.log(err);
       else res.send(result);
    })
});

App.listen(3001,()=>{console.log("rodando servidor");});