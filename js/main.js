import navComponente from "./nav.js"
import Banner from "./banner.js"
import Card from "./cards.js"
import paginas from "./paginas.js"

let pag = new paginas()

function mainPage(){
let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();
let CardProduto =  new Card()


nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","Home")

let B =new Banner();
let BannerInfo = ["<h1>Compra rapida</h1> <br/> <h3> Compre roupas mais rapido... </h3>","<h1>Roupas da moda</h1> <br/> <h3> Moda </h3>","<h1> Oferta relampago </h1>"]
B.CriarBanner("banner_1")
B.ModificaBanner("banner_1",BannerInfo,2)

let BannerIndex = 0
let bannerTime = setInterval(()=>{
    try{
    //Corpo dela SetInterva
    if(BannerIndex >= 2){
        BannerIndex = 0
    }   
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
    BannerIndex+=1
    }
    catch{
        console.log("Banner foi parado por algum erro")
        clearInterval(bannerTime)
    }
},9000)

document.getElementById("btBannerProximo").addEventListener("click",()=>{
    //Corpo do addEventListener
    //O que acontece se for pressionado 
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    else{
        BannerIndex+=1
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
})

document.getElementById("btBannerAnterior").addEventListener("click",()=>{
    //Corpo do addEventListener
    //O que acontece se for pressionado 
    if(BannerIndex<=0){
        BannerIndex = 2
    }
    else{
        BannerIndex-=1
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
})

CardProduto.EscolherTipo("card sb")
CardProduto.CriarCards("PortaCard1","Tenis da adidas","è um tenis de alta performance")
CardProduto.CriarCards("PortaCard1","Tenis da adidas","è um tenis de alta performance")

let CardVenda = new Card()
CardVenda.EscolherTipo("cardProduto sb")
CardVenda.CriarCards("PortaCard1","Produto a venda","Venda do produto")
}

mainPage()

function produtosPage(){
    let pagina = document.getElementById("pagina")
    pagina.innerHTML = ""
    document.getElementsByClassName("localNav")[0].getElementsByTagName("h4")[0].innerHTML = "Produtos"
    pag.PaginaDeProduto()
}

let HomeMenu = document.getElementById("Menu_02").getElementsByTagName("li")[0].getElementsByTagName("a")[0]
HomeMenu.addEventListener("click",()=>{
    window.location.reload()
})

let ProdutoMenu = document.getElementById("Menu_02").getElementsByTagName("li")[1].getElementsByTagName("a")[0]
ProdutoMenu.addEventListener("click",produtosPage)