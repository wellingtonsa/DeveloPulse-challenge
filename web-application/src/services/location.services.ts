/* eslint-disable no-return-await */

import api from '.';

interface ApiCitiesResponse {
    Message: string,
    Items: string[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getCitiesByState(state:string): Promise<any>  {
    const response = await api.get<ApiCitiesResponse>(`/Contact/Cities?province=${state}`);

    return response.data?.Items;
}
