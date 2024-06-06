import express, { json } from 'express';
import { routes } from './routes';
import 'dotenv/config';
import { setupMongo } from './database';
const app = express();

setupMongo().then(() => {
  app.use(json());
  app.use(routes);
  const port = 3333;
  app.listen(port, () => {
    console.log('Server running on port' + port);
  });
});
