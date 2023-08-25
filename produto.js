const imagem_produto = document.getElementById('topo');
const descricao_produto = document.getElementById('descricao-produto');
const name_page = document.getElementById('name-page');
const detalhes = document.getElementById('detalhes');
const description = document.getElementById('description');

name_page.innerHTML = `${localStorage.getItem('name_product')} - Ishop`;
description.innerHTML = localStorage.getItem('descricao_produto');

topo.innerHTML = `${localStorage.getItem('nome_produto')}${localStorage.getItem('imagem_produto')}${localStorage.getItem('valor_produto')}${topo.innerHTML}`;

document.querySelector('.nome-products').id = 'nome-produto';
document.querySelector('.valor-products').id = 'valor-produto';
document.querySelector('.des-products').id = 'descricao-produto';

const bt_comprar = document.getElementById('comprar');
bt_comprar.onclick = function() {
  window.location.assign('https://instagram.com/ishop_digital')
}

