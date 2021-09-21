/* eslint-disable no-return-await */
import { create, ApisauceInstance } from 'apisauce';

interface ApiCitiesResponse {
    Message: string,
    Items: string[]
}

const api:ApisauceInstance = create({
  baseURL: 'https://imc-hiring-test.azurewebsites.net',
});


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getCitiesByState(state:string): Promise<any>  {
    const response = await api.get<ApiCitiesResponse>(`/Contact/Cities?province=${state}`);

    return response.data?.Items;
}
