import { Router } from 'express';

import SessionController from './app/controllers/Session';
import RecipientController from './app/controllers/Recipient';

const routes = new Router();
import auth from './app/middleware/auth';

routes.post('/login', SessionController.store);
routes.use(auth);

routes.post('/recipients', RecipientController.store);
routes.get('/recipients', RecipientController.find);
routes.put('/recipients/:id', RecipientController.update);

export default routes;
