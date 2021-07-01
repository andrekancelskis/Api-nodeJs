const express = require('express');
const server = express();

server.get('/nome', (req,res) => {
    return res.json([
        {
            nomeCompleto: 'André Kancelskis Azevedo de Oliveira',
            nome: 'André Kancelskis',
            numero: '5511998914844',
        }
    ])
});

server.get('/endereco', (req,res) => {
    return res.json({
        rua: 'Rua Afonso Braz 505',
        cep: "04511011",
        apto: '14',
        bairro: 'Vila Nova Conceição',
        cidade: 'São Paulo',
        estado: 'São Paulo'})
});

server.listen(process.env.PORT || 3000,() => {
    console.log('Servidor rodando...')
})