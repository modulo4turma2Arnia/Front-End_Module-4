import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ImgField = styled.div`
  border: 0.1rem solid #eeeeee;
  width: 2.8rem;
  height: 3rem;
  padding: 0.1rem;
  border-radius: 10%;
`;

export const Img = styled.img`
  width: 4.7rem;
  position: relative;
  top: 0.2rem;
  right: 0.8rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
export const Title = styled.div`
  font-family: Sora, sans-serif;
  font-weight: 700;
  font-size: 20px;
`;
export const Count = styled.div`
  color: var(--custom--gray--color);
  font-size: 15px;
  font-family: Sora, sans-serif;
`;
export const Description = styled.div`
  font-family: Sora, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #616161;
`;
