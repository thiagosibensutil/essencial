function comprar(produto){
    function buscarProduto(){

let input = document.getElementById("pesquisa").value.toLowerCase()

let produtos = document.querySelectorAll(".produto")

produtos.forEach(produto => {

let nome = produto.innerText.toLowerCase()

if(nome.includes(input)){
produto.style.display = "block"
}else{
produto.style.display = "none"
}

})

}

let telefone = "5541991530405"

let mensagem = "Olá, tenho interesse no produto: " + produto

let url = "https://wa.me/" + telefone + "?text=" + encodeURIComponent(mensagem)

window.open(url, "_blank")

}
