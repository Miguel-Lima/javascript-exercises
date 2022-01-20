
  
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// for (const value of letters) {
//   console.log(value);
// }

// for (let index = 0; index < letters.length; index += 1) {
//   console.log(letters[index]);
// }

letters.forEach((letter, index, arr) => console.log(`${index}: ${letter} ---> ${arr}`))

// Este código com forEach trás a posição dos valores do array em seguida das letras e no final todo o seu array completo.