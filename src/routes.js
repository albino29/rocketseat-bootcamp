import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/Session';
import RecipientController from './app/controllers/Recipient';
import DeliverymanController from './app/controllers/Deliveryman';
import FileController from './app/controllers/File';

import auth from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/login', SessionController.store);
routes.use(auth);

routes.post('/recipients', RecipientController.store);
routes.get('/recipients', RecipientController.find);
routes.put('/recipients/:id', RecipientController.update);

routes.post('/deliveryman', DeliverymanController.store);
routes.get('/deliveryman', DeliverymanController.find);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.post('/file', upload.single('file'), FileController.store);

export default routes;
