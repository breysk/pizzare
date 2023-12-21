import admin from 'firebase-admin';
import config from './config.js';
import body from 'body-parser';
import webpush from 'web-push';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(morgan('combined'));
app.use(body.json());
app.use(cors());

admin.initializeApp({
  credential: admin.credential.cert(config.firebase)
});

const userCreationParams = {
  email: 'sebastianjnuwu@gmail.com',
  password: 'senha123',
  displayName: 'Sebastian Jn',
};

admin.auth().createUser(userCreationParams)
  .then((userRecord) => {
    // Envia e-mail de verificação
    return admin.auth().generateEmailVerificationLink(userCreationParams.email);
  })
  .then((link) => {
    console.log('E-mail de verificação enviado para:', userCreationParams.email);
    console.log('Link de verificação:', link);
  })
  .catch((error) => {
    console.error('Erro ao criar usuário e enviar e-mail de verificação:', error);
  });

webpush.setGCMAPIKey(config.key._gcm);
webpush.setVapidDetails(
 config.user.email, 
 config.key._public, 
 config.key._private
);

app.get('/public_key', (req, res) => {
  return res.json({ public_key: config.key._public });
});

app.post('/subscription', async (req, res) => {
  const subscription = req.body;
  await webpush.sendNotification(subscription,'Hello');
});

app.post('/send', async (req, res) => {
  return res.status(201);
});

app.listen(3000);