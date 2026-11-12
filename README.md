# VSafe Landing Page

Landing independiente en HTML5, CSS y JavaScript con Vite. Diseño responsive, información del producto, privacidad y preguntas frecuentes. Español e inglés con inglés por defecto. Sin dependencia de Vue ni de los paquetes del backend.

## Desarrollo

Node.js 24.

```powershell
npm ci
npm run dev
```

Disponible en http://localhost:5174. Los botones apuntan a VITE_APP_URL, por defecto http://localhost:5173. La aplicación está en [WebApp](https://github.com/VSAFE-Arquitecturas-Software-Emergentes/WebApp).

## Compilar y probar

```powershell
npm run build
# Con la landing en ejecución; requiere Google Chrome instalado:
npm test
```

La prueba verifica carga, enlace a la aplicación, cambio de idioma y adaptación móvil. Capturas y resultados en test-results/, excluidos de Git.

## Cloudflare Pages

Raíz /, build npm run build, salida dist. Variables NODE_VERSION=24 y VITE_APP_URL con la URL HTTPS de WebApp. wrangler.toml está en la raíz. Esta landing no recibe credenciales de base de datos, blockchain ni del backend.

[Backend y despliegue Railway](https://github.com/VSAFE-Arquitecturas-Software-Emergentes/Microservices)
