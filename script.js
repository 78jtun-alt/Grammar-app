if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then((reg) => console.log('Service Worker Registered Successfully!', reg))
      .catch((err) => console.log('Service Worker Registration Failed:', err));
  });
}
