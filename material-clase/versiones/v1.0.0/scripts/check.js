import { readdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';

const carpetas = ['src/js', 'scripts', 'tests'];
let errores = 0;

for (const carpeta of carpetas) {
  const entradas = await readdir(carpeta, { withFileTypes: true });
  const archivos = entradas
    .filter((entrada) => entrada.isFile() && entrada.name.endsWith('.js'))
    .map((entrada) => path.join(carpeta, entrada.name));

  for (const archivo of archivos) {
    const resultado = spawnSync(process.execPath, ['--check', archivo], {
      stdio: 'inherit'
    });

    if (resultado.status !== 0) errores += 1;
  }
}

if (errores > 0) {
  console.error(`Se encontraron errores de sintaxis en ${errores} archivo(s).`);
  process.exit(1);
}

console.log('Validación sintáctica completada correctamente.');
