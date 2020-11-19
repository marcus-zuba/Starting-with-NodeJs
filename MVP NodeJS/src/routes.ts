import {Router} from 'express';

const ClientsController = require('../src/controllers/ClientsController');
const ServicesController = require('../src/controllers/ServicesController');

const routes = Router();

routes

  //Clients
  .get('/clients', ClientsController.index)
  .post('/clients', ClientsController.create)
  .put('/clients/:id', ClientsController.update)
  .delete('/clients/:id', ClientsController.delete)

  //Services
  .get('/services', ServicesController.index)
  .post('/services', ServicesController.create)
  .put('/services/:id', ServicesController.update)
  .delete('/services/:id', ServicesController.delete);

  

export default routes;