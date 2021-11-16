//1
function verifyPalindrome(str) {
    let inv = str;
    inv = inv.split('').reverse().join('') // Retirado da página https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split#revertendo_uma_string_usando_split
    if (inv == str) {
        return true;
    }
    else {
        return false;
    };
};

//2
function majorInArray(array) {
    let major = array[0], key = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > major) {
            major = array[i];
            key = i;
        };
    };
    return key;
};

//3
function minorInArray(array) {
    let minor = array[0], key = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minor) {
            minor = array[i];
            key = i;
        };
    };
    return key;
};

//4
function largerString(array) {
    let larger = "";
    for (let name of array) {
        if (name.length > larger.length) {
            larger = name;
        };
    };
    return larger;
};

//5
function mostRepeated(array) {
    let repeat = 0, count = 0;
    let value;
    for (let element of array) {
        for (comp of array) {
            if (element === comp) {
                count++
            };
        };
        if (count > repeat) {
            value = element;
            repeat = count;
        };
        count = 0;
    };
    return value;
};

//6
function arithProgression(N) {
    if (N == 1) {
        return 1;
    }
    else {
        return N + arithProgression (N - 1);
    };
}

//7
function endOfString (fullWord, endOfWord) {
    flag = true;
    for (let i = 0; i < endOfWord.length;  i++) {
        if (endOfWord[i] != fullWord[fullWord.length - endOfWord.length + i]) {
            flag = false;
            break;
        };
    };
    return flag;
};