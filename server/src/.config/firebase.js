import firebase from 'firebase-admin';

firebase.initializeApp({
  credential: admin.credential.cert(config.firebase)
});

export default firebase;