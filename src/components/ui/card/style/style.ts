import styled from 'styled-components'

export const BoxCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const FieldImgCard = styled.div`

`
export const Imgcard = styled.img`
    width: 16.6rem;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
    border-radius:1rem;
`
export const BoxDescription = styled.div``
export const FieldDescription = styled.div`
    margin-left: .6rem;
    padding-left: .6rem;
`
export const HeadingFive = styled.h5``
export const Paragraph = styled.p`
    font-family: 'Sora', sans-serif;
    font-size: .8rem;
    color: var(--custom--gray--color);
    margin-bottom: .8rem ;
`
export const FieldButton = styled.div`
    display: flex;
    justify-content: center;
`
export const BtnRescue = styled.button`
    background-color: var(--primary--color);
    color: var(--background--color);
    width:95%;
    padding: .6rem;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: .5rem;
`