import { access, cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const origen = path.resolve('src');
const destino = path.resolve('dist');

try {
  await access(origen);
  await rm(destino, { recursive: true, force: true });
  await mkdir(destino, { recursive: true });
  await cp(origen, destino, { recursive: true });
  await access(path.join(destino, 'index.html'));
  console.log(`Artefacto construido correctamente en: ${destino}`);
} catch (error) {
  console.error('No fue posible construir el proyecto.');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
