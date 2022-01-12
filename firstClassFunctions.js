/* function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable); */

  const sum = (number1, number2) => {
    return number1 + number2;
  };

  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);