import styled from 'styled-components'

export const BackGroundHero = styled.div`
    width: 100%; 
    height: 100%; 
    background-color: rgba(80, 43, 107, 0.4); 
`;

export const ContainerHome = styled.main`
    background-image: url("./src/assets/images/Rectangle.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: rgba(80, 43, 107, 0.9); 
    width: 100vw;
    overflow: hidden;
    z-index: -1;
`
export const BoxHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9;
`