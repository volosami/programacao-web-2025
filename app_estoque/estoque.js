const itens = []

function adicionar(item){

    // validação
    if(validar_item(item)){
        itens.push(item)
    }
}

function listar(){
    return itens
}

function editar(id, qtd){
    return editar_item(id, qtd)
}

module.exports = {
    adicionar,
    listar,
    editar

}

function is_numerico(n){
    if(isNaN(n) || n == null){
        return false
    }
    return true
}

function is_id_cadastrado(id){
    for (let item_cadastrado in itens) {
        if(item_cadastrado.id === item.id){
            return false
        }
    }
}

function validar_item(item){
    let item_valido = true

    // condições ID
    if(!is_numerico(item.id) || item.qtd < 0){
            item_valido = false
    }

    // verificar se o ID existe
    for (let item_cadastrado in itens) {
        if(item_cadastrado.id === item.id){
            item_valido = false
        }
    }

    // condições qtd
    if(!is_numerico(item.qtd) || item.qtd < 0){
        item_valido = false
}

    // condições nome
    if(item.nome.length < 1){
        item_valido = false
    }

    if(item_valido){
        return item
    }
}

function editar_item(id, qtd){
    if(!is_numerico || id === 0){
        console.log('id invalido')
        return false
    }

    if(!is_id_cadastrado(id)){
        console.log('id já cadastrado')
        return false
    }

    if(!is_numerico || qtd < 0){
        console.log('id invalido')
        return false
    }

    for (let item_cadastrado in itens) {
        if(item_cadastrado.id === id){
            item_cadastrado.qtd = qtd
        }
    }
    return true
    
}