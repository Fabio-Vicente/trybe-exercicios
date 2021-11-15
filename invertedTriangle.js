let n = 5;

for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = n; j > 0; j--) {
        if (j > i) {
            line += " ";
        }
        else {
            line += "*"
        }
    }
    console.log(line);
};