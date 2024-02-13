import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 12rem;
  left: 33rem;
  width: 40rem;
  height: auto;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
  border-radius: 40px;
  box-shadow: 1px 1px 14px 2px lightgray;
  margin-bottom: 5rem;
`;

export const Title = styled.div`
  font-size: 24px;
  font-family: Sora, sans-serif;
  color: var(--black--color);
  font-weight: 700;
`;

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
`;

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
