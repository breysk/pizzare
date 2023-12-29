const api = `http://0.0.0.0:3000`;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('src/services/work.js')
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

$(document).ready(() => {

$('.modal').modal();

$('#account').on('click', async () => {
  if (Cookies.get('user')) {
     return user(false);
  } else {
    return user(false);
  };
});

  
});

async function user(hash) {
  if (!hash) {
    $('.loading').css('display', 'none');
    $('#login').css('display', 'inline');
  };
};