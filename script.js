const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Paraná', 'Paraíba', 'Pará', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins'];
const inputStates = document.querySelector('select');
const submit = document.getElementById('submit');
const clear = document.getElementById('clear');
const form = document.getElementsByTagName('form')[0];
const answer = document.createElement('div');

function optionStates() {
    for (let i = 0; i < states.length; i += 1) {
        const option = document.createElement('option');
        option.value = states[i];
        option.innerText = states[i];
        inputStates.appendChild(option);
    }
}
function takeInformation(field) {
    if (field.tagName === 'BUTTON') {
        return true;
    }
    if (field.value === '') {
        return false;
    }
    const line = document.createElement('p');
    answer.appendChild(line);
    if (field.type === 'text') {
        line.innerText = field.value;
        return true; 
    }
    if (field.type === 'radio') {
        line.innerText = field.checked;
        return  true;
    }
    if (field.type === 'select-one') {
        line.innerText = field.value;
        return true;
    }
    if (field.type === 'textarea') {
        line.innerText = field.value;
        return true;
    }
}
function getInformations(field) {
    if (field.tagName === 'SELECT') {
        return takeInformation(field);
    }
    for (let i = 0; i < field.children.length; i += 1) {
        const filled = getInformations(field.children[i]);
        if (!filled) {
            return false;
        }
    }
    if (field.children.length === 0) {
        return takeInformation(field);
    }
    return true;
}
function verifyRadio() {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i += 1) {
        if (inputs[i].type === 'radio') {
            if (inputs[i].checked) {
                return true;
            }
        }
    }
    return false;
}
function verifyDate() {
    const date = form.children[1].children[3].children[0].value;
    const formatedDate = date.split('/');
    if (formatedDate.length !== 3) {
        return false;
    }
    if (parseInt(formatedDate[0]) > 31 || parseInt(formatedDate[0]) < 0) {
        return false
    }
    if (parseInt(formatedDate[1]) > 12 || parseInt(formatedDate[1]) < 0) {
        return false
    }
    return true;
}
function validate() {
    let validate;
    validate = verifyDate();
    if (!validate) {
        answer.innerHTML = 'A data não está no formato correto';
        return;
    } 
    validate = verifyRadio();
    if (!validate) {
        answer.innerHTML = 'Não foram marcadas as opções';
        return;
    }
    answer.innerHTML = '';
    validate = getInformations(form);
    if (!validate) {
        answer.innerHTML = 'Não foram preenchidos todos os campos';
        return;
    }
}
function displayInformations(submit) {
    submit.preventDefault();
    validate();
    document.body.appendChild(answer);
}
function clearFields(clear) {
    clear.preventDefault();
    answer.innerText = '';
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].value = '';
        inputs[i].checked = false;
    }
    document.querySelector('textarea').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', optionStates);
submit.onclick = displayInformations;
clear.onclick = clearFields;
