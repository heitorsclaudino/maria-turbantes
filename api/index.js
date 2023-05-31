const express = require('express');
const cors = require('cors');
const bodyPaser = require('body-parser');

const app = express();

//Prevenção de erros
app.use(cors);
app.use(bodyPaser.json());

app.use(bodyPaser.urlencoded({
    extended : true,
}));

//Conexão com o banco de dados
const mysql = require('mysql');

    const database = mysql.createPool({
    database : "maria_turbantes",
    host : "localhost",
    user : 'root',
    password : "",
});


//Rotas da API
app.get('/', (req, res) => {
    const getAllProducts = 'SELECT * FROM produtos'
    
    database.query(getAllProducts, (err, result) => {
        if (err) console.log('Ocorreu um erro na query SQL' + err);

        res.json(result);
    })
});

app.get('/seila', (req, res) => {
    res.send('Hello world!')
});

//Primeira ação do servidor
app.listen(8080, () => {
    console.log('Server running on port: 8080');
});