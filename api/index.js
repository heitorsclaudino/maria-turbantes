const express = require('express');
const cors = require('cors');
const db = require('./connection');

//Porta do Servidor
const PORT = 8080;

const app = express();

app.use(express.json());

app.use(cors);

//Requisições ao Banco de Dados
const getAllProducts = async () => {
    const [query] = await db.execute("SELECT * FROM produtos");
    return query;
};

app.get('/', (req, res) => {
    res.send("Hello World!");
    console.log(getAllProducts())
    
});


app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}.`);
});