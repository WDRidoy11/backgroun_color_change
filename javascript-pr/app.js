let button = document.querySelector('button');
let body = document.querySelector('body')

function random(number) {
    return Math.ceil(Math.random() * (number + 1))
};

button.addEventListener('click', function() {
    const backgroundColorChange = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    console.log(backgroundColorChange);
    body.style.background = backgroundColorChange;
})