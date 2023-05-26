const express = require('express');
const cors = require('cors');
const bodyPaser = require('body-parser');

const app = express();

//Prevenção de erros
app.use(cors);
app.use(bodyPaser.json());

app.use(bodyPaser.urlencoded({
    extended : true,
}))

//Conexão com o banco de dados
const mysql = require('mysql');

const database = mysql.createPool({
    database : "maria_turbantes",
    host : "localhost",
    user : 'root',
    password : "",
});


//Primeira ação do servidor
app.listen(8080, () => {
    console.log('Server running on port: 8080');
});

//Rotas da API
app.get('/', (req, res) => {
    res.send({message : "Hello world!"});
});