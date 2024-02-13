import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem;
  margin-left: 15rem;
  margin-right: 12rem;
  display: flex;
  gap: 10rem;
`;

export const Img = styled.img`
  width: auto;
  height: 20rem;
`;

export const Content = styled.div``;

export const Title = styled.div`
  font-family: Sora, sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 2rem;
`;

export const Details = styled.div`
  display: flex;
  font-family: Sora, sans-serif;
  color: var(--primary--color);
  font-size: 18px;
  gap: 0.4rem;
  align-items: center;
`;

export const DetailName = styled.div``;

export const Count = styled.div`
  font-weight: 700;
`;

export const DiamondIcon = styled.div``;

export const Description = styled.div`
  font-family: Sora, sans-serif;
  font-family: 16px;
  margin-top: 2rem;
  color: #616161;
`;

export const RescueBtn = styled.button`
  background-color: var(--primary--color);
  width: 15rem;
  height: 4rem;
  color: white;
  font-size: 18px;
  font-family: Sora, sans-serif;
  font-weight: 700;
  border-radius: 16px;
  margin-top: 3rem;
  cursor: pointer;
`;
