longestWord = string => {
    let listOfWords = string.split(' ');
    let lengther = listOfWords[0].length;
    let lengthestWord = listOfWords[0];
    for (let i = 1; i < listOfWords.length; i += 1) {
        if (listOfWords[i].length > lengther) {
              lengther = listOfWords[i].length;
              lengthestWord = listOfWords[i];
        }
    }
    return lengthestWord;
}

console.log(longestWord('123 testando'));