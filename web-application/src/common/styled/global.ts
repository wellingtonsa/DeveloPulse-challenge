import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        color: #f9f2f2;
        
    }
    html, body, #root {
        height: 100%;
    }
    body {
        font-size: 14px;
        front-family: "Lato", Helvetica, sans-serif;
        background: #FFF;
        -webkit-font-smoothing: antialiased !important;
    }
    button {
        cursor: pointer;
    }
    
`;
