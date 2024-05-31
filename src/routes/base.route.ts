//all base routes with some infos of this project

import { Router } from 'express';
import packageJson from '../../package.json';
export const baseRoutes = Router();

baseRoutes.get('/', (_, res) => {
  const { version, name, description, author } = packageJson;

  res.status(200).json({
    version,
    name,
    description,
    author,
  });
});
