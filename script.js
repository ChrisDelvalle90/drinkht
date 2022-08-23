let bebidas = []

function adicionar(){
    let novoBebidas = {}
    // Captura o valor inserido nos campos
    novoBebidas.campoDesc = document.getElementById("campoDesc").value
    novoBebidas.campoPreco = document.getElementById("campoPreco").value
    novoBebidas.campoImagem = document.getElementById("campoImagem").value
    
    // Comando para limpar os campos após inserção
    document.getElementById("campoDesc").value = ""
    document.getElementById("campoPreco").value = ""
    document.getElementById("campoImagem").value = ""

    // Testa se todos os campos foram preenchidos
    if(novoBebidas.campoDesc == "" || novoBebidas.campoPreco == "" || novoBebidas.campoImagem == "")
    {
        alert("Preencha todos os campos!")
    }
    else
    {
        bebidas.push(novoBebidas)
        imprimeCatalogo()
    }
}
// Função que faz a inserção do HTML no catalogo
function imprimeCatalogo(){
    let divProdutos = document.getElementById("produtos")
    divProdutos.innerHTML = ""
    for(let i = 0; i < bebidas.length; i++)
    {
        divProdutos.innerHTML += `
        <div class="produto">
            <img src="${bebidas[i].campoImagem}" alt=""/>
            <div>
                <h3>${bebidas[i].campoDesc}</h3>
                <h3>R$: ${bebidas[i].campoPreco.toString().replace(".", ",")}</h3>
                <button>COMPRAR</button>
            </div>
        </div>
        `
    }   
}
// Executa o botão adicionar
document.getElementById("btnAdicionar").onclick = adicionar

//Função de busca
function buscar(){
    let campoBusca = document.getElementById("campoBusca").value
    document.getElementById("campoBusca").value = ""
    let divProdutos = document.getElementById("produtos")
    
    if(campoBusca == "")
    {
        alert("Digite o nome do produto para buscar!")
    }
    else if(campoBusca != "")
    {
        for(let i = 0; i < bebidas.length; i++)
        {
            if(campoBusca == bebidas[i].campoDesc)
            {
                divProdutos.innerHTML = `
                <div class="produto">
                    <img src="${bebidas[i].campoImagem}" alt=""/>
                    <div>
                        <h3>${bebidas[i].campoDesc}</h3>
                        <h3>R$: ${bebidas[i].campoPreco.toString().replace(".", ",")}</h3>
                        <button>COMPRAR</button>
                    </div>
                </div>
                `
            } 
        }
    }
    else
    {
        alert("Produto não encontrado!")
    }
}
//Executa o botão buscar
document.getElementById("btnBuscar").onclick = buscar

//Função limpar busca
function limpar()
{
    document.getElementById("produtos").innerHTML = ""
    imprimeCatalogo()
}
//Executa o botão limpar
document.getElementById("btnLimpar").onclick = limpar