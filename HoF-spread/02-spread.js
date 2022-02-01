const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

//Usando spread operator
const books = [...horrorBooks, ...scifiBooks]

console.table(books);

// Usando forEach
// let awesomeBooks = [];

// horrorBooks.forEach( (horrorBook) => awesomeBooks.push(horrorBook));

// scifiBooks.forEach( (scifiBook) => awesomeBooks.push(scifiBook) );

// Usando for
// for (let index = 0; index < horrorBooks.length; index += 1) {
//   awesomeBooks.push(horrorBooks[index]);
// }

// for (let index = 0; index < scifiBooks.length; index +=1) {
//   awesomeBooks.push(scifiBooks[index]);
// }

// console.log(awesomeBooks)