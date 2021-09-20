import React from 'react';
import Input from 'common/styled/Input';
import Button from 'common/styled/Button';
import * as S from './styles';

const Form: React.FC = () => (
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
                <Input placeholder="Province/Territory/State"/>
                <Input placeholder="City"/>
                </div>                
                <div className="form-content-fields">
                <Input placeholder="E-mail"/>
                </div>
                <Button>Submit</Button>
            </div>
         </S.Content>
     </S.Container> 
  )

export default Form;