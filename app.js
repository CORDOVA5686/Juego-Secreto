//En este código a diferencia del ejercicio 1.0 se está haciendo lo posible
//para poder reducir el código y nos prevee de errores futuros para que no
//regresemos tantos pasos para "corregir". De igual manera funciona como
//parámetro, y de qué nos sirve un parámetro? para poder reutilizarla varias veces 

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

 function verificarIntento() {
   //Lo que hicimos dentro de esta función fue verificar que el intento del usuario
   //sea bien leído en la consola, conectamos con el archivo .html mediante 
   // el "getElementById" y con terminación ".value"
   let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
   
  
   
   if (numeroDeUsuario === numeroSecreto) {
       asignarTextoElemento('p', `¡Felicidades! Acertaste el número en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')} :)`);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      //El usuario no acertó.
      if (numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento('p', '¡Tú puedes! El número es menor.');
      } else {
         asignarTextoElemento('p', '¡Ya casi! El número es mayor.');  
      }
      intentos++;
      limpiarCaja();
   }
    return;
 }

 function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario').value = '';
 }

 //Vamos a generar un número aleatorio mediante una función. Como estamos utilizando
 //funciones, a todos les debemos aplicar un "return" puesto que, como lo dice la
 //palabra, nos retornará un resultado.
function generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
   //Si ya sorteamos todos los números
   if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', '¡PERFECTO! Has terminado el juego.'); 
      } else {
      
      //Si el número generado está incluido en la lista


      console.log(numeroGenerado);
      console.log(listaNumerosSorteados);
      if(listaNumerosSorteados.includes(numeroGenerado)){
         return generarNumeroSecreto();
      } else {
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
   }
}
function condicionesIniciales(){
   asignarTextoElemento('h1', 'Juego del número secreto');
   asignarTextoElemento('p', `Elige un número entre 1 y ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;

}

function reiniciarJuego() {
   //Necesitamos limpiar la caja
   limpiarCaja();
   //Indicar mensaje de inicio (intervalo de números del 1 al 10)
   //Generar el número aleatorio
    //Inicializar el número de intentos
   condicionesIniciales();
   //Desahabilitar el botón de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();

 

