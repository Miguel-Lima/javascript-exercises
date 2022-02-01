const bestGuyInTheWorld = {
    name: 'Rodrigo Hilbert',
    birthplace: 'Orleans, Santa Catarina',
    city: 'São Paulo',
    jobs: ['Ator', 'Modelo', 'Cozinheiro', 'Caçador', 'Sniper', 'Piloto de Caça']
  };
  
  
  // Saída esperada: 'Rodrigo Hilbert de Orleans, Santa Catarina'
  
  const {birthplace, name: bestGuy, } = bestGuyInTheWorld;
  const birthplace = bestGuyInTheWorld.birthplace;
  
  const [ , jobOne, jobTwo, ...restJobs] = bestGuyInTheWorld.jobs;
  
  // console.log(job1);
  console.log(jobOne);
  console.log(jobTwo);
  console.log(restJobs);
  
  // console.log(`${bestGuy} de ${birthplace}`);