const logo = document.getElementById('logo');
const container_search = document.getElementById('pesquisa');
const bt_search = document.getElementById('bt-pesquisa');
const bt_produto = document.getElementById('bt-produtos');
const products = document.querySelectorAll('.bt');
const list_tent = document.getElementById('tentativas-pesquisa');
const tent = document.querySelectorAll('.item-tent');

import {name_products} from "./variaveis.js";

var tentativa_pesquisa;

logo.onclick = function() {
    window.location.assign('index.html');
}

bt_search.onclick = function() {
    if (container_search.value != '') {
        irProdutos();
    }
}

document.addEventListener("keydown", function(event) {
    if (container_search.value != '' && event.key === "Enter") {
        irProdutos();
    }
});
container_search.addEventListener("focus", function(event) {
    if (container_search.value != '') {
        list_tent.style.display = "block";
    }
})

document.addEventListener("mousedown", (event) => {
    if (!container_search.contains(event.target) && !list_tent.contains(event.target)) {
        list_tent.style.display = "none";
    }
})
document.addEventListener("keyup", function(event) {
    for (let i = 0; i < name_products.length; i++) {
        if (name_products[i].toLowerCase().includes(container_search.value.toLowerCase()) && container_search.value != '') {
            tentativa_pesquisa = name_products[i];
            tent[i].innerHTML = `&#x1F50E; ${tentativa_pesquisa}`;
            tent[i].style.display = "block";
        }else{
            tent[i].style.display = "none";
        }
        if (container_search.value != '') {
            list_tent.style.display = "block";
        }else{
            list_tent.style.display = "none";
        }
    }
});
for (let i = 0; i < tent.length; i++) {
    tent[i].onclick = function() {
        container_search.value = tent[i].innerHTML.slice(3, tent[i].length);
        irProdutos();
    }
}

bt_produto.onclick = function() {
    localStorage.setItem('pesquisa', '')
    window.location.assign('pesquisa.html');
}

function irProdutos() {
    container_search.value = container_search.value.toLowerCase();
    localStorage.setItem('pesquisa', container_search.value)
    window.location.assign('pesquisa.html');
}
