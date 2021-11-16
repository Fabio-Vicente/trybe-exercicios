//1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

  console.log("Bem vinda,", info.personagem);

//2
  info.recorrente = "Sim";

  console.log(info);

//3
for (key in info) {
    console.log(key);
};

//4
for (key in info) {
    console.log(info[key]);
};

//5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (key in info) {
    if (key != 'recorrente') {
        console.log(info[key], "e", info2[key]);
    }
    else {
        console.log("Ambos recorrentes");
    }
};

//6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", leitor.livrosFavoritos[0].titulo);

//7
leitor.livrosFavoritos.push(
    {     
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
    }
);

//8
console.log(leitor.nome, "tem", leitor.livrosFavoritos.length, "livros favoritos");