const CANTIDAD_CALIFICACIONES = 3;

export function validarCalificaciones(calificaciones) {
  if (!Array.isArray(calificaciones)) {
    throw new TypeError('Las calificaciones deben enviarse dentro de un arreglo.');
  }
  if (calificaciones.length !== CANTIDAD_CALIFICACIONES) {
    throw new RangeError('Se requieren exactamente tres calificaciones.');
  }
  return calificaciones.map((valor, indice) => {
    if (typeof valor === 'string' && valor.trim() === '') {
      throw new TypeError(`La calificación ${indice + 1} está vacía.`);
    }
    const numero = Number(valor);
    if (!Number.isFinite(numero)) {
      throw new TypeError(`La calificación ${indice + 1} debe ser numérica.`);
    }
    if (numero < 0 || numero > 10) {
      throw new RangeError(`La calificación ${indice + 1} debe estar entre 0 y 10.`);
    }
    return numero;
  });
}

export function calcularPromedio(calificaciones) {
  const valores = validarCalificaciones(calificaciones);
  return valores.reduce((total, valor) => total + valor, 0) / valores.length;
}

export function obtenerEstado(promedio) {
  if (!Number.isFinite(promedio) || promedio < 0 || promedio > 10) {
    throw new RangeError('El promedio debe estar entre 0 y 10.');
  }
  return promedio >= 7 ? 'Aprobado' : 'Reprobado';
}
