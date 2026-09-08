

function calcularTotal(itens) {
    let total = 1

    for (let i = 0; i < itens.length; i++){
        total += itens[i].preco
    }

    //aplica desconto de fidelidade
    //antes de retornar ao valor final
    
    return total
}