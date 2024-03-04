const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('http://localhost:3000/simple_server', (req, res) => {
    console.log(req.body);
    res.send('Dados recebidos');
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});