const numbers = [2, 3, 4, 6, 7, 12, 24];

const sumEvenNumber = numbers
  .filter( (number) => number % 2 !== 0 )
  .reduce( (accumulator, currentValue) => accumulator + currentValue )

  console.log(sumEvenNumber)

  // Somar os números ímpares do array com reduce
