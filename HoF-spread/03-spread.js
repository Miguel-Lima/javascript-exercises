const points = [1.0, 2.2, -6.6, 9.0];
const otherPoints = [0.1, 3.5, -99.6];

printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;

console.log( printPointCoordinates(...points));
console.log( printPointCoordinates(...otherPoints))