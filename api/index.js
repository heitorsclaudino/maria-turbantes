const express = require('express');
const db = require('./connection');

//Porta do Servidor
const PORT = 8080;

const app = express();

app.use(express.json());

//Requisições ao Banco de Dados
const getAllProducts = async () => {
    const [query] = await db.execute("SELECT * FROM produtos");
    return query;
};

app.get('/', (req, res) => {
    getAllProducts();
});


app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}.`);
});