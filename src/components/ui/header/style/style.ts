import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: -1rem;
    z-index: 9;
    
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
export const Image = styled.img`
    background-color: transparent;
    width:4rem;
    border-radius: 100%;
`
export const FieldSpan = styled.div`

`
export const Greetings = styled.span`
    color: ${textColor => textColor.color};
`
export const Name = styled.span`
    color: ${textColor => textColor.color};
    font-weight: 600;
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
`
export const Products = styled.span`
    cursor: pointer;
    color: ${color => color.color};
`
export const Perfil = styled.span`
    cursor: pointer;
    color: ${color => color.color};
`