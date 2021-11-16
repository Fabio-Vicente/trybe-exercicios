function sum (a, b) {
    console.log(a + b);
};

function sub (a, b) {
    console.log(a - b);
};

function mult (a, b) {
    console.log(a*b);
};

function div (a, b) {
    console.log(a/b);
};

function mod (a, b) {
    console.log(a%b);
};

function major2 (a, b) {
    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    };
};

function major3 (a, b, c) {
    if (a > b && a >c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    };
};

function modularity (n) {
    if (n>0) {
        console.log("positive");
    }
    else if (n<0) {
        console.log("negative");
    }
    else {
        console.log("zero");
    };
};

function angles(a, b, c) {
    if (a + b + c === 180 && (a > 0 || b > 0 || c > 0)) {
        console.log(true);
    }
    else {
        console.log(false);
        console.log("It's not a triangule");
    };
};