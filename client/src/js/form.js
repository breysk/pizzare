$(document).ready(() => {
  
$('input#name, input#telephone, input#password,  input#email').characterCounter();

$('.modal').modal();

$('#account').on('click', async () => {
  if (localStorage.getItem('user')) {
   await fetch(`${server}/user/token`, {
     method: "POST",
     body: { token: localStorage.getItem('token') }
   }).then(async(res) => {
      const { token, user } = await res.json();
      localStorage.setItem('token', token);
      localStorage.setItem('user', user);
      return user(localStorage.getItem('user'));
   }).catch((err) => {
      return user(localStorage.getItem('user') || false);
   });
  } else {
    return user(false);
  };
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