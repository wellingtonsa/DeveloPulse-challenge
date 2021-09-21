/* eslint-disable no-return-await */

import api from '.';
import { IForm } from '../util/types';

interface ApiCitiesResponse {
    Message: string,
    Items: string[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendForm(data:IForm): Promise<any>  {
    const response = await api.post<any>(`/Contact/Save`, data);

    return response.data;
}
