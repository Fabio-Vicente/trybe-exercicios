let n = 21;
let lineTop = "", lineBottom = "";

// 1ª linha
for (let i = 0; i < (n - 1)/2 - 0.5; i++) {
    lineTop += " ";
};
lineTop += "*";
for (let i = 0; i < (n - 1)/2 - 0.5; i++) {
    lineTop += " ";
};
console.log(lineTop);
// Linhas do meio
for (let i = 3; i <= n - 2; i += 2) {
    let line = "";
    for (let j = 1; j <= (n - i)/2; j++) {
        line += " ";
    };
    line += "*";
    for (let j = 1; j <= i - 2; j++) {
        line += " ";
    };
    line += "*";
    for (let j = 1; j <= (n - i)/2; j++) {
        line += " ";
    };
    console.log(line);
};
//Última linha
if (n%2 == 1) {
    for (let i = 0; i < n; i++) {
        lineBottom += "*"
    }
}
else {
    for (let i = 0; i < n - 1; i++) {
        lineBottom += "*"
    }
}
console.log(lineBottom);