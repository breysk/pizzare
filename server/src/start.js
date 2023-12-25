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
app.use(cors({
  origin: config.server.origin,
  credentials: true
}));

admin.initializeApp({
  credential: admin.credential.cert(config.firebase)
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

app.listen(config.server.port);

export default app;