import { Router } from 'express';
import { baseRoutes } from './base.route';
import { service } from './categories.route';
//save the whole routes
export const routes = Router();
//every route will call baseRoutes
routes.use('/', baseRoutes);
routes.use('/category', service);
