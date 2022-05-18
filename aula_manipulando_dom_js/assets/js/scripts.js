function changeMode() {
    darkMode();
    changeTexto();
}



function darkMode() {
    botao.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode'); 
}

function changeTexto() {
    if(botao.classList.contains('dark-mode')) {
        botao.innerHTML = "Light Mode";
    }
    else {
        botao.innerHTML = "Dark Mode";
    }
    if(h1.classList.contains("dark-mode")) {
        h1.innerHTML = "Dark Mode ON";
    }
    else {
        h1.innerHTML = "Light Mode ON";
    }
}

const h1 = document.getElementById("page-title");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];
const botao = document.getElementById("mode-selector");
const texto = document.getElementById("page-title");

botao.addEventListener("click", changeMode)


