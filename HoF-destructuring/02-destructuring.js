const lion = {
    name: 'Panthera leo',
    commonName: 'Lion',
    weightRange: {
      min: 186.55,
      max: 225,
      measurementUnit: 'kg'
    }
  };
  
  const blueWhale = {
    name: 'Balaenoptera musculus',
    commonName: 'Blue whale',
    weightRange: {
      min: 45,
      max: 173,
      measurementUnit: 't'
    }
  };
  
  const polarBear = {
    name: 'Ursus maritimus',
    commonName: 'Polar Bear',
    weightRange: {
      min: 350,
      max: 700
    }
  };
  
  //Pate 3
  const animalDescription = ({ name, commonName, weightRange }) => {
    const { min, max, measurementUnit = 'kg'} = weightRange
    return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
  };
  
  //Parte 2
  // const animalDescription = ({ name, commonName, weightRange }) => {
  //   return `${commonName} (${name}) weighs around ${weightRange.min}-${weightRange.max} ${weightRange.measurementUnit}`;
  // };
  
  // Parte 1
  // const animalDescription = (animal) => {
  //   return `${animal.commonName} (${animal.name}) weighs around ${animal.weightRange.min}-${animal.weightRange.max} ${animal.weightRange.measurementUnit}`;
  // };
  
  console.log( animalDescription(lion) );
  console.log( animalDescription(blueWhale) );
  console.log( animalDescription(polarBear) );