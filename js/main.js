import navComponente from "./nav.js"
import Banner from "./banner.js"

let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();

nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","Home")

let B =new Banner();
let BannerInfo = ["<h1>Compra rapida</h1> <br/> <h3> Compre roupas mais rapido... </h3>","<h1>Roupas da moda</h1> <br/> <h3> Moda </h3>","<h1> Oferta relampago </h1>"]
B.CriarBanner("banner_1")
B.ModificaBanner("banner_1",BannerInfo,2)

let BannerIndex = 0
setInterval(()=>{
    //Corpo dela SetInterva
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
    BannerIndex+=1
},2000)