const cities = [
    { state: 'AM', name: 'Manaus', region: 'N'}, //[0]
    { state: 'PA', name: 'Belém', region: 'N'},   //[1]
    { state: 'TO', name: 'Porto Nacional', region: 'N'},  //[2]
    { state: 'MG', name: 'Nepomuceno', region: 'SE'},
    { state: 'BA', name: 'Cachoeira', region: 'NE'},
    { state: 'PR', name: 'Curitiba', region: 'S'},
    { state: 'SP', name: 'Hortolândia', region: 'SE'},
    { state: 'RN', name: 'Touros', region: 'NE'},
    { state: 'CE', name: 'Jericoacoara', region: 'NE'},
    { state: 'TO', name: 'Três Pedras', region: 'N'},
    { state: 'MG', name: 'João Pinheiro', region: 'SE'}
  ];
  

  console.log('As cidades que ficam na região Nordeste são: ');

  const citiesNe = cities.filter ((city) => city.region === 'NE')

console.table(citiesNe);