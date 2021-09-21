/* eslint-disable no-return-await */

import { create, ApisauceInstance } from 'apisauce';
import { IForm } from 'components/Form/index.validate';

interface ApiFormResponse {
    type: 'success' | 'error',
    message: string
}

const api:ApisauceInstance = create({
    baseURL: 'http://localhost:3333/',
  });
  

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function submitForm(form:IForm): Promise<any>  {

    const data = {
        Name: `${form.firstName} ${form.lastName}`,
        Address: form.street,
        Address2: form.apt ? form.apt : "",
        City: form.city,
        Province: form.state,
        Email: form.email
    }

    const response = await api.post<ApiFormResponse>(`/form/submit`, data);

    return response.data;
}
