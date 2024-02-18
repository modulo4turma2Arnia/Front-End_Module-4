import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import { SearchBoxProps } from "../../../../types/searchProps/SearchBoxProps";

export const Container = styled.div``;

export const FieldSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 1rem 0rem ;
`;
export const SearchBox = styled.div<SearchBoxProps>`
  margin-top: -3.5rem;
  width: 50%;
  border-radius: 0.7rem;
  border: ${(props) => (props.clicked ? "2px solid #4F1659" : "none")};
  display: flex;
  padding: 0.1rem;
  background-color: var(--background--color);
  box-shadow: 0px 5px 15px 4px #bbc0cd66;
`;
export const IconWithMargin = styled(CiSearch)`
  margin: 0.5rem 0.6rem 0.5rem 1rem;
`;
export const Search = styled.input`
  width: 83%;
  padding: 0.3rem;
  outline: none;
  border: none;

  &::placeholder {
    font-size: 0.9rem;
  }
`;

export const ContainerHero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`
export const FieldImageHero = styled.div`
    background-image: url("./src/assets/images/Background.png");
    background-repeat: no-repeat;
    width: 84%;
    overflow: hidden;
    margin-top: 3.8rem;
    border-radius: 1rem;
`
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 4rem;

  & .noUnderline {
    text-decoration: none;
  }
`;

export const FieldTitle = styled.div`
    width: 100%;
    display:flex;
    padding-top: 2rem;
`
export const HeadingThree = styled.h3`
    margin-left: 8.7%;
    margin-bottom: 1.4%;
    font-size: 24px;
`