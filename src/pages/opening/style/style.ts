import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./src/assets/images/heavenly.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgba(80, 43, 107, 0.4); 
`;

export const Box = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 991;
`;

export const Logo = styled.img`
  width: 130%;
  min-width: 22rem;
  margin-bottom: 1.6rem;
  max-width: 31rem;
  z-index: 991;
`;
export const FieldImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FieldButton = styled.div`
  display: flex;
  justify-content: center;
  z-index: 991;
`;
export const Button = styled.button`
  width: 72%;
  height: 3.5rem;
  background-color: #502b6b;
  background-color: #dcb6f8;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-family: "Sora", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #502b6b;
  letter-spacing: 0.3px;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  z-index: 991;
  width: 100%;
  background-color: white;
  border-radius: 40px;
  transform: translateX(29%);
  &.show {
    transform: translateX(0);
  }
  
`;

export const Form = styled.form`
  padding: 10rem;
  margin-left: 2.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  color: var(--primary--color);
  font-family: 'Sora', sans-serif;
  font-size: 1.2rem;
`;

export const Heading2 = styled.h2`
  color: var(--primary--color);
  font-family: 'Sora', sans-serif;
  font-size: 32px;
  margin-bottom: 0.8rem;
  font-weight: 800;
`;

export const Legend = styled.legend`
  font-family: 'Sora', sans-serif;
  text-decoration: none;
  position: relative;
  top: 1.8rem;
  left: 1rem;
  bottom: 1rem;
  color: gray;
  font-size: 14px;
  font-family: "Sora", sans-serif;
`;
export const Input = styled.input`
  width: 74%;
  border-radius: 1rem;
  padding: 2.2rem 1rem 0.5rem 1.2rem;
  outline: none;
  border: var(--primary--color) 1px solid;
  font-size: 1rem;
`;
export const InputWrapper = styled.div`
`;

export const LabelRemeber = styled.label`
display:flex;
padding: 2% 1%;
margin-top: -25px;
align-items: center;

 input {
  margin: 0 2%;
 }  
`

export const IconWrapper = styled.div`
  position: relative;
  left: 17rem;
  bottom: 2.6rem;
  color: var(--primary--color);
  cursor: pointer;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary--color);
  width: 83%;
  border-radius: 10px;
  padding: 1.2rem;
  font-family: "Sora", sans-serif;
  font-size: 18px;
  outline: none;
  color: white;
  border: var(--primary--color) 1px solid;
  font-weight: 700;
  cursor: pointer;
`;
