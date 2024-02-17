import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  width: 20rem;
  height: 3rem;
  border-radius: 40%;
`;

export const MenuLine = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconSquare = styled.div`
  background-color: var(--primary--color-30);
  width: 3rem;
  height: 3rem;
  border-radius: 20%;
`;

export const Icon = styled.div`
  margin: 0.4rem;
  color: var(--primary--color);
`;

export const MenuOption = styled.div`
  font-family: "Sora", sans-serif;
  color: var(--primary--color);
  font-weight: 400;
  z-index: 2;
  text-decoration: none;
  text-decoration-line: none;
`;
