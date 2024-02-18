// import styled from 'styled-components'
// import { CiSearch } from 'react-icons/ci'
// import { SearchBoxProps } from '../../../types/searchProps/SearchBoxProps'

// export const BackGroundHero = styled.div`
//     width: 100%; 
//     height: 100%; 
//     background-color: rgba(80, 43, 107, 0.4); 
// `;

// export const ContainerHome = styled.main`
//     background-image: url("./src/assets/images/Rectangle.jpg");
//     background-repeat: no-repeat;
//     background-size: 100% 100%;
//     background-color: rgba(80, 43, 107, 0.9); 
//     width: 100vw;
//     overflow: hidden;
//     z-index: -1;
// `
// export const BoxHome = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     z-index: 9;
// `
// export const FieldSearch = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `
// export const SearchBox = styled.div<SearchBoxProps>`
//     margin-top: -1.5rem;
//     width: 50%;
//     border-radius: 0.7rem;
//     border: ${props => props.clicked ? '2px solid #4F1659' : 'none'};
//     display: flex;
//     padding: 0.1rem;
//     background-color: var(--background--color);
// ` 
// export const IconWithMargin = styled(CiSearch)`
//     margin: 0.5rem 0.6rem 0.5rem 1rem;
// `
// export const Search = styled.input`
//     width: 83%;
//     padding: 0.3rem;
//     outline: none;
//     border: none;    

//     &::placeholder {
//         font-size: 0.9rem;
//     }
// `
// export const ContainerHero = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 2rem;
// `
// export const FieldImageHero = styled.div`
//     background-image: url("./src/assets/images/Background.png");
//     background-repeat: no-repeat;
//     width: 84%;
//     overflow: hidden;
//     margin-top: 3.8rem;
//     border-radius: 1rem;
// `
// export const ContainerCards = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 1.5rem;
//     margin-bottom: 4rem;

//     & .noUnderline {
//         text-decoration: none;
//     }
// `
// export const FieldTitle = styled.div`
//     width: 100%;
//     display:flex;
//     padding-top: 2rem;
// `
// export const HeadingThree = styled.h3`
//     margin-left: 8.7%;
//     margin-bottom: 1.4%;
//     font-size: 24px;
// `
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