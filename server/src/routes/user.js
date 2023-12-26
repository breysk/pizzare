import auth from '#controller/auth';
import express from 'express';
const user = express.Router();

user.post('/register', auth.register);
user.post('/recover', auth.recover);
user.post('/login', auth.login);

export default user;