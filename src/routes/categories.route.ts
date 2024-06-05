import { Router } from 'express';
import { CategoriesCrontoller } from '../controllers/categories.controller';

export const service = Router();
const controller = new CategoriesCrontoller();
service.post('/', controller.create);
