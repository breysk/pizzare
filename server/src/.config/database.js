import config from '#config/config';
import mongoose from 'mongoose';
import user from "#model/user"

mongoose.set('strictQuery', false);
mongoose.connect(config.mongodb.url)

export default {
  db: {
    user: user
  }
}