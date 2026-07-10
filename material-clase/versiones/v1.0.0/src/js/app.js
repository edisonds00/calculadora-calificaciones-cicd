import { calcularPromedio, obtenerEstado } from './calificaciones.js';

const formulario = document.querySelector('#formulario-calificaciones');
const resultado = document.querySelector('#resultado');
const promedioSalida = document.querySelector('#promedio');
const clasificacionSalida = document.querySelector('#clasificacion');
const mensajeError = document.querySelector('#mensaje-error');
const campos = [1, 2, 3].map((numero) => document.querySelector(`#calificacion-${numero}`));

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  resultado.hidden = true;
  mensajeError.hidden = true;
  try {
    const promedio = calcularPromedio(campos.map((campo) => campo.value));
    promedioSalida.textContent = `Promedio: ${promedio.toFixed(2)}`;
    clasificacionSalida.textContent = `Estado: ${obtenerEstado(promedio)}`;
    resultado.hidden = false;
  } catch (error) {
    mensajeError.textContent = error.message;
    mensajeError.hidden = false;
  }
});
