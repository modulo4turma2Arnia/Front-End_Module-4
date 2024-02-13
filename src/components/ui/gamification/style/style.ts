import styled from 'styled-components'

export const FieldGame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    z-index: 9;
`
export const Points = styled.h1`
    font-family: Guardians;
    color: var(--primary--color-30);
    font-size: 3.5rem;
    margin-bottom: -1rem;
`
export const Balance = styled.h3`
    font-family: 'Sora', sans-serif;
    font-weight: 400;
    color: var(--background--color);
` 
export const ParagraphOne =  styled.p`
    margin-bottom: 1rem;
    font-family: 'Sora', sans-serif;
    font-weight: 400;
    color: var(--background--color);
`
export const ParagraphTwo = styled.p`
    font-family: 'Sora', sans-serif;
    font-weight: 400;
    margin: 0.8rem 0 1.5rem 0;
    color: var( --background--color);
`
export const FieldJewels = styled.div`

`
export const JewelsImg = styled.img`
    margin: -0.75rem;
    width: 4rem;
`
export const Inline = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`
export const Calendar = styled.span`
    display: flex;
    align-items: center;
    margin-top: 0.9em;
    color: var( --background--color);
    background-color: var(--black--color);
    padding: 0.1rem 0.8rem 0.4rem 0.8rem;
    border-radius: 1rem;
`
export const Cycle = styled.span`
    margin: 0.3rem 0 0 0.5rem;
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    letter-spacing: 0.025rem;
`