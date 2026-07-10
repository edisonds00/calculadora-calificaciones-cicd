import test from 'node:test';
import assert from 'node:assert/strict';
import { calcularPromedio, obtenerEstado } from '../src/js/calificaciones.js';

test('calcula el promedio de tres calificaciones', () => {
  assert.equal(calcularPromedio([8, 7, 9]), 8);
});

test('acepta números decimales', () => {
  assert.equal(calcularPromedio([7.5, 8.25, 9]), 8.25);
});

test('rechaza un arreglo vacío', () => {
  assert.throws(() => calcularPromedio([]), RangeError);
});

test('rechaza valores fuera del rango', () => {
  assert.throws(() => calcularPromedio([8, 11, 9]), RangeError);
});

test('informa Aprobado para un promedio igual a 7', () => {
  assert.equal(obtenerEstado(7), 'Aprobado');
});

test('informa Reprobado para un promedio menor a 7', () => {
  assert.equal(obtenerEstado(6.99), 'Reprobado');
});
