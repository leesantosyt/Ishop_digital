const name_page = document.getElementById('name-page');
const products = document.getElementsByClassName('bt');
const containers = document.getElementsByClassName('container');
const no_results_title = document.getElementById('no-results-title');
const no_results_try = document.getElementsByClassName('no-results-try');
const container_no_results = document.getElementById('sem-resultados');
const pesquisa = localStorage.getItem('pesquisa');
const precos = document.querySelectorAll('.costs');

let numero = 0;

import {imagem_produtos, nome_produtos, valor_produtos, des_produtos} from "./script.js";
import { name_products } from "./variaveis.js";

name_page.innerHTML = `Exibindo resultados para"${localStorage.getItem('pesquisa')}"`;

if (localStorage.getItem('pesquisa') == '') {
    name_page.innerHTML = 'Produtos de Ishop digital';
}

for (let num = 0; num < precos.length; num++) {
    precos[num].innerHTML = valor_produtos[num];
}

for (let num = 0; num < containers.length; num++) {
    if (!products[num].innerHTML.toLowerCase().includes(pesquisa)) {
        containers[num].style.display = "none";
    }
}
console.log(container_no_results);
for (let num = 0; num < containers.length; num++) {
    if (containers[num].style.display == "none") {
        numero++;
    }
    if (numero == containers.length) {
        no_results_title.style.display = "block";
        for (let num = 0; num < no_results_try.length; num++) {
            no_results_try[num].style.display = "list-item"; 
            container_no_results.style.display = "block";
        }
        no_results_title.innerHTML = 'Desculpe, não foi encontrado resultados para a sua pesquisa';
        no_results_try[0].innerHTML = 'Revise se a palavra foi escrita corretamente';
        no_results_try[1].innerHTML = 'Utilize menos palavras';
    }else{
        for (let num = 0; num < no_results_try.length; num++) {
            no_results_try[num].style.display = "none"; 
        }
    }
    if (num == containers.length - 1) {
        numero = 0;
    }
}
for (let num = 0; num < containers.length; num++) {
    containers[num].onclick = function() {
        localStorage.setItem('imagem_produto', imagem_produtos[num]);
        localStorage.setItem('nome_produto', nome_produtos[num]);
        localStorage.setItem('valor_produto', valor_produtos[num]);
        localStorage.setItem('descricao_produto', des_produtos[num]);
        localStorage.setItem('name_product', name_products[num]);
        window.location.assign('produto.html');
    }
}
