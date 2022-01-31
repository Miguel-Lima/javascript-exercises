const numbers = [2, 3, 4, 6, 7, 12, 24];

const sumWithReduce = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue );

console.log(sumWithReduce)

// Somar os números do array com reduce