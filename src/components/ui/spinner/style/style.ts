import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0%{ transform: rotate(0deg);}
    100%{ transform: rotate(360deg);}
`

export const FieldSpinner = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh;
    background-color: white;
`
export const BoxSpinner = styled.div`
    border: 16px solid #f3f3f3; 
    border-right: 16px solid #DAA520; 
    border-radius: 50%; 
    border-left: 16px solid #800080; 
    width: 80px; 
    height: 80px; 
    animation: ${spin} 2s linear infinite;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
`