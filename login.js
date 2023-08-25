const email = document.getElementById('text');
const senha = document.getElementById('senha');
const entrar = document.getElementById('button');
const error = document.getElementById('error');

entrar.onclick = function() {
    verificar();
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificar();
    }
});
function verificar() {
    if(email.value == 'leandro.santost5i@gmail.com' && senha.value == 'T1radentes07') {
        localStorage.setItem('login', 'true');
        window.location.replace('config.html');
    }else{
        error.innerHTML = "Usuário ou senha incorreto.";
        console.log("Algo deu errado");
    }
}
