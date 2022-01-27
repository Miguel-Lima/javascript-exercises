// Function não devolve nada
function undefined (){
    console.log('Não devolve nada')
}
undefined()


// Cálculo ou operação retornando algo


function calculo(valor){ // parametro valor
    return valor* 10; // retorne o parametro da function * 10
}

let resultado = calculo(100); // variavel com o valor nome da function + 100

console.log(resultado)