const express = require('express');

const { db } = require('./dataBase');

//Porta do Servidor
const PORT = 8080;

const app = express();

//Requisições ao Banco de Dados
const getAllProducts = async () => {
    const response = await db.query("SELECT * FROM produtos");
    console.log(response);
};

app.get('/', (req, res) => {
    res.send('Hello World!');
    getAllProducts().then(resp => console.log(resp)).catch((e) => console.log('Ocorreu um erro ao tentar pegar os produtos: ' + e));
});


app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}.`);
});