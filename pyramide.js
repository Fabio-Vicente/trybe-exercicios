let n = 5;

for (let i = 1; i <= n; i += 2) {
    let line = "";
    for (let j = 0; j < (n - i)/2; j++) {
        line += " ";
    };
    for (let j = 1; j <= i; j++) {
        line += "*";
    };
    for (let j = 0; j < (n - i)/2; j++) {
        line += " ";
    };
    console.log(line);
};