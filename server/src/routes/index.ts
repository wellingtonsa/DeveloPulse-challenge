import { Router } from 'express';
import Controller from '../controllers';


const routes = Router();

routes.post('/form/submit', Controller.submitForm);


export default routes;
