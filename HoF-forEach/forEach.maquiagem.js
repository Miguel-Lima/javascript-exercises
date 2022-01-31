const maquiagens = [
    {produto: 'Batom', price: 12.20},
    {produto: 'Lápis de olho', price: 21.50},
    {produto: 'Rimel', price: 7.99},
    {produto: 'Skincare', price: 29.30}
];

// For tradicional

for (let i = 0; i < maquiagens.length; i += 1) {
    console.log(`O produto ${maquiagens[i].produto} custa R$:${maquiagens[i].price}`)
}

// ForEach

maquiagens.forEach( (maquiagem) => {
    console.log(`O produduto ${maquiagem.produto} custa R$ ${maquiagem.price}`)
})
