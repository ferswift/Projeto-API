const express = require("express"); // acessnado biblioteca
const rotas = require("./rotas");

const app = express(); // instanciando

app.use(express.json()); // ultilizando o JSON
app.use(rotas); // ultilizando um middleware

app.listen(3000); // escutando a porta 3000
