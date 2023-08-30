
class Banner{
    CriarBanner(IdAlvo,ListaBanner){
        let Elemento = document.getElementById(IdAlvo)
        Elemento.innerHTML +="<article></article>"
    }
    ModificaBanner(IdAlvo="",ListaBanner=[""],Index=0){
        let Banner =  document.getElementById(IdAlvo).getElementsByTagName("article")[0]
        Banner.innerHTML= ListaBanner[Index]
    }
} 

export default Banner