/* const factorial = n => {
    for (let i = n; i > 2; i -= 1) {
        n *= i - 1;
    }
    return n
} */

const factorial = n => n < 2 ? 1 : n*factorial(n - 1);

console.log(factorial(5));