import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    

    body {
        font-family: 'Poppins', sans-serif;
        background-color: #e2eafc;
    }
    `;

export default Global;
