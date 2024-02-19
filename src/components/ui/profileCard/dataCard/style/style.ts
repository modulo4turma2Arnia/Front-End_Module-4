import styled from "styled-components";

export const ImgCircle = styled.div`
  background-color: var(--primary--color-30);
  width: 12.3rem;
  height: 12rem;
  border-radius: 100%;
  margin-top: 4rem;
  margin-left: 1rem;
`;

export const Image = styled.img`
  position: relative;
  background-color: transparent;
  width: 89%;
  height: 90%;
  border-radius: 100%;
  position: relative;
  top: 0.6rem;
  left: 0.7rem;
`;

export const FormContainer = styled.div`
  margin-top: 2rem;
  button {
    border:none;
    margin:1% 1%;
    cursor: pointer;
    color: dimgray;
    font-size: 10px;
  }
`;


export const BackModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding:2% 2%;
  display: flex; /* Usar flexbox */
  align-items: center; /* Centralizar verticalmente */
  justify-content: center; /* Centralizar horizontalmente */
  background-color: rgba(0, 0, 0, 0.5); /* Cor preta quase transparente */
  z-index: 999; /* Z-index alto para garantir que esteja acima de tudo */
`;


export const CardModal = styled.div`
background-color: #fff;
width: 50%;
display:flex;
border-radius: 10px;
padding:2% 2%;
align-items: center;
justify-content: center;
flex-direction: column;
.BtnClose {
  margin: 1px 0 0 99%;
  font-size: 1em;
  color: red;
  background-color: transparent;
}
.BtnModal {
color: #2b094f;
background-color: #b376f5;
margin: 2% 0;
font-size: 1em;
padding: 1% 4%;
border-radius: 5px;
}
input {
  padding-left:2%;
  border-radius: 6px;
  height: 30px;
  border: 1px solid dimgray;
}
`

export const Section = styled.div`
  margin-top: 0.3rem;
`;

export const Legend = styled.div`
  font-family: "Sora", sans-serif;
  text-decoration: none;
  position: relative;
  top: 2.4rem;
  left: 1rem;
  bottom: 1rem;
  color: gray;
  font-size: 14px;
  font-family: "Sora", sans-serif;
`;
export const Field = styled.div`
  width: 30rem;
  border-radius: 1rem;
  padding: 2.5rem 1rem 0.9rem 1.2rem;
  outline: none;
  border: lightgrey 1px solid;
  font-size: 1rem;
  box-shadow: 3px 5px 15px 0.1px lightgray;
`;
