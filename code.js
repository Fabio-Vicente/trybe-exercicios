let coder = [
    {
      key: '1',
      value: 'a',
    },
    {
      key: '2',
      value: 'e',
    },
    {
      key: '3',
      value: 'i',
    },
    {
      key: '4',
      value: 'o',
    },
    {
      key: '5',
      value: 'u',
    },
  ];

/* function code(letter, cod, keyCod) {
    if (letter === cod) {
      return keyCod;
    }
    return '';
  } */

  const code = (letter, cod, keyCod) => letter === cod ? keyCod : '';
    
  /* function encode(str) {
    let coded = '';
    for (let i = 0; i < str.length; i += 1) {
      for (let j = 0; j < coder.length; j += 1) {
        coded += code(str[i], coder[j].value, coder[j].key);
      }
      if (coded.length <= i) {
        coded += str[i];
      }
    }
    return coded;
  } */

  const encode = str => {
    let coded = '';
    for (let i = 0; i < str.length; i += 1) {
      for (let j = 0; j < coder.length; j += 1) {
        coded += code(str[i], coder[j].value, coder[j].key);
      }
      if (coded.length <= i) {
        coded += str[i];
      }
    }
    return coded;
  }
  
  const decode = str => {
    let decoded = '';
    for (let i = 0; i < str.length; i += 1) {
      for (let j = 0; j < coder.length; j += 1) {
        decoded += code(str[i], coder[j].key, coder[j].value);
      }
      if (decoded.length <= i) {
        decoded += str[i];
      }
    }
    return decoded;
  }

  module.exports = {encode, decode};