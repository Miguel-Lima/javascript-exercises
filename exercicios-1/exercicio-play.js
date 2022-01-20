function countItems(arr) {
    let countMap = Object.create(null);
  
    for (const element of arr) {
   
      countMap[element] = (countMap[element] || 0) + 1;
    }
    
    return countMap;
  }
  
  const arr = ['1', '1', '2', '2', '2'];
  console.log(countItems(arr));