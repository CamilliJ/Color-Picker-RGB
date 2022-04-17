/*
window.addEventListener('load', start);

//Escopo global - Captura os elementos
inputRed = document.querySelector('#inputRed');
inputGreen = document.querySelector('#inputGreen');
inputBlue = document.querySelector('#inputBlue');

inputTxtRed = document.querySelector('#inputTxtRed');
inputTxtGreen = document.querySelector('#inputTxtGreen');
inputTxtBlue = document.querySelector('#inputTxtBlue');
console.log(inputRed)
var red = 0, green = 0, blue = 0;

var divCor = document.querySelector('#aparece-cor');

function start() {
  preventFormSubmit();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
  alterColor();

}
function alterColor() {
  function handleChange(event) {
    switch (event.target.id) {
      case 'inputRed':
        inputTxtRed.value = event.target.value;
        red = event.target.value;
        break;
      case 'inputGreen':
        inputTxtGreen.value = event.target.value;
        green = event.target.value;
        break;
      default:
        inputTxtBlue.value = event.target.value;
        blue = event.target.value;
        break;
    }
    divCor.style.backgroundColor = `rgb(${red},${green},${blue})`
  }
  function startValues() {
    inputRed.value = 0;
    inputGreen.value = 0;
    inputBlue.value = 0;

    inputTxtRed.value = 0;
    inputTxtGreen.value = 0;
    inputTxtBlue.value = 0;

    inputRed.addEventListener('change', handleChange);
    inputGreen.addEventListener('change', handleChange);
    inputBlue.addEventListener('change', handleChange);

    divCor.style.backgroundColor = 'black'
  }
  startValues();
}



*/


window.addEventListener('load', set)

function set(){
    var color = 'rgb(0,0,0)';
}

function myCor(){
    var red = document.getElementById('inputRed').value;
    var green = document.getElementById('inputGreen').value;
    var blue = document.getElementById('inputBlue').value;

    var cor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.body.style.backgroundColor = cor;

    document.getElementById('inputTxtRed').value = red;
    document.getElementById('inputTxtGreen').value = green;
    document.getElementById('inputTxtBlue').value = blue;
}

document.getElementById('inputRed').addEventListener('input', myCor);
document.getElementById('inputGreen').addEventListener('input', myCor);
document.getElementById('inputBlue').addEventListener('input', myCor);

