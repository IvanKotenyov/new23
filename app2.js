let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let button = document.querySelector('#calculate');
let result = document.querySelector('#result');

function get_name() {
    let weight = parseFloat(weight.value);
    let height = parseFloat(height.value);

    let bmi = weight / (height * height);
    result.textContent = `Ваш ИМТ: ${bmi.toFixed(2)}`;
}

button.addEventListener('click', get_name);
