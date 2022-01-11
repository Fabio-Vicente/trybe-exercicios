const sentence = 'Tryber x aqui!';
const skills = ['Raciocínio lógico', 'Comunicação', 'JavaScript', 'DOM', 'Resiliência'];

const insertWord = word => {
    const splited = sentence.split(' ');
    for (const key in splited) {
        if (splited[key] === 'x') {
            splited[key] = word
        }
    }
    return splited.join(' ');
}

const listSkills = sentence => `${sentence} Minhas cinco principais habilidades são:
${skills[0]}
${skills[1]}
${skills[2]}
${skills[3]}
${skills[4]}`

console.log(listSkills(insertWord('Fábio')));