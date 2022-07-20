let bebidas = []

function adicionar(){
    let novoBebidas = {}
    novoBebidas.campoDesc = document.getElementById("campoDesc").value
    novoBebidas.campoPreco = document.getElementById("campoPreco").value

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
    let cacheProdutos = ""
    divProdutos.innerHTML = ""
    for(let i = 0; i < bebidas.length; i++)
    {
        cacheProdutos = bebidas[i]
        divProdutos.innerHTML += `
        <img src="img/h2o.jpg" alt="H2O"/>
        <div>
        <h3>${cacheProdutos}</h3>
        <h3>R$: 4,00</h3>
        <button>COMPRAR</button>
        </div>
        `
    }
}

// function adicionar(){
//     let campoDesc = document.getElementById("campoDesc").value
//     let campoPreco = document.getElementById("campoPreco").value
//     let campoImagem = document.getElementById("campoImagem").value

//     if(campoDesc == "" || campoPreco == ""|| campoImagem == "")
//     {
//         alert("Preencha todos os campos!")
//     }
//     else
//     {
//         bebidas.push(campoDesc)
//         document.getElementById("campoDesc").value = ""
//         imprimeCatalogo()
//     }
// }

// function imprimeCatalogo(){
//     let divProdutos = document.getElementById("produtos")
//     let cacheProdutos = ""
//     divProdutos.innerHTML = ""
//     for(let i = 0; i < bebidas.length; i++)
//     {
//         cacheProdutos = bebidas[i]
//         divProdutos.innerHTML += `
//         <img src="img/h2o.jpg" alt="H2O" />
//             <div>
//                 <h3>${cacheProdutos}</h3>
//                 <h3>R$: 4,00</h3>
//                 <button>COMPRAR</button>
//             </div>
//         `
//     }
// }
