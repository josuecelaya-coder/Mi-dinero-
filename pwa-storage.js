/* Mi dinero — almacenamiento PWA
   Mantiene la misma interfaz window.storage que usa la app.
   Los datos se guardan localmente en el navegador/dispositivo.
*/
(function () {
  const PREFIX = 'mi-dinero-pwa:';
  const key = (k) => PREFIX + String(k);

  window.storage = {
    async get(k) {
      const value = localStorage.getItem(key(k));
      return value === null ? null : { value };
    },
    async set(k, value) {
      localStorage.setItem(key(k), String(value));
      return { ok: true };
    },
    async delete(k) {
      localStorage.removeItem(key(k));
      return { ok: true };
    }
  };
})();
