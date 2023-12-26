import joi from 'joi';

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
 

  },

  login: async (req, res) => {
  // Implementação do login
  },

  recover: async (req, res) => {
  // Implementação da recuperação
  }
  };