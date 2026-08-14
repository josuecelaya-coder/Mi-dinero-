/* Mi dinero — registro de PWA */
(() => {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .then(() => console.log('Mi dinero PWA: Service Worker activo'))
      .catch(err => console.warn('Mi dinero PWA: error al registrar Service Worker', err));
  });
})();
