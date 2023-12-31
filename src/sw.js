var cacheName = "vales2023";
var appShellFiles = [
  "/valesfise",
  "/valesfise/index.html",
  "/valesfise/registerSW.js",
  "/valesfise/assets/maskable_icon_x48.png",
  "/valesfise/assets/maskable_icon_x72.png",
  "/valesfise/assets/maskable_icon_x96.png",
  "/valesfise/assets/maskable_icon.png",

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
