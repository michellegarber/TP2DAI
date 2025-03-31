import url from  "url";
let miUrl    = null;
let miObjeto = null;
miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
console.log("host: ", miObjeto.host);
console.log("pathname: ", miObjeto.pathname);
console.log("parametros: ", miObjeto.searchParams);

function parsearUrl(miUrl){
const Url1 = new URL (miUrl)
return Url1;
}
