let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaAngulos = anguloA + anguloB + anguloC;

let angulosDaSoma = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosDaSoma) {
    if (somaAngulos === 180){
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo inválido.')
}