import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calcularPromedio,
  clasificarPromedio
} from '../src/js/calificaciones.js';

test('la versión existente continúa calculando el promedio', () => {
  assert.equal(calcularPromedio([8, 7, 9]), 8);
});

test('clasifica exactamente 9 como Excelente', () => {
  assert.equal(clasificarPromedio(9), 'Excelente');
});

test('clasifica exactamente 7 como Aprobado', () => {
  assert.equal(clasificarPromedio(7), 'Aprobado');
});

test('clasifica exactamente 5 como Recuperación', () => {
  assert.equal(clasificarPromedio(5), 'Recuperación');
});

test('clasifica un promedio menor a 5 como Reprobado', () => {
  assert.equal(clasificarPromedio(4.99), 'Reprobado');
});
