import express, { json } from 'express';
import { routes } from './routes';
import { setupMongo } from './database';
import 'dotenv/config';

setupMongo()
  .then(() => {
    const app = express();

    app.use(json());
    app.use(routes);

    const port = 3333;

    app.listen(port, () => {
      console.log('Server running on  port ' + port);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
