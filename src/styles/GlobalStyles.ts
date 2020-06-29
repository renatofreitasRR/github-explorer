import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        border: none;
    }

    html, body{
        background: #F0F0F5 url(${background}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }
    input, button, body{
        font: 16px Roboto, sans-serif;
    }

    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button{
        cursor: pointer;
    }
`;