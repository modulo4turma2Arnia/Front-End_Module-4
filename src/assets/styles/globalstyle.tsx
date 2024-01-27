import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{ 
    --primary--color: #502B6B;
    --primary--color-10: #734F8C;
    --primary--color-20: #AD8AC6;
    --primary--color-30: #DCB6F8;
    --secondary--color: #1F2A4D; 
    --secondary--color-10: #3E4C76; 
    --secondary--color-20: #63719C; 
    --secondary--color-30: #aebbe3; 
    --background--color: #FFFFFF;
    --success-color: #00C247;
    --warning-color: #FFE16A;
    --danger--color: #FF3333;
} 

body{
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
    margin: 0;
    padding: 0;
    background-color: var(--background--color);
    font-family: 'Sora', sans-serif;
}
`;

export default GlobalStyle;
