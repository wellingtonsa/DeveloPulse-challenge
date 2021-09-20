import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 38px;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #EEE;
    background: #FaFaFa;

    :focus {
        border-bottom: 2px solid #969696;
    }

    ::placeholder {
        font-style: normal;
        font-size: 16px;
        display: flex;
        padding-left: 10px;
        color: #a1a1a1;     
    }
`;

export default Input;