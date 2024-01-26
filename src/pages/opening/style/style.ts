import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./src/assets/images/heavenly.jpg");
  background-repeat: no-repeat;
  background-size: 100% 122%;
`;

export const Background = styled.div`
  position: absolute;
  background-image: linear-gradient(30deg, #281535, #131b2f);
  height: 100vh;
  width: 100vw;
  opacity: 80%;
`;

export const Box = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 31rem;
  height: 10.4rem;
  position: relative;
  top: 8rem;
`;
export const FieldImg = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  gap: 11rem;
  flex-direction: column;
  justify-content: center;
`;
export const FieldButton = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  width: 72%;
  height: 4.5rem;
  background-color: #502b6b;
  background-color: #dcb6f8;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-family: Sora;
  font-style: normal;
  font-size: 1.2rem;
  font-weight: 700;
  color: #502b6b;
  letter-spacing: 0.3px;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  transform: translateX(100%);
  position: relative;
  right: 560px;
  height: 28rem;
  width: 33rem;
  padding-left: 10rem;
  padding-top: 15rem;
  background-color: white;
  border-radius: 10%;
  &.show {
    transform: translateX(0);
  }
`;

export const Form = styled.form``;

export const Paragraph = styled.p`
  color: var(--primary--color);
  font-family: Sora;
  font-size: 18px;
`;

export const Heading2 = styled.h2`
  color: var(--primary--color);
  font-family: "Sora";
  font-size: 32px;
  width: 20rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
`;

export const Fieldset = styled.fieldset`
  border: none;
`;
export const Legend = styled.legend`
  text-decoration: none;
  position: relative;
  top: 22px;
  left: 5px;
  color: gray;
  font-size: 14px;
`;
export const Input = styled.input`
  width: 18rem;
  height: 1.5rem;
  border-radius: 10px;
  padding: 1rem;
  outline: none;
  border: var(--primary--color) 1px solid;
`;
export const InputWrapper = styled.div``;
export const IconWrapper = styled.div`
  position: relative;
  left: 18rem;
  bottom: 2.4rem;
  color: var(--primary--color);
`;

export const ButtonWrapper = styled.button``;
