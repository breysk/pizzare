$(document).ready(() => {
  
$('input#name, input#telephone, input#password,  input#email').characterCounter();

$('.modal').modal();

$('#account').on('click', async () => {
  if (Cookies.get('token')) {
  await fetch(`${api}/user/` + Cookies.get('token'))
  .then(async(res) => {
    const { user } = await res.json();
    localStorage.setItem('user', user);
    return _user(localStorage.getItem('user'));
  }).catch((err) => {
    return _user(localStorage.getItem('user') || false);
  });
   } else {
     return _user(false);
  };
});

$("#register").submit(async (event) => {
  event.preventDefault();
  
  const file = $('#register #img');
  const img = file[0].files[0];
  
  if (!img.type.includes('image')) {
    $('#register #file_text').addClass('invalid');
    return;
  }
  
  const image = await _img(img);
  const name = $('#register #name').val();
  const telephone = $('#register #telephone').val();
  const email = $('#register #email').val();
  const date = $('#register #date').val();
  const password = $('#register #password').val();
  
  await fetch(`${api}/user/register`, {
  method: 'POST',
  body: {
   image, name, telephone, email, date, password
  }
  }).then(async(res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
 });

});
  
});

async function _user(hash) {
  if (!hash) {
    $('.loading').css('display', 'none');
    $('#login').css('display', 'inline');
  };
};

async function _img(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};