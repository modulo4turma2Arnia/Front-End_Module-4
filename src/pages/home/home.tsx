import * as C from './style/style'
import { Gamification } from '../../components/ui/gamification/Gamification'
import { Header } from '../../components/ui/header/Header'
import { IconWithMargin } from './style/style'
import React, { useRef } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { ImageHero } from '../../components/ui/imageHeros/ImageHeros'
import { Cards } from '../../components/ui/card/Card'
import { CardProps } from '../../types/cardProps/CardProps'
import { GetDataCards } from '../../requests/products'

export const Home: React.FC = () => {
    const [products, setProducts] = React.useState<Array<CardProps>>([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const[clicked, setClicked] = React.useState(false)

    useOutsideClick(ref, () => setClicked(false), () => setClicked(true))

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await GetDataCards()
                console.log("Dados da API:", data)
                setProducts(data)
            } catch (err) {
                if(err instanceof Error){
                setError(err.message)
            }
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])
    
    if(loading) return <div>Carregando...</div>
    if(error) return <div>Erro ao carregar produtos: {error}</div>

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
            <C.FieldTitle>
                <C.HeadingThree>Produtos para você</C.HeadingThree>
            </C.FieldTitle>
            <C.ContainerCards>
                {products.map((product) => (
                    <Cards key={product.id} product={product}/>
                ))}
                {/* <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards /> */}
            </C.ContainerCards>
        </>
    )
}

