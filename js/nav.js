
class navComponente{
    CriarNovoMenu(IdDoMenu,Elementos){
        let MenuEscolhido = document.getElementById(IdDoMenu)
        MenuEscolhido.innerHTML+="<ul id='Menu_02' ></ul>"
        let MenuAcresentar = document.getElementById("Menu_02")

        Elementos.forEach(MenuAdd => {
            MenuAcresentar.innerHTML+="<li><a href='#'>"+MenuAdd+"</a></li>"
        });

    }
    CriarBarraNavUsuario(IdDoMenu,Localizacao){
        let MenuEscolhido = document.getElementById(IdDoMenu)
        MenuEscolhido.innerHTML+="<div class='localNav'><h4>"+Localizacao+"</h4></div>"
    }
}

export default navComponente