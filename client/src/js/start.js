const server = `http://0.0.0.0:3000`;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('src/js/work.js')
    .then(registration => {
      console.log('[ Pizzare ] - Currently working')
      return registration.update();
    }).then(registration => {
      console.log('[ Pizzare ] - ServiceWorker is running')
    }).catch(err => {
      console.log(`[ Pizzare ] - Not working: ${err.message}`);
    });
  });
};

/*
const array_64 = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};


async function a() {
 
  await fetch(`${server}/public_key`).then(async (response) => {

    const { public_key } = await response.json();

   const subscription = await navigator.serviceWorker
    .getRegistration().then((x) => {
      return x.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: array_64(public_key),
      });
    });
 
   window.user_key = subscription;
   
  });
};


const abc = JSON.stringify(window.user_key.toJSON(), null, 2);

  fetch(`${server}/subscription`, {
    method: 'POST',
    body: abc,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => console.log('successfully send subscription to server'))
    .catch((err) => console.error('error while sending to server', err));
a()*/