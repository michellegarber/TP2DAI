
import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';

// Ejemplo de uso
const buscarPeliculas = async () => {
  const result = await OMDBSearchByPage('Inception', 1);
  console.log(result);
};

const obtenerDetalles = async () => {
  const result = await OMDBGetByImdbID('tt1375666');
  console.log(result);
};

buscarPeliculas();
obtenerDetalles();




