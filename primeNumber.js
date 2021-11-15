let n = 18;
let prime = true;

for (let i = 2; i < n; i++) {
    if (n%i == 0) {
        prime = false;
        break;
    };  
};

console.log(prime);