const server = `http://0.0.0.0:3000`;

self.addEventListener('install', (event) => {
  // self.skipWaiting();
});

self.addEventListener('push', (e) => {
  e.waitUntil(
    self.registration.showNotification('Pizzare', {
      body: e.data.text() || 'Pizzare is here waiting for you!',
      icon: 'public/img/user_standard.jpeg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
      actions: [],
    }));
});

self.addEventListener('notificationclick', (event) => {
  console.log(event);
  console.log(event.action);
});
