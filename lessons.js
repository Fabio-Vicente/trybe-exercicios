const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const insertTurno = (lesson, key = 'turno', turno) => {
    lesson[key] = turno;
}

insertTurno(lesson2, 'turno', 'noite');

const listKeys = obj => Object.keys(obj);

const objLength = obj => Object.keys(obj).length;

const listValues = obj => Object.values(obj);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

allStudents = allLessons => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
    for (const entry of entries) {
        if (entry[0] === key && entry[1] === value) {
            return true;
        }
    }
    return false
}

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// Bônus

const mathStudents = allLessons => {
    let studentsNumber = 0;
    for (const key in allLessons) {
        if (allLessons[key].materia === 'Matemática') {
            studentsNumber += allLessons[key].numeroEstudantes;
        }
    }
    return studentsNumber;
}

const createReport = (allLessons, teacher) => {
    const resume = {
        professor: teacher,
        aulas: [],
        estudantes: 0
    }
    for (const key in allLessons) {
        if (allLessons[key].professor === teacher) {
            resume.aulas.push(allLessons[key].materia);
            resume.estudantes += allLessons[key].numeroEstudantes;
        }
    }
    return resume;
}

console.log(createReport(allLessons, 'Maria Clara'));