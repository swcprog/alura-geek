function logar(senha, email) {
    let password = document.querySelector("#login__iniciarSessao--senha");
    let user = document.querySelector("#login__iniciarSessao--email");
    let estaLogado = false;
    if ((password.value == senha) && (user.value == email)) {
        estaLogado = true;
        window.location.assign(`index.html?${estaLogado}`);
    }else{
        password.classList.add("erro")
    }
    console.log(estaLogado)
    return estaLogado;
}

const botaoEntrar = document.querySelector("#login__iniciarSessao--btn");
botaoEntrar.addEventListener('click',()=>{
    logar(1234, "teste@alura.com")
})