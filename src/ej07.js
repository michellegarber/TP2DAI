/*import { getCurrencyAbbreviation, getCurrency } from 'currency-map-country';
let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
    const abreviaturaPais = getCurrencyAbbreviation(codigoPais);
    console.log(`Abreviatura para ${codigoPais}:`, abreviaturaPais); 
    if (!abreviaturaPais) {
        return null;
    }
    const nombre = getCurrency(abreviaturaPais);
    return nombre ? nombre.name : null;
}
*/
// Importamos las funciones de la librería
import { getCurrencyAbbreviation, getCurrency } from 'currency-map-country';

let monedaDelPais, codigoPais;

function obtenerMoneda(codigoPais) {
    const abreviaturaPais = getCurrencyAbbreviation(codigoPais);  
    if (!abreviaturaPais) {  
        return null;
    }
    const moneda = getCurrency(abreviaturaPais);  
    return moneda ? moneda.name : null;  
}

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`); 

codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);  





