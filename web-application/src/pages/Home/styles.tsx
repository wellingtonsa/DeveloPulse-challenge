import styled from 'styled-components';
import path from 'constants/path';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(${path.images.IMAGE_BACKGROUND});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;   

    ::after {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        content: "";
        background: rgba(50, 47, 32, 0.5);
    }
`;
