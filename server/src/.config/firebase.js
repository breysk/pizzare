import admin from 'firebase-admin';
import config from '#config/config';

admin.initializeApp({
	credential: admin.credential.cert(config.firebase),
	storageBucket: 'gs://pizzare-online.appspot.com' 
});


export default admin;

/*
firebase.auth().createUser({
  email: 'aeemplo@email.com',
  displayName: 'Nome do Usuário',
  photoURL: 'http://0.0.0.0:3000/public/user/img/aexemplo@email.com',
  phoneNumber: '+55 (88) 9 8109-1805',
  password: 'senha123'
})
  .then((user) => {
    console.log(user);
  }).catch((err) => {
    console.error(err);
  });
*/