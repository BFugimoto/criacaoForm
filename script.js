let nome = document.getElementById("nome");
let email = document.getElementById("email");
let msg = document.getElementById("mensagem");
let alertNome = document.getElementById("alertNome");
let alertEmail = document.getElementById("alertEmail");
let alertMsg = document.getElementById("alertMsg");

nome.addEventListener("blur", () => {
    if(nome.value.length == ""){
        alertNome.textContent = "Campo obrigatório!";
        
    }else{
        alertNome.textContent = "";
    }
});

nome.addEventListener("focus", () => {
    alertNome.textContent = "";
});

email.addEventListener("blur", () => {
    if(email.value.length == ""){
        alertEmail.textContent = "Campo obrigatório!";
    }else if(email.value == "^[^\s@]+@[^\s@]+\.[^\s@]+$"){
        alertEmail.textContent = "O e-mail deverá conter @";
    }else{
        alertEmail.textContent = "";
    }
});

email.addEventListener("focus", () => {
    alertEmail.textContent = "";
});

msg.addEventListener("blur", () => {
    if(msg.value.length == ""){
        alertMsg.textContent = "Campo obrigatório!";
    }else{
        alertMsg.textContent = "";
    }
});

msg.addEventListener("focus", () => {
    alertMsg.textContent = "";
});

let botaoEnviar = document.getElementById("botaoEnviar");

botaoEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    if(nome.value.length == "" && email.value.length == "" && msg.value.length == ""){
        alert("Preencha os campos em branco!");
    }else if(nome.value.length > 0 && email.value.length > 0 && msg.value.length > 0){
        alert("Formulário enviado!");
    }
});

let caracter = document.getElementById("caracter");

function numCaracter(){
    caracter.innerHTML = msg.value.length;
}