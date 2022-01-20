const users = [
    {firstName: 'Ana', lastName: 'Oliver', canDrive: true},
    {firstName: 'Miguel', lastName: 'Oliver', canDrive: true},
    {firstName: 'Ivone', lastName: 'Oliver', canDrive: false},
    {firstName: 'Juarez', lastName: 'Oliver', canDrive: true},
];

const everyCanDrive = users.every ( (user) => {
    return user.canDrive === true;
});

console.log(everyCanDrive);

// Se todos forem verdadeiro a função HoF 'Every' trará o resultado booleano como false. Se todos forem true o resultado será true.