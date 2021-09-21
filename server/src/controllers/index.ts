import { Request, Response } from 'express';
import { sendForm, ApiFormResponse} from '../services/form.services';
import { IForm } from '../util/types';
import { regex } from '../util/constants';

class Controller {
    public async submitForm(req:Request, res:Response): Promise<Response<string>>{
        
        const body:IForm = req.body;

        const { Name, Address, Address2, City, Email, Province} = body;

        if(!Name || !Address || !City || !Email || !Province){
            res.status(403).json({type: 'error', message:'One or more information are missing'});
        }

        if(!regex.EMAIL.test(Email)){
            res.status(403).json({type: 'error', message:'Email must be in the correct format.'});
        }

        if(Name.length > 85){
            res.status(403).json({type: 'error', message:'First Name has a max of 85 characters.'});
        }

        if(Address.length > 128){
            res.status(403).json({type: 'error', message:'Address has a max of 128 characters.'});
        }

        if(Address2 && Address2.length > 128){
            res.status(403).json({type: 'error', message:'Address2 has a max of 128 characters.'});
        }

        if(Email.length > 128){
            res.status(403).json({type: 'error', message:'Email has a max of 128 characters.'});
        }

        if(City.length > 32){
            res.status(403).json({type: 'error', message:'City has a max of 32 characters.'});
        }

        if(Province.length > 32){
            res.status(403).json({type: 'error', message:'Province has a max of 32 characters.'});
        }

        const response:ApiFormResponse = await sendForm(body);

        if(response.StatusCode === 200){
            return res.status(200).json({type: 'success', message: 'Your information has been sent successfully.'});
        }else{
            return res.status(response.StatusCode).json({type: 'error', message: response.Status});
        }

        
    }
}

export default new Controller();