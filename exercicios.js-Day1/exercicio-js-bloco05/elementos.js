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

let pai = document.getElementById('pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);
console.log(irmaoElementoOndeVoceEsta)

// 2 Criando um filho para elementoOndeVoceEsta

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta)
console.log(filhoElementoOndeVoceEsta)

// 3 Criando um filho para primeiroFilhoDoFilho

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);
console.log(filhoPrimeiroFilhoDoFilho)

// 4 Acessando a partir do filhoPrimeiroFilhoDoFilho o terceiroFilho
let terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);

// PART III

// Remova todos os elementos filhos do paiDoPai, exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho

const pai = document.getElementById('pai');

    for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
      const currentChildren = pai.childNodes[index];
      if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
      }
    }

    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();