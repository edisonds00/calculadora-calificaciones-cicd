import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calcularPromedio,
  clasificarPromedio,
  obtenerEstado,
  validarCalificaciones
} from '../src/js/calificaciones.js';

test('calcula el promedio de tres calificaciones enteras', () => {
  assert.equal(calcularPromedio([8, 7, 9]), 8);
});

test('calcula correctamente un promedio con decimales', () => {
  assert.equal(calcularPromedio([7.5, 8.25, 9]), 8.25);
});

test('acepta el límite inferior cero', () => {
  assert.deepEqual(validarCalificaciones([0, 5, 10]), [0, 5, 10]);
});

test('acepta el límite superior diez', () => {
  assert.equal(calcularPromedio([10, 10, 10]), 10);
});

test('rechaza valores no numéricos', () => {
  assert.throws(() => calcularPromedio([8, 'texto', 9]), TypeError);
});

test('rechaza un arreglo vacío', () => {
  assert.throws(() => calcularPromedio([]), RangeError);
});

test('rechaza una cantidad diferente de tres calificaciones', () => {
  assert.throws(() => calcularPromedio([8, 9]), RangeError);
});

test('rechaza calificaciones fuera del rango permitido', () => {
  assert.throws(() => calcularPromedio([8, 11, 9]), RangeError);
});

test('mantiene el estado básico aprobado para compatibilidad con v1.0.0', () => {
  assert.equal(obtenerEstado(7), 'Aprobado');
});

test('clasifica como Excelente un promedio mayor o igual a 9', () => {
  assert.equal(clasificarPromedio(9.4), 'Excelente');
});

test('clasifica exactamente 9 como Excelente', () => {
  assert.equal(clasificarPromedio(9), 'Excelente');
});

test('clasifica como Aprobado un promedio entre 7 y menos de 9', () => {
  assert.equal(clasificarPromedio(8.5), 'Aprobado');
});

test('clasifica exactamente 7 como Aprobado', () => {
  assert.equal(clasificarPromedio(7), 'Aprobado');
});

test('clasifica como Recuperación un promedio entre 5 y menos de 7', () => {
  assert.equal(clasificarPromedio(6.25), 'Recuperación');
});

test('clasifica exactamente 5 como Recuperación', () => {
  assert.equal(clasificarPromedio(5), 'Recuperación');
});

test('clasifica como Reprobado un promedio menor a 5', () => {
  assert.equal(clasificarPromedio(4.99), 'Reprobado');
});

test('rechaza promedios fuera de rango', () => {
  assert.throws(() => clasificarPromedio(10.1), RangeError);
});
