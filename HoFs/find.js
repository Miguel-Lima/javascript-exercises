const users = [
    {firstName: 'Ana', lastName: 'Oliver', canDrive: true},
    {firstName: 'Miguel', lastName: 'Oliver', canDrive: true},
    {firstName: 'Ivone', lastName: 'Oliver', canDrive: false},
    {firstName: 'Juarez', lastName: 'Oliver', canDrive: true},
];


const found = users.find ((user) => {
    return user.canDrive === false;
});

console.log(`${found.firstName} ${found.lastName}, não pode dirigir!`)

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.