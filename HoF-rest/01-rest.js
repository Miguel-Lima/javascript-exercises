const sumAllParams = (...params) => {
    // console.log(params)
    return params.reduce( (acc, curr) => {
      return acc + curr;
    } )
  }

  console.log( sumAllParams(1, 2) );
  console.log( sumAllParams(1, 2, 3) );
  console.log( sumAllParams(1, 2, 3, 4) );