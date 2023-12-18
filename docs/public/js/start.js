// console.log('start...');

document.addEventListener('DOMContentLoaded', () => {
  
  M.Sidenav.init(document.querySelectorAll('.side-menu'), { edge: 'right' });
   
  M.Sidenav.init(document.querySelectorAll('.side-form'), { edge: 'left' });
  
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
  navigator.serviceWorker.register('public/js/service-work.js').then(sw => console.log('[ Pizzare ] - Registered')).catch(err => console.log(`[ Pizzare ] - ${err.message}`));
  });
 };