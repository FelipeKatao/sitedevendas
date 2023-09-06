import card from "./cards.js"


class paginas{
    PaginaPrincipal = document.getElementById("pagina")
    Cards = new card()
    PaginaDeProduto(){
        this.InserirConteudo("<div id='VitrineProdutos'></div>")
        this.Cards.CriarCards("VitrineProdutos","Tenis da Nike","Produto novo da loja")
        document.getElementsByClassName("card")[0].addEventListener("click",this.PaginaProduto_nike)
    }
    PaginaProduto_nike(){
        document.getElementsByClassName("localNav")[0].getElementsByTagName("h4")[0].innerHTML = "Produtos / Tenis Nike"
        document.getElementById("pagina").innerHTML =""
        this.InserirConteudo("Tenis da nike (novo)")
    }
    InserirConteudo(Conteudo){
        this.PaginaPrincipal.innerHTML+=Conteudo
    }
}

export default paginas