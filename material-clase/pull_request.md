# feat: agregar clasificación académica detallada

## Resumen
Implementa la solicitud de cambio para clasificar el promedio como Excelente, Aprobado, Recuperación o Reprobado.

## Issue relacionado
Closes #1

## Cambios realizados
- Se agregó `clasificarPromedio` como función pura.
- Se ampliaron las pruebas para los límites 5, 7 y 9.
- Se actualizó la interfaz para mostrar la clasificación.
- Se mantuvo `obtenerEstado` para explicar compatibilidad con la versión inicial.

## Pruebas ejecutadas
- [x] `npm run check`
- [x] `npm test`
- [x] `npm run build`
- [x] `npm run verify`

## Evidencias
- Ejecución de CI en verde.
- Cambios revisados en la pestaña **Files changed**.
- Aplicación probada localmente.

## Riesgos
Riesgo bajo. La modificación se concentra en la lógica de clasificación y cuenta con pruebas de límites.

## Procedimiento de verificación
1. Ingresar 9, 9 y 9: debe mostrar Excelente.
2. Ingresar 7, 7 y 7: debe mostrar Aprobado.
3. Ingresar 5, 5 y 5: debe mostrar Recuperación.
4. Ingresar 4, 4 y 4: debe mostrar Reprobado.
