MI DINERO — PWA LISTA PARA PUBLICAR

Esta versión toma tu mi-dinero.html actual y lo adapta para funcionar como PWA.

QUÉ CAMBIÉ
- Manifest PWA.
- Service Worker para caché/offline.
- Almacenamiento local mediante localStorage.
- Compatibilidad con el window.storage que ya usa tu aplicación.
- Eliminé el aviso que decía que debía abrirse desde Claude.
- Ajusté el texto de Respaldo para indicar que los datos se guardan localmente.

IMPORTANTE SOBRE LOS DATOS
La versión PWA guarda los datos en el dispositivo/navegador donde la abras.
No sincroniza automáticamente iPhone y computadora.
Tu función de Respaldo/Restaurar sigue siendo el mecanismo para mover datos entre dispositivos.

CÓMO PUBLICARLA
1. Sube TODOS los archivos de esta carpeta a un hosting HTTPS:
   mi-dinero.html
   manifest.webmanifest
   sw.js
   pwa-storage.js
   pwa-register.js
   icon-192.svg
   icon-512.svg

2. Abre la dirección de mi-dinero.html en Safari del iPhone.

3. Pulsa Compartir → Añadir a pantalla de inicio → Añadir.

4. Abre "Mi dinero" desde el icono.

ANTES DE MIGRAR DATOS
En la versión anterior, usa Ajustes → Respaldo → Descargar respaldo.
Guarda ese JSON.
Después, en la PWA, usa Ajustes → Respaldo → Restaurar respaldo.

NOTA
El Service Worker requiere HTTPS (localhost también sirve para pruebas).
