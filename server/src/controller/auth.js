import admin from "#config/firebase";
import { v4 } from 'uuid';
import joi from 'joi';

const bucket = admin.storage().bucket();

export default {
  register: async (req, res) => {

   const schema = joi.object({
  image: joi.string().required(),
  name: joi.string().min(4).max(45).required(),
  telephone: joi.string().min(11).max(13).required(),
  email: joi.string().email().min(16).max(98).required(),
  password: joi.string().min(6).max(12).required()
  });
   const { error } = schema.validate(req.body);
    
   if (error) return res.status(401).json({ error: error.details[0].message });

   const buffer = Buffer.from(req.body.image.split(',')[1], 'base64');

   const file = bucket.file(`${req.body.email}-${v4()}.png`);

   await file.save(buffer, {
  metadata: {
  contentType: 'image/png',
  },
  });

   const url = await file.getSignedUrl({
    action: 'read',
    expires: '01-01-2050'
   });

   res.json({ image: url[0] });
  
  },

  login: async (req, res) => {
  // Implementação do login
  },

  recover: async (req, res) => {
  // Implementação da recuperação
  }
  };