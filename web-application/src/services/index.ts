
import { create, ApisauceInstance } from 'apisauce';

const api:ApisauceInstance = create({
  baseURL: 'https://imc-hiring-test.azurewebsites.net',
});


export default api;