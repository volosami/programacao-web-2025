const express = require('express')
const estoque = require('./estoque')
const app = express()

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque</h1>'
    html += '<h3></h3>'
    html += '<p>adicionar</p>'
    html += '<p>listar</p>'
    html += '<p>remover</p>'
    html += '<p>editar</p>'

    res.send(html)
})

// add/:id/:nome/:qtd
app.get('adicionar', (req, res)=>{
    const id = Number(req.params.id)
    const nome = req.params.nome
    const qtd = Number(req.params.qtd)

    const item = {
        id: id,
        nome: nome,
        qtd: qtd
    }

    res.send(estoque.adicionar(item))
})

// listar
app.get('listar', (req, res)=>{
    res.send(estoque.listar()) //devolve o array de items
})

// remover/:id/
app.get('remover', (req, res)=>{
    const id = Number(req.params.id)
    const qtd = Number(req.params.qtd)
})

// editar/:id/:qtd
app.get('editar', (req, res)=>{
    const id = Number(req.params.id)
    const qtd = Number(req.params.qtd)

    res.send(estoque.editar(id, qtd))

})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT)
}
)
