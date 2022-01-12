const checkNumber = (num1, num2) => num1 === num2;

const raffle = (number, checkNumber) => {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    const check = checkNumber(number, randomNum);
    if (check) {
        return 'Parabéns você ganhou';
    } else {
        return 'Tente novamente';
    }
}

console.log(raffle(3, checkNumber));