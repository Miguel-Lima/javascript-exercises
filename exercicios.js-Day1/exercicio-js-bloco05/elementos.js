// // 1 Acessando o elemento elementoOndeVoceEsta
// let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// // 2 Acessando o pai a partir do elementoOndeVoceEsta
// let pai = elementoOndeVoceEsta.parentElement;
// // 2-1 Adicionando estilo ao elemento que acessei (pai)
// pai.style.color = 'blue';

// // 3 Acessando primeiroFilhoDoFilho e iserindo um texto;
// let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// primeiroFilhoDoFilho.innerText = 'Inserindo texto ao primeiroFilhoDoFilho';

// // 4 Acessando o primeiro filho a partir do pai
// let primeiroFilho = pai.firstElementChild;

// // 5 Acessando o primeiroFilho a partir do elementoOndeVoceEsta

// let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling

// // 6 Acessando 'Atenção!' a partir do elementoOndeVoceEsta

// let atencao = elementoOndeVoceEsta.nextSibling;

// // 7 Acessando o terceiroFilho a partir do elementoOndeVoceEsta

// let terceiroFilho = elementoOndeVoceEsta.nextElementSibling

// // 8 Acessando o terceiroFilho a partir do pai

// let terceiroFilho = pai.lastElementChild.previousElementSibling

// PART II

// 1 Criando um irmão para o elementoOndeVoceEsta;

let pai = document.createElement('pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

let elementoOndeVoceEsta = document.createElement('elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta)