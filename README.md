# Calculadora de calificaciones - CI/CD

Prueba de concepto para la asignatura **Gestión de la Configuración del Software** de la Universidad de Guayaquil.

## Funcionalidad

La aplicación recibe tres calificaciones entre 0 y 10, calcula el promedio y presenta una clasificación:

- Excelente: promedio mayor o igual a 9.
- Aprobado: promedio mayor o igual a 7 y menor a 9.
- Recuperación: promedio mayor o igual a 5 y menor a 7.
- Reprobado: promedio menor a 5.

## Requisitos

- Node.js 24 LTS o una versión compatible posterior.
- npm.
- Git.

## Ejecución local

```bash
npm install
npm run verify
npm start
```

Abra `http://localhost:4173` en el navegador.

## Automatización

- `.github/workflows/ci.yml`: valida ramas y Pull Requests.
- `.github/workflows/deploy.yml`: verifica, construye y despliega `dist` en GitHub Pages cuando cambia `main`.

## Seguridad

El repositorio no necesita contraseñas ni tokens personales dentro del código. El despliegue utiliza el `GITHUB_TOKEN` temporal y los permisos mínimos definidos en el workflow.
