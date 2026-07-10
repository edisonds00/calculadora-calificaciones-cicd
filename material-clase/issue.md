# Agregar clasificación académica detallada

## Contexto
La versión 1.0.0 solo informa si un estudiante está aprobado o reprobado.

## Necesidad
Se requiere una salida más informativa que distinga desempeño excelente y condición de recuperación.

## Criterios de aceptación
- Dado un promedio de 9 o más, el sistema muestra **Excelente**.
- Dado un promedio entre 7 y menos de 9, muestra **Aprobado**.
- Dado un promedio entre 5 y menos de 7, muestra **Recuperación**.
- Dado un promedio menor a 5, muestra **Reprobado**.
- Se prueban exactamente los límites 5, 7 y 9.
- Todas las pruebas deben aprobarse antes de integrar el cambio.
- El sitio publicado debe reflejar la nueva clasificación.

## Archivos posiblemente afectados
- `src/js/calificaciones.js`
- `src/js/app.js`
- `src/index.html`
- `tests/calificaciones.test.js`

## Evidencia esperada
Ejecución verde de CI, Pull Request integrado y clasificación visible en GitHub Pages.

## Definición de terminado
Código revisado, pruebas exitosas, Pull Request integrado, versión 1.1.0 etiquetada y despliegue verificado.
