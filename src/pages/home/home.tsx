import * as C from './style/style'
import { Gamification } from '../../components/ui/gamification/Gamification'
import { Header } from '../../components/ui/header/Header'
import { IconWithMargin } from './style/style'
import React, { useRef } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { ImageHero } from '../../components/ui/imageHeros/ImageHeros'

export const Home: React.FC = () => {
    const[clicked, setClicked] = React.useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useOutsideClick(ref, () => setClicked(false), () => setClicked(true))

    return (
        <>  
            <C.ContainerHome>
                <Header textColor="white"/>
                <C.BoxHome>
                    <Gamification />      
                </C.BoxHome>
            </C.ContainerHome>
            <C.FieldSearch>
                <C.SearchBox 
                    clicked={clicked} 
                    onClick={(event) => {
                        event.stopPropagation()
                        setClicked(true)}}
                    >
                    <IconWithMargin size={30}/>
                    <C.Search placeholder='O que você esta buscando? '/>   
                </C.SearchBox>
            </C.FieldSearch>
            <C.ContainerHero>
                <C.FieldImageHero>
                        <ImageHero />
                </C.FieldImageHero>
            </C.ContainerHero>
        </>
    )
}

