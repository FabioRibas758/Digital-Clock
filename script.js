function atualizarHora(){

var display = document.querySelector('.Display');
var horaAtual = new Date();
var hora = 
  corrigirHora (horaAtual.getHours()) + ':' + corrigirHora(horaAtual.getMinutes())
   + ':'+ corrigirHora(horaAtual.getSeconds());

display.textContent = hora;

}

function corrigirHora(numero){
    if(numero < 10){
        numero = '0' + numero;
    }
    return numero;
}



setInterval(atualizarHora, 1000);

console.log(horaAtual)