const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const exam = (rightAnswers, studentAnswers, evaluator) => evaluator(rightAnswers, studentAnswers);

const evaluator = (rightAnswers, studentAnswers) => {
    let result = 0;
    for (let i = 0; i < studentAnswers.length; i += 1) {
        if (rightAnswers[i] === studentAnswers[i]) {
            result += 1;
        }
        else if (studentAnswers[i] === 'N.A') {
            result -= 0.5;
        }
        else {
            result -= 1;
        }
    }
    return result;
}

console.log(exam(RIGHT_ANSWERS, STUDENT_ANSWERS, evaluator));