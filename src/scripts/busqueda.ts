import autos from "../data/db";

// // objeto de búsqueda
// type Busqueda = {
//   marca: string;
//   año: number;
//   minimo: number;
//   maximo: number;
//   puertas: number;
//   transmision: string;
//   color: string;
// };

const datosBusqueda = {
  marca: "",
  año: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

// seleccionar todos los selects
const selectores = document.querySelectorAll("select");

// añadir eventos clic a cada select
selectores.forEach((selector) => {
  selector.addEventListener("change", (e) => {
    const seleccion: string = selector.id;
    datosBusqueda[seleccion] = (e.target as HTMLSelectElement).value;
    filtrarAuto();
  });
});

function filtrarAuto() {
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

  console.log(resultado);
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear(auto) {
  const { año } = datosBusqueda;
  if (año) {
    return auto.year === parseInt(año); // el valor del select es string, por eso debemos convertirlo a number para poderlo comparar con el año número de la base de datos
  }
  return auto;
}

export default { datosBusqueda };
