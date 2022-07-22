let bebidas = []

function adicionar(){
    let novoBebidas = {}
    novoBebidas.campoDesc = document.getElementById("campoDesc").value
    novoBebidas.campoPreco = document.getElementById("campoPreco").value
    novoBebidas.campoImagem = document.getElementById("campoImagem").value

    document.getElementById("campoDesc").value = ""
    document.getElementById("campoPreco").value = ""
    document.getElementById("campoImagem").value = ""

    if(campoDesc == "" || campoPreco == ""|| campoImagem == "")
    {
        alert("Preencha todos os campos!")
    }
    else
    {
        bebidas.push(novoBebidas)
        imprimeCatalogo()
    }
}

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
