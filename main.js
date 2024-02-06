const form = document.getElementById('form-agenda')
let linhas = ''

form.addEventListener('submit', function(e){

    e.preventDefault()

    
    adicionaLinha()
    atualizaTabela()
    
})

function adicionaLinha(){
    
    const nome = document.getElementById('nome')
    const contato = document.getElementById('contato')
    
    let linha = '<tr>'
    
    linha += `<td>${nome.value}</td>`
    linha += `<td>${contato.value}</td>`
    
    linhas += linha
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}
