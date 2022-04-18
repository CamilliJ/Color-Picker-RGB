// PreventDefault
window.addEventListener('load',start)

function start(){
    console.log('carregada')
    
}
function preventformSubmit(){
    function handleSubmit(e){
        e.preventDefault()
    }
    var form=document.querySelector('form')
    form.addEventListener('submit',handleSubmit)
}



window.addEventListener('load', set)

function set(){
    preventformSubmit()
    var cor = 'rgb(0,0,0)';
    document.getElementById('inputTxtRed').value = 255;
    document.getElementById('inputTxtGreen').value = 255;
    document.getElementById('inputTxtBlue').value = 255;

    document.getElementById('inputRed').value = 255;
    document.getElementById('inputGreen').value =255;
    document.getElementById('inputBlue').value = 255;

    
}

function myCor(){
    var red = document.getElementById('inputRed').value;
    var green = document.getElementById('inputGreen').value;
    var blue = document.getElementById('inputBlue').value;

    var cor = 'RGB(' + red + ',' + green + ',' + blue + ')';

    document.body.style.backgroundColor = cor;

    document.getElementById('inputTxtRed').value = red;
    document.getElementById('inputTxtGreen').value = green;
    document.getElementById('inputTxtBlue').value = blue;

    document.getElementById('rgb-text').innerHTML = cor;
}

document.getElementById('inputRed').addEventListener('input', myCor);
document.getElementById('inputGreen').addEventListener('input', myCor);
document.getElementById('inputBlue').addEventListener('input', myCor);

