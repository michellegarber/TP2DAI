import Url from 'url';  

function parsearUrl(miUrl) {
    try {
        return new URL(miUrl);
    } catch (error) {
        console.error("Error al parsear la URL:", error.message);
        return { host: null, pathname: null, searchParams: null };
    }
}

const miUrl = 'http://www.ort.edu.ar:v 8080/alumnos/index.htm?curso=2022&mes=mayo';

try {
    let miObjeto = parsearUrl(miUrl);
    console.log(miObjeto);
} catch (error) {
    console.error("La URL no es válida");
}
