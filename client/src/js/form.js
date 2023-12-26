$(document).ready(() => {
  
$('input#name, input#telephone, input#password,  input#email').characterCounter();

$('.modal').modal();

$('#account').on('click', async () => {
  if (Cookies.get('token')) {
  await fetch(`${api}/user/` + Cookies.get('token'))
  .then(async(res) => {
    const { user } = await res.json();
    localStorage.setItem('user', user);
    return user(localStorage.getItem('user'));
  }).catch((err) => {
    return user(localStorage.getItem('user') || false);
  });
   } else {
     return user(false);
  };
});


$("#register").submit(async (event) => {
  event.preventDefault();

  
 await fetch(`${api}/user/register`, {
  body: {
   image, name, telephone, email, date, password
  }
 }).then(async(res) => {
  
 }).catch((err) => {
    
 });

});


async function user(hash) {
  console.log(hash)
  if (!hash) {
    console.log(true);
    $('.loading').css('display', 'none');
    $('#login').css('display', 'inline');
  };
  
}