import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 5;
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    width: 100%;
    height:min-content;
    max-width: 700px;
    background: #FFF;
    padding: 40px;

    .form-header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        margin-bottom: 30px;

        h1 {
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 31px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #000000;
        }
    }

    .form-content {
        display: flex;
        width: 100%;
        flex-direction: column;

        .form-content-fields {
            display: flex;
            gap: 50px;
            width: 100%;
            margin: 20px 0;
        }

        button {
            margin-top: 35px;
        }
    }
`;
