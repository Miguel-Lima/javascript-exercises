const players = [
    { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
    { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
    { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
    { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
  ];
  
  const newPlayers = players.reduce( (accumulator, currentValue) => {
    accumulator[currentValue.fullName] = currentValue.email;
    return accumulator;
  } , {} )
  
  
  console.log(newPlayers);