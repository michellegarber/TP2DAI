
import { getCurrencyAbbreviation, getCurrency } from 'currency-map-country';
let monedaDelPais, codigoPais;

function obtenerMoneda(codigoPais) {
    const currencyAbbr = getCurrencyAbbreviation(codigoPais);
    if (!currencyAbbr) {
        return null;
    }
    const currencyData = getCurrency(currencyAbbr);
    return currencyData ? currencyData.name : null;
}


codigoPais = 'AR';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';

monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);






