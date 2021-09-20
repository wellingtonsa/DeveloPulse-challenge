import React, { useState, useEffect }from 'react';
import constants from 'constants/index';
import Input from 'common/styled/Input';
import Dropdown from 'common/styled/Dropdown';
import Button from 'common/styled/Button';
import { getCitiesByState } from 'services/location.services';
import * as S from './styles';

const Form: React.FC = () => {
    const [cities, setCities] = useState([]);
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        if(state){
            getCitiesByState(state)
            .then(res => {
                setCities(res);
                setCity('');

            })
        }
    }, [state]);

    return (
     <S.Container>
         <S.Content>
            <div className="form-header">
                <h1>Contact Us</h1>
            </div>
            <div className="form-content">
                <div className="form-content-fields">
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                </div>
                <div className="form-content-fields">
                <Input placeholder="Street Address"/>
                </div>
                <div className="form-content-fields">
                <Input placeholder="Unit/Apt"/>
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
                <Input placeholder="E-mail"/>
                </div>
                <Button>Submit</Button>
            </div>
         </S.Content>
     </S.Container> 
  )
    }

export default Form;