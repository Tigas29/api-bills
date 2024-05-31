import express, { json } from 'express';
import { routes } from './routes';

const app = express();

app.use(json());
app.use(routes);
const port = 3333;
app.listen(port, () => {
  console.log('Server running on port 3000');
});
