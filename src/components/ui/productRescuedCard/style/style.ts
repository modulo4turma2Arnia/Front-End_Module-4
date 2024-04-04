import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 12rem;
  gap: 6rem;
`;
export const Box = styled.div`
  
`
export const Image = styled.img`
  width:370px;
  height: 434px;
`
export const Title = styled.div`
  font-family: Sora, sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Img = styled.img`
  width: 5rem;
`;

export const ProductTitle = styled.div`
  width: 14rem;
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

export const Count = styled.span`
  font-weight: 700;
  display: flex;
`;

export const DiamondIcon = styled.div`
  color: var(--primary--color);
`;

export const Description = styled.div`
  margin-top: 2rem;
  width: 56%;
  color: #757575;
  font-size: 18px;
`;

export const BalanceContainer = styled.div`
  background-color: #efefef;
  width: 12rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-family: Sora, sans-serif;
  gap: 0.4rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 1.4rem;
`;

export const BalanceTitle = styled.span`
  font-family: Sora, sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

export const ReturnBtn = styled.button`
  background-color: var(--background--color);
  width: 15rem;
  padding: 0.8rem;
  border: 0.15rem solid var(--primary--color);
  border-radius: 16px;
  font-family: Sora, sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-top: 2.4rem;
  color: var(--primary--color);
  cursor: pointer;
`;
