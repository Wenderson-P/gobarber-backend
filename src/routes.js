import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Como está depois das 2 rotas, o que estiver encima não vai usar o middleware
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
