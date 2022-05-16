campoNome = document.getElementById("nome");
labelNome = document.getElementById("label-nome");
divNome = document.getElementById("div-nome");
campoMensagem = document.getElementById("mensagem");
labelMensagem = document.getElementById("label-mensagem");

campoNome.addEventListener("keyup",(event)=>{

    if ((!validarNome(campoNome.value)) || (campoNome.value.length < 4) || (campoNome.value.length > 25)){
        labelNome.innerHTML = "* O nome deve conter de 4 a 25 caracteres. Números e caracteres especiais são inválidos."
    }
    else{
        labelNome.innerHTML = "Nome"
    }
})

campoMensagem.addEventListener("keyup",()=>{
    if(!validarMensagem(campoMensagem.value)){
        labelMensagem.innerHTML = "* Digite uma mensagem válida."
    }else{
        labelMensagem.innerHTML = "Mensagem"; 
    }
})

function validarNome(nome) {
    const re = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
    return re.test(nome);
}


function validarMensagem(mensagem){
    if(mensagem.length < 4){
        return false;
    }else{
        return true;
    }
}