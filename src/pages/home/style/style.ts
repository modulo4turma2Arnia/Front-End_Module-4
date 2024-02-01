import styled from 'styled-components'
import { CiSearch } from 'react-icons/ci'
import { SearchBoxProps } from '../../../types/searchProps/SearchBoxProps'

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
export const FieldSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SearchBox = styled.div<SearchBoxProps>`
    margin-top: -1.5rem;
    width: 50%;
    border: 1px solid gray;
    border-radius: 0.7rem;
    border: ${props => props.clicked ? '1px solid gray' : 'none'};
    display: flex;
    padding: 0.1rem;
    background-color: var(--background--color);
` 
export const IconWithMargin = styled(CiSearch)`
    margin: 0.5rem 0.6rem 0.5rem 1rem;
`
export const Search = styled.input`
    width: 83%;
    padding: 0.3rem;
    outline: none;
    border: none;    

    &::placeholder {
        font-size: 0.9rem;
    }
`
export const ContainerHero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`
export const FieldImageHero = styled.div`
    background-image: url("./src/assets/images/Background.png");
    background-repeat: no-repeat;
    width: 82%;
    overflow: hidden;
    margin-top: 3.8rem;
    border-radius: 1rem;
`