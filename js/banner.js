
class Banner{
    CriarBanner(IdAlvo,ListaBanner){
        let Elemento = document.getElementById(IdAlvo)
        Elemento.innerHTML +="<article></article>"
        Elemento.innerHTML += "<button id='btBannerAnterior' > < </button"
        Elemento.innerHTML += "<button id='btBannerProximo' > > </button>"
    }
    ModificaBanner(IdAlvo="",ListaBanner=[""],Index=0){
        let Banner =  document.getElementById(IdAlvo).getElementsByTagName("article")[0]
        Banner.innerHTML= ListaBanner[Index]
    }
} 

export default Banner