// PreventDefault
window.addEventListener('load',start)

function start(){
    console.log('carregada')
    preventformSubmit()
}
function preventformSubmit(){
    function handleSubmit(e){
        e.preventDefault()
    }
    var form=document.querySelector('form')
    form.addEventListener('submit',handleSubmit)
}


// function myColor(){
//     var red = document.querySelector('#vermelho-rgb').value;
//     var green = document.querySelector('#verde-rgb').value;
//     var blue = document.querySelector('#azul-rgb').value;

// }





// // Range
// var RangeVermelho = document.querySelector('#vermelho-rgb');
// var RangeVerde = document.querySelector('#verde-rgb');
// var RangeAzul = document.querySelector('#azul-rgb');

// // Inputs TXT
// var InputVermelho = document.querySelector("#rgb-valor1");
// var InputVerde = document.querySelector("#rgb-valor2");
// var InputAzul = document.querySelector("#rgb-valor3");

// var vermelho = 0;
// var verde = 0;
// var azul = 0;


// // Funcão AlteraCor() para agrupar as outras funções
// function AlteraCor(){
//     function Mudanca(event){
//         switch (event.target.id){
//              case 'vermelho-rgb':
//                  InputVermelho.value = event.target.value;
//                  vermelho = event.target.value;
//              break;
//              case 'verde-rgb':
//                  InputVerde.value = event.target.value;
//                  verde = event.target.value;
//              break;
//              default: 
//              InputAzul.value = event.target.value;
//              azul = event.target.value;
//          }
//          document.getElementById("aparece-cor").style.backgroundColor = 'rgb($vermelho},{$verde},{$azul}'
//     }
//     function StartValores(){
//         RangeVermelho.value = 0;
//         RangeVerde.value = 0;
//         RangeAzul.value = 0;
//         InputVermelho.value = 0;
//         InputVerde.value = 0;
//         InputAzul.value = 0;        
//         InputVermelho.addEventListener('change', Mudanca )
//         InputVerde.addEventListener('change', Mudanca )
//         InputAzul.addEventListener('change', Mudanca)

//        document.getElementById("aparece-cor").style.backgroundColor = "black";
//     }
//      StartValores();
// } 