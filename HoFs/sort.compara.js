const numbers = [8, 5, 9, 3, 1, 7, 4, 2, 6, 10]

function comparar(a, b) {
    return a - b;
}

const sortNumbers = numbers.sort(comparar);

console.log(sortNumbers)

// Sem a function como parâmetro no const sortNumbers, o valor '10' será reconhecido como 1.0 resultado: [
//   1, 10, 2, 3, 4,
//   5,  6, 7, 8, 9
// ]

// Com a function comparar no parâmetro de numbers.sort teremos assim a sequência corretar resultado [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]