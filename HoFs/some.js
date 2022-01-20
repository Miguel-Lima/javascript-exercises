const tattoos = [
    {estilo: 'Old School', valor: 250.00},
    {estilo: 'Realismo', valor: 800.00},
    {estilo: 'New School', valor: 300.00},
    {estilo: 'Flash', valor: 180.00}
];

const tattoosValoresMenor300 = tattoos.some ((tattoo) => {
    return  tattoo.valor < 350.00;
})

console.log(tattoosValoresMenor300)