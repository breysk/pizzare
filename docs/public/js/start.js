// console.log('start...');

$(document).ready(() => {
  
  $('.sidenav').sidenav();
  
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
  navigator.serviceWorker.register('public/js/service-work.js').then(sw => console.log('[ Pizzare ] - Registered')).catch(err => console.log(`[ Pizzare ] - ${err.message}`));
  });
 };
 
