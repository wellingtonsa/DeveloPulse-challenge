import styled from 'styled-components';

interface Props {
    type: 'success' | 'error'
}


export const Container = styled.div<Props>`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 55px;
    border-width: 1px;
    border-style: solid;
    background: ${({ type }) => type === 'success' ? '#02AD1375' : '#C1000075'};
    border-color: ${({ type }) => type === 'success' ? '#02AD1375' : '#C1000075'};

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

    img {
        margin-right: 10px;
        width: 35px;
        height: 35px;
    }
`;
