const express = require('express')
const calc = require('./calculadora')
const app = express()

//requisição chegando na rota raiz = manda mensagem
app.get('/', (req, res)=>{
    res.send('Hello, world!')
})

//usando função arrow
const PORT = 8080
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT)
})
