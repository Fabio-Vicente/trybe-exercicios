function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

//Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
    for(let i = 0; i < dezDaysList.length; i += 1) {
        const li = document.createElement('li');
        li.innerText = dezDaysList[i];
        li.className = 'day';
        switch (dezDaysList[i]) {
            case 25:
                li.classList.add('friday');
            case 24:
            case 31:
                li.classList.add('holiday');
                break
            case 4:
            case 11:
            case 18:
            case 25:
                li.classList.add('friday');
        }
        days.appendChild(li);
    }
}

createDays();

//Exercício 2
function createButtonHoliday(str) {
    const btn = document.createElement('button');
    btn.innerText = str;
    btn.id = 'btn-holiday';
    document.querySelector('.buttons-container').appendChild(btn);
}

createButtonHoliday('Feriados');

//Exercício 3
const holydays = document.getElementsByClassName('holiday');

function holidayColor() {
    if (holydays[0].style.backgroundColor === 'yellow') {
        for(let i = 0; i < holydays.length; i += 1) {
            holydays[i].style.backgroundColor = 'rgb(238, 238, 238)';
        }
    } else {
        for(let i = 0; i < holydays.length; i += 1) {
            holydays[i].style.backgroundColor = 'yellow';
        }
    }
}

const buttonHoliday = document.getElementById('btn-holiday');
buttonHoliday.addEventListener('click', holidayColor);

//Exercício 4
function createButtonFriday(str) {
    const btn = document.createElement('button');
    btn.innerText = str;
    btn.id = 'btn-friday';
    document.querySelector('.buttons-container').appendChild(btn);
}

createButtonFriday('Sexta-feira');

//Exercício 5
const fridays = document.getElementsByClassName('friday');

function fridayText() {
    if (fridays[0].innerText === 'Sexta!') {
        for(let i = 0; i < fridays.length; i += 1) {
            fridays[i].innerText = parseInt(days.children[4 + i*7].innerText) + 1;
        }
    } else {
        for(let i = 0; i < fridays.length; i += 1) {
            fridays[i].innerText = 'Sexta!';
        }
    }
}

const buttonFriday = document.getElementById('btn-friday');
buttonFriday.addEventListener('click', fridayText);

//Exercício 6
function zoomInDay(event) {
    event.target.style.fontSize = '40px'
}

function zoomOutDay(event) {
    event.target.style.fontSize = '20px';
}

for (let i = 0; i < days.children.length; i += 1) {
    days.children[i].addEventListener('mouseover', zoomInDay);
    days.children[i].addEventListener('mouseout', zoomOutDay);
}

//Exercício 7
const tasks = document.querySelector('.my-tasks');

function createTask (str) {
    const task = document.createElement('span');
    task.innerText = str;
    tasks.appendChild(task);
}

createTask('Estudar');

//Exercício 8
function createLegend(color) {
    const div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = color;
    tasks.appendChild(div);
}

createLegend('blue');

//Exercício 9
function selectTask(event) {
    if (event.target.classList.contains('selected')) {
        event.target.classList.remove('selected');
    } else {
        event.target.classList.add('selected');
    }
}

for (let i = 2; i < tasks.children.length; i += 2) {
    tasks.children[i].addEventListener('click', selectTask);
}

//Exercício 10
function assignLegend(event) {
    if (event.target.style.color === '') {
        for (let i = 2; i < tasks.children.length; i += 1) {
            if (tasks.children[i].classList.contains('selected')) {
                event.target.style.color = tasks.children[i].style.backgroundColor;
                break;
            }
        }
    }
    else {
        event.target.style.color = '';
    }
}

for (let i = 0; i < days.children.length; i += 1) {
    days.children[i].addEventListener('click', assignLegend);
}

//Bônus
const input = document.getElementById('task-input');
function addCommitment(event) {
    if (event.type === 'click' || event.key === 'Enter') {
        if (input.value === '') {
            alert("Insira um compromisso!");
        }
        else {
            const li = document.createElement('li')
            li.innerText = input.value;
            document.querySelector('.task-list').appendChild(li);
        }
    }
}

const buttonCommitment = document.getElementById('btn-add');
buttonCommitment.addEventListener('click', addCommitment);
input.addEventListener('keyup', addCommitment);