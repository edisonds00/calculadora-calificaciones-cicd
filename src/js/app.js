import { calcularPromedio, clasificarPromedio } from './calificaciones.js';

const formulario = document.querySelector('#formulario-calificaciones');
const botonLimpiar = document.querySelector('#boton-limpiar');
const resultado = document.querySelector('#resultado');
const promedioSalida = document.querySelector('#promedio');
const clasificacionSalida = document.querySelector('#clasificacion');
const mensajeError = document.querySelector('#mensaje-error');
const campos = [
  document.querySelector('#calificacion-1'),
  document.querySelector('#calificacion-2'),
  document.querySelector('#calificacion-3')
];

function ocultarMensajes() {
  resultado.hidden = true;
  mensajeError.hidden = true;
  mensajeError.textContent = '';
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  ocultarMensajes();

  try {
    const calificaciones = campos.map((campo) => campo.value);
    const promedio = calcularPromedio(calificaciones);
    const clasificacion = clasificarPromedio(promedio);

    promedioSalida.textContent = `Promedio: ${promedio.toFixed(2)}`;
    clasificacionSalida.textContent = `Clasificación: ${clasificacion}`;
    resultado.hidden = false;
  } catch (error) {
    mensajeError.textContent = error instanceof Error
      ? error.message
      : 'Ocurrió un error inesperado.';
    mensajeError.hidden = false;
  }
});

botonLimpiar.addEventListener('click', () => {
  formulario.reset();
  ocultarMensajes();
  campos[0].focus();
});
