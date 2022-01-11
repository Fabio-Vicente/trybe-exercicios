const button = document.querySelector('button');
const p = document.querySelector('p');

button.onclick = () => {
    p.innerText = parseInt(p.innerText, 10) + 1;
}