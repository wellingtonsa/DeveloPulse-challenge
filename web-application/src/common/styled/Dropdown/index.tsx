import React from 'react';
import Input from '../Input';
import * as S from './styles';


interface Props {
    data: string[],
    type: string,
    placeholder: string,
    value: string,
    onChange: (value:string) => void
}

function Dropdown({ data, type, placeholder, value, onChange }:Props): React.ReactElement {
    return (
        <>
        <Input value={value} onChange={(e) => { onChange(e.target.value) }}  onFocus={() => onChange('')} placeholder={placeholder} list={`list-${type}`} name={type} id={type}/>
        <S.Container id={`list-${type}`}>
            {data.map(op => (
                <option value={op}>{op}</option>
            ))}
        </S.Container>
        </>
    )
} 

export default Dropdown;