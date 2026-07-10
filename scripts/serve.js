import { createReadStream } from 'node:fs';
import { access, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';

const puerto = Number(process.env.PORT ?? 4173);
const raiz = path.resolve('dist');
const tipos = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8']
]);

await access(path.join(raiz, 'index.html'));

createServer(async (solicitud, respuesta) => {
  try {
    const rutaSolicitada = decodeURIComponent((solicitud.url ?? '/').split('?')[0]);
    const relativa = rutaSolicitada === '/' ? 'index.html' : rutaSolicitada.replace(/^\/+/, '');
    const archivo = path.resolve(raiz, relativa);

    if (!archivo.startsWith(raiz + path.sep) && archivo !== path.join(raiz, 'index.html')) {
      respuesta.writeHead(403).end('Acceso denegado');
      return;
    }

    const datos = await stat(archivo);
    if (!datos.isFile()) throw new Error('No es un archivo');

    respuesta.writeHead(200, {
      'Content-Type': tipos.get(path.extname(archivo)) ?? 'application/octet-stream'
    });
    createReadStream(archivo).pipe(respuesta);
  } catch {
    respuesta.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    respuesta.end('Recurso no encontrado');
  }
}).listen(puerto, () => {
  console.log(`Aplicación disponible en http://localhost:${puerto}`);
  console.log('Presione Ctrl+C para detener el servidor.');
});
