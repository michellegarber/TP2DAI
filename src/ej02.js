/* Importo la constante PI y la función sumar del módulo matematica. */
import {PI, sumar, multiplicar, restar, dividir, nums} from './modules/matematica.js';
let totalS, numero1=10, numero2=20, totalR, totalM, totalD;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
totalS = sumar(numero1, numero2); // Uso la función sumar importada.
console.log(`sumar(${numero1}, ${numero2}) = ${totalS}`);
totalR = restar(numero1, numero2); 
console.log(`restar(${numero1}, ${numero2}) = ${totalR}`);
totalM = multiplicar(numero1, numero2); 
console.log(`multiplicar(${numero1}, ${numero2}) = ${totalM}`);
totalD = dividir(numero1, numero2); 
console.log(`dividir(${numero1}, ${numero2}) = ${totalD}`);
for(const num of nums){
    console.log(num);
}