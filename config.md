# Configuración de PWA
Esta aplicacion no encuentra completamente integrada para convertirse en PWA desde el build, por lo que se debe realizar en forma manual
## Paso 1:
  Luego de aplicar la sentencia npm build copiar los archivos, registerSW.js, sw.sj, manifest.json en la carpeta dist, que se produce luego del build
## Paso 2:
Editar el archivo index.html y agregar las siguientes lineas en el head:
```html
<link rel="manifest" href="/manifest.json">
  <script id="vite-plugin-pwa:register-sw" src="/registerSW.js"></script></head>
``` 
## Paso 3:
Verificar que en la carpeta /assets se encuentre los masked images para hacer responsiva la aplicación

## Este archivo debe tener ciertas propiedades obligatorias como: start_url, name, icons, theme color para los analizadores lighhouse de los navegadores lo reconozcan como archivo instalable
````json
{
  "theme_color": "#f69435",
  "background_color": "#f69435",
  "display": "fullscreen",
  "scope": "/",
  "id":"/",
  "start_url": "/",
  "name": "valesfise",
  "short_name": "valesfise",
  "description": "valesfise",
  "icons": [
      {
          "src": "/assets/maskable_icon_x48.png",
          "sizes": "48x48",
          "type": "image/png",
          "purpose": "any"
      },
      {
          "src": "/assets/maskable_icon_x72.png",
          "sizes": "72x72",
          "type": "image/png",
          "purpose": "any"
      },
      {
          "src": "/assets/maskable_icon_x96.png",
          "sizes": "96x96",
          "type": "image/png",
          "purpose": "any"
      },

      {
          "src": "/assets/maskable_icon_x128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "any"
      },

      {
        "src": "/assets/maskable_icon_x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
    },
    {
        "src": "/assets/maskable_icon_x384.png",
        "sizes": "384x384",
        "type": "image/png",
        "purpose": "any"
    },
      {
          "src": "/assets/maskable_icon_x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
      }

  ]
}
````

# 2. Archivo de registro del service worker

```js
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {navigator.serviceWorker.register('/sw.js', { scope: '/' })})}

  window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    // Stash the event so it can be triggered later.
    //window.deferredPrompt = event;

  });


  window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
  });
```
# 3. Archivo index.html, tener cuidado de reemplazar por los nuevos arhivos
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="theme-color" content="#317EFB"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vales Fise</title>
    <script type="module" crossorigin src="/assets/index.f71d88c1.js"></script>
    <link rel="stylesheet" href="/assets/index.1c15f215.css">
    <link rel="apple-touch-icon" href="/assets/ensa.dc45fe0c.jpg">
  <link rel="manifest" href="/manifest.json">
  <script id="vite-plugin-pwa:register-sw" src="/registerSW.js"></script></head>
  <body>
    <div id="root"></div>

  </body>
</html>
```
# 4. Archivo service broker
```js
var cacheName = "vales2023";
var appShellFiles = [
  "/",
  "/index.html",
  "/registerSW.js",
  "/assets/maskable_icon_x48.png",
  "/assets/maskable_icon_x72.png",
  "/assets/maskable_icon_x96.png",
  "/assets/maskable_icon.png",

];
self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
    e.waitUntil(
      caches.open(cacheName).then((cache) => {
        console.log(
          "[Servicio Worker] Almacena todo en caché: contenido e intérprete de la aplicación"
        );
        return cache.addAll(appShellFiles);
      })
    );
  });

  self.addEventListener("fetch", (e) => {
    console.log("[Servicio Worker] Recurso obtenido " + e.request.url);
  });
```


# Recursos y fuentes
[Para descargar imagenes](https://www.vecteezy.com/png/9384985-gas-tank-clipart-design-illustration)
[Para hacer maskedable una imagen](https://maskable.app/editor)
[Profundizar en web](https://web.dev/learn/)
