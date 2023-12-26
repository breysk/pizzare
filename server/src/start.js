import body from 'body-parser';
import user from '#routes/user';
import express from 'express';
import config from '#config';
import morgan from 'morgan';
import cors from 'cors';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(body.json());
app.use(cors({
  origin: config.server.origin,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use('/user', user);

app.listen(config.server.port, (err) => {
  if (err) return err.message;
  console.log(`Open api in port: ${config.server.port}`);
});

export default app;