const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
      return arrays.map(current => current.reduce((acc, curr) => acc + curr));
  }