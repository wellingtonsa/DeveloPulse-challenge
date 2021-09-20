import React, { useState, useEffect }from 'react';
import constants from 'constants/index';
import Input from 'common/styled/Input';
import Dropdown from 'common/styled/Dropdown';
import Button from 'common/styled/Button';
import Notification, { INotification } from 'components/Notification';
import { getCitiesByState } from 'services/location.services';
import { validate, IForm } from './index.validate';
import * as S from './styles';


const Form: React.FC = () => {
    const [cities, setCities] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [apt, setApt] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');

    const [notification, setNotification] = useState<INotification | undefined>(undefined);

    useEffect(() => {
        if(state){
            getCitiesByState(state)
            .then(res => {
                setCities(res);
                setCity('');
            })
        }
    }, [state]);


    const handleSubmit = () => {
        const data:IForm = {
            firstName,
            lastName,
            street,
            apt,
            state,
            city,
            email
        }
        const res = validate(data);
        setNotification(res);
    }

    return (
     <S.Container>
         <S.Content>
            <div className="form-header">
                <h1>Contact Us</h1>
            </div>
            <div className="form-content">
                <div className="form-content-fields">
                <Input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                <Input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                </div>
                <div className="form-content-fields">
                <Input placeholder="Street Address" onChange={(e) => setStreet(e.target.value)} value={street}/>
                </div>
                <div className="form-content-fields">
                <Input placeholder="Unit/Apt" onChange={(e) => setApt(e.target.value)} value={apt}/>
                </div>
                <div className="form-content-fields">
                <Dropdown 
                placeholder="Province/Territory/State" 
                data={constants.states} 
                type="state"
                onChange={setState} 
                value={state}/>
                <Dropdown 
                placeholder="City" 
                data={cities} 
                type="city"
                onChange={setCity} value={city}/>    
                </div>      
                <div className="form-content-fields">
                <Input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                {notification && (<Notification type={notification.type} message={notification.message}/>)}
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
         </S.Content>
     </S.Container> 
  )
    }

export default Form;