//1
function romanNumerals (string) {
    function cast (char) {
        switch (char) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            case 'O':
                return 0;
        };
    };
    string += "O";
    let test, previous, number = 0;
    for (let i = 1; i < string.length; i++) {
        test = cast(string[i]);
        previous = cast(string[i - 1]);
        if (test > previous) {
            number += test - previous;
            i++;
        }
        else {
            number += previous;
        };
    }
    return number;
};

//2
function arrayOfNumbers (vector) {
    newArray = [];
    for (const object of vector) {
        for (const number of object) {
            if (number%2 == 0) {
                newArray.push(number);
            };
        };
    };
    return newArray;
};

//3
function summarizeFruits (basket) {
    let summary = [];
    for (const item of basket) {
        let flag = false;
        for (const fruit in summary) {
            if (fruit == item) {
                summary[item]++;
                flag = true;
                break;
            }
        }
        if (!flag) {
            summary[item] = 1;
        };
    };
    return summary;
};

//4
let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  console.log("O morador do bloco 2 de nome", moradores.blocoDois[moradores.blocoDois.length - 1].nome, moradores.blocoDois[moradores.blocoDois.length - 1].sobrenome, "mora no", moradores.blocoDois[moradores.blocoDois.length - 1].andar + "º andar, apartamento", moradores.blocoDois[moradores.blocoDois.length - 1].apartamento);

  for (let i = 0; i < moradores.blocoUm.length; i++) {
      console.log(moradores.blocoUm[i].nome, moradores.blocoUm[i].sobrenome);
  };

  for (let i = 0; i < moradores.blocoDois.length; i++) {
    console.log(moradores.blocoDois[i].nome, moradores.blocoDois[i].sobrenome);
};