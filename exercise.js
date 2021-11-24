window.onload = init;

function init() {
    if (localStorage.bgColor === undefined) {
        localStorage.setItem('bgColor',''); 
    }
    if (localStorage.color === undefined) {
        localStorage.setItem('color',''); 
    }
    if (localStorage.fontSize === undefined) {
        localStorage.setItem('fontSize',''); 
    }
    if (localStorage.fontHeight === undefined) {
        localStorage.setItem('fontHeight',''); 
    }
    if (localStorage.fontFamily === undefined) {
        localStorage.setItem('fontFamily',''); 
    }

    document.body.style.backgroundColor = localStorage.getItem('bgColor');
    document.body.style.color = localStorage.getItem('color');
    document.body.style.fontSize = localStorage.getItem('fontSize');
    document.body.style.fontHeight = localStorage.getItem('fontHeight');
    document.body.style.fontFamily = localStorage.getItem('fontFamily');
}

const bgColorInput = document.getElementById('bg-color');
const colorInput = document.getElementById('color');
const fontSizeInput = document.getElementById('font-size');
const fontHeightInput = document.getElementById('font-height');
const fontFamilyInput = document.getElementById('font-family');

const bgColorButton = document.getElementById('bgcolor-button')
const colorButton = document.getElementById('color-button')
const fontSizeButton = document.getElementById('fsize-button')
const fontHeightButton = document.getElementById('fheight-button')
const fontFamilyButton = document.getElementById('ffamily-button')
const defaultButton = document.getElementById('default')

function bgColor(event) {
    if (event.type === 'click' || event.key === 'Enter') {
        localStorage.setItem('bgColor', bgColorInput.value);
        document.body.style.backgroundColor = localStorage.getItem('bgColor');
        bgColorInput.value = '';
    }
}

function color(event) {
    if (event.type === 'click' || event.key === 'Enter') {
        localStorage.setItem('color', colorInput.value);
        document.body.style.color = localStorage.getItem('color');
        colorInput.value = '';
    }
}

function fontSize(event) {
    if (event.type === 'click' || event.key === 'Enter') {
        localStorage.setItem('fontSize', fontSizeInput.value + 'px');
        document.body.style.fontSize = localStorage.getItem('fontSize');
        fontSizeInput.value = '';
    }
}

function fontHeight(event) {
    if (event.type === 'click' || event.key === 'Enter') {
        localStorage.setItem('fontHeight', fontHeightInput.value + 'px');
        document.body.style.lineHeight = localStorage.getItem('fontHeight');
        fontHeightInput.value = '';
    }
}

function fontFamily(event) {
    if (event.type === 'click' || event.key === 'Enter') {
        localStorage.setItem('fontFamily', fontFamilyInput.value);
        document.body.style.fontFamily = localStorage.getItem('fontFamily');
        fontFamilyInput.value = '';
    }
}

function reinit() {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.body.style.fontSize = '';
    document.body.style.fontHeight = '';
    document.body.style.fontFamily = '';
}

bgColorButton.addEventListener('click', bgColor);
bgColorInput.addEventListener('keyup', bgColor);

colorButton.addEventListener('click', color);
colorInput.addEventListener('keyup', color);

fontSizeButton.addEventListener('click', fontSize);
fontSizeInput.addEventListener('keyup', fontSize);

fontHeightButton.addEventListener('click', fontHeight);
fontHeightInput.addEventListener('keyup', fontHeight);

fontFamilyButton.addEventListener('click', fontFamily);
fontFamilyInput.addEventListener('keyup', fontFamily);

defaultButton.addEventListener('click', reinit);