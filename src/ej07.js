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





