
class navComponente{
    CriarNovoMenu(IdDoMenu,Elementos){
        let MenuEscolhido = document.getElementById(IdDoMenu)
        MenuEscolhido.innerHTML+="<ul> <li><a href='#'>Home</a></li> <li><a href='#'>Produtos</a></li> <ul>"
    }
    CriarBarraNavUsuario(IdDoMenu,Localizacao){
        let MenuEscolhido = document.getElementById(IdDoMenu)
        MenuEscolhido.innerHTML+="<div class='localNav'>"+Localizacao+"</div>"
    }
}

export default navComponente