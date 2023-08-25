export {imagem_produtos, nome_produtos, valor_produtos, des_produtos};
import { name_products } from "./variaveis.js";

localStorage.setItem('imagem_produto', '');
localStorage.setItem('nome_produto', '');
localStorage.setItem('valor_produto', '');
localStorage.setItem('descricao_produto', '');

const containers = document.querySelectorAll('.container');
const precos = document.querySelectorAll('.costs');
const info_container = document.querySelectorAll('.info-container');

var imagem_produtos = ["<img id='img-product' src='assets/relogio.jpeg'>"];
var nome_produtos = ['<h1 class="nome-products">Smartwatch relógio inteligente T900 pro max</h1>'];
var valor_produtos = ['<span class="valor-products">R$ 82,00</span>'];
var des_produtos = ['<p class="des-products">Apresentamos o Smartwatch T900 Pro Max, o seu novo companheiro para o dia a dia. Além de receber notificações de aplicativos como WhatsApp e Facebook, ele também monitora suas atividades físicas, incluindo passos, calorias, batimentos cardíacos, oxigenação sanguínea, pressão arterial e qualidade do sono. Com alarme, cronômetro, e funções específicas para exercícios como pular corda, bike e corrida, o T900 Pro Max vai ajudar você a manter o ritmo e alcançar seus objetivos. Além disso, você pode trocar o tema do relógio ou até mesmo colocar uma foto pessoal.<br><br>O T900 Pro Max também permite tirar fotos no celular com apenas um balanço do relógio. Ele sincroniza com o aplicativo HryFine em Android e IOS pro iPhone, em português e outros idiomas. Resistente a respingos, ele é um aliado para atividades ao ar livre. O conteúdo da caixa inclui o relógio, pulseira, carregador USB e manual de instruções. Com design moderno e tela colorida de 1.3", o Smartwatch T900 Pro Max é compatível com sistemas operacionais Android e IOS, e sua versão BT é 4.0. A vibração com mensagem de notificação garante que você nunca perca uma informação importante, enquanto o lembrete sedentarismo e alarme ajudam a manter a rotina em dia. A resolução do visor é de 240x240 e sua bateria tem capacidade de 100mAh.<br><br>Adquira já o seu Smartwatch T900 Pro Max e descubra uma nova maneira de acompanhar sua rotina e cuidar da sua saúde!</p>'];

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

for (let num = 0; num < info_container.length; num++) {
    info_container[num].innerHTML = `${nome_produtos[num]}${valor_produtos[num]}`;
}
info_container[0].innerHTML += '<span id="frete">Frete grátis</span>';

let nome_products = document.querySelectorAll('.nome-products');
let valor_products = document.querySelectorAll('.valor-products');

for (let num = 0; num < nome_products.length; num++) {
    nome_products[num].classList.add('bt');
    valor_products[num].classList.add('costs');
}
