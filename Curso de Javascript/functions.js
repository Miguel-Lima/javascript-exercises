// Estrutura padrão de uma function
let corSite = "azul";

function resetaCor() {
    corSite = "";
}

resetaCor(); // chamando a function
console.log(corSite) // imprimindo o resultado

// Resetando uma unica cor em uma function

let corSite1 ="verde";

function mudarCor1(cor){ //parametro cor
    corSite1 = cor; // colocando ele com o valor do Let 
}
mudarCor1("vermelho"); // mudando a sua cor chamando a function
console.log(corSite1) // imprimindo resultado

// Mudando a cor utilizando o parâmetro para uma outra cor

let corSite2 = "branco";

function mudaCor2(cores, tonalidades){ // dois parametros
    corSite2 = cores + ' ' + tonalidades; // valor do corSite2
}

mudaCor2("verde", "claro") // valor
console.log(corSite2) // imprimindo



