import styled from 'styled-components'

export const Container = styled.div`
    background-image: url('./src/assets/images/heavenly.jpg');  
    background-repeat: no-repeat;
    background-size: 100% 100%;     
`

export const Box = styled.main`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Img = styled.img`
    width: 100%;
`
export const FieldImg = styled.div`
    display: flex;
    padding: 1rem;
    gap: 3rem;
    flex-direction: column;
    justify-content: center;
`
export const FieldButton = styled.div`
    display: flex;
    justify-content: center;
`
export const Button = styled.button`
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    font-family: Sora;
    font-style: normal;
    font-size: 0.9rem;
    font-weight: 700;
    color:  #502B6B;
    width: 72%;
    letter-spacing: 0.3px;
    background-color: #502B6B;
    background-color: #DCB6F8;
`
export const Form = styled.form`    
    transform: translateX(100%);
    &.show{
        transform: translateX(0);
    }
`
export const Paragraph =  styled.p`

`
export const Heading2 = styled.h2`

`
export const Fieldset =  styled.fieldset`

`
export const Legend = styled.legend`

`
export const Input = styled.input`

`
export const InputWrapper = styled.div`

`
export const IconWrapper = styled.div`

`
export const ButtonWrapper = styled.button`

`