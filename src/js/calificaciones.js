const CANTIDAD_CALIFICACIONES = 3;
const CALIFICACION_MINIMA = 0;
const CALIFICACION_MAXIMA = 10;

function convertirCalificacion(valor, posicion) {
  if (typeof valor === 'string' && valor.trim() === '') {
    throw new TypeError(`La calificación ${posicion} está vacía.`);
  }

  const numero = Number(valor);

  if (!Number.isFinite(numero)) {
    throw new TypeError(`La calificación ${posicion} debe ser numérica.`);
  }

  if (numero < CALIFICACION_MINIMA || numero > CALIFICACION_MAXIMA) {
    throw new RangeError(`La calificación ${posicion} debe estar entre 0 y 10.`);
  }

  return numero;
}

export function validarCalificaciones(calificaciones) {
  if (!Array.isArray(calificaciones)) {
    throw new TypeError('Las calificaciones deben enviarse dentro de un arreglo.');
  }

  if (calificaciones.length !== CANTIDAD_CALIFICACIONES) {
    throw new RangeError('Se requieren exactamente tres calificaciones.');
  }

  return calificaciones.map((valor, indice) => convertirCalificacion(valor, indice + 1));
}

export function calcularPromedio(calificaciones) {
  const valores = validarCalificaciones(calificaciones);
  const suma = valores.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / valores.length;
}

export function obtenerEstado(promedio) {
  validarPromedio(promedio);
  return promedio >= 7 ? 'Aprobado' : 'Reprobado';
}

export function clasificarPromedio(promedio) {
  validarPromedio(promedio);

  if (promedio >= 9) return 'Excelente';
  if (promedio >= 7) return 'Aprobado';
  if (promedio >= 5) return 'Recuperación';
  return 'Reprobado';
}

function validarPromedio(promedio) {
  if (!Number.isFinite(promedio)) {
    throw new TypeError('El promedio debe ser un número válido.');
  }

  if (promedio < CALIFICACION_MINIMA || promedio > CALIFICACION_MAXIMA) {
    throw new RangeError('El promedio debe estar entre 0 y 10.');
  }
}
