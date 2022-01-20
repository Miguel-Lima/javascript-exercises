const numbers = [2, 4, 6, 8, 10, 12];

// For tradicional

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i] * 5 )
}

// ForEach / mais robusto e limpo /
numbers.forEach((number) => {
    console.log(number * 6);
});
