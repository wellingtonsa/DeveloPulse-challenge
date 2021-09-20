/* eslint-disable no-throw-literal */

import { INotification } from 'components/Notification';
import constants from 'constants/index';

export interface IForm {
    firstName: string,
    lastName: string,
    street: string,
    apt?: string,
    state: string,
    city: string,
    email: string
}

export function validate(data:IForm): INotification {

    const { firstName, lastName, street, apt, state, city, email} = data;

    try {
        if(!firstName || !lastName || !street || !state || !city || !email){
            throw('All fields except Unit/Apt are required.');
        }

        if(!constants.regex.EMAIL.test(email)){
            throw('Email must be in the correct format.');
        }

        if(firstName.length > 40){
            throw('First Name has a max of 40 characters.');
        }

        if(lastName.length > 40){
            throw('Last Name has a max of 40 characters.');
        }
        
        if(street.length > 128){
            throw('Street Address has a max of 128 characters.');
        }

        if(apt && apt.length > 128){
            throw('Unit/Apt has a max of 128 characters.');
        }

        if(email.length > 128){
            throw('Email has a max of 128 characters.');
        }

        if(city.length > 32){
            throw('City has a max of 32 characters.');
        }

        if(state.length > 32){
            throw('City has a max of 32 characters.');
        }


        return { type: 'success', message: 'Your information has been sent successfully.'}
    }catch(err){

        const message:string = (err as string);

        return { type: 'error', message };
    }

}