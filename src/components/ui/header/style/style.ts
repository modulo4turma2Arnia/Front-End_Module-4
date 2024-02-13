import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: -1rem;
    z-index: 9;
    font
    
`
export const FieldHeader = styled.div`
    padding: 3rem;
    display: flex;
    justify-content: center;
`
export const FieldImage = styled.div`
    display:  flex;
    align-items: center;
    gap: 1rem;
    margin-left: 4rem;
`

export const ImgCircle = styled.div`
  background-color: var(--primary--color-30);
  width: 4.3rem;
  height: 4rem;
  border-radius: 100%;
`;
export const Image = styled.img`
  background-color: transparent;
  width: 89%;
  height: 90%;
  border-radius: 100%;
  position: relative;
  top: 0.2rem;
  left: 0.25rem;
`;

export const FieldSpan = styled.div`

`
export const Greetings = styled.span`
    color: ${textColor => textColor.color};
    font-size: 24px;
`
export const Name = styled.span`
    color: ${textColor => textColor.color};
    font-weight: 600;
    font-size: 24px;
`
export const FieldMenu = styled.div`
    display: flex;
    align-items: center;
    color: white;
    gap: 4rem;
    margin-right: 7rem;
`
export const Home = styled.span`
    cursor: pointer;
    color: ${textColor => textColor.color};
    font-size: 18px;
`
export const Products = styled.span`
    cursor: pointer;
    color: ${color => color.color};
    font-size: 18px;
`
export const Perfil = styled.span`
    cursor: pointer;
    color: ${color => color.color};
    font-size: 18px;
`