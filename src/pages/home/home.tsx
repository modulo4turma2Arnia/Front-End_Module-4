import * as C from './style/style'
import { Link } from "react-router-dom";
import { Gamification } from '../../components/ui/gamification/Gamification'
import { Header } from '../../components/ui/header/Header'
import { IconWithMargin } from './style/style'
import React, { useRef } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { ImageHero } from '../../components/ui/imageHeros/ImageHeros'
import { Cards } from '../../components/ui/card/Card'
import { CardProps } from '../../types/cardProps/CardProps'
import { GetDataCards } from '../../requests/products'
import { Spinner } from '../../components/ui/spinner/Spinner';
import { ErrorComponent } from '../../components/ui/error/ErrorComponent';

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
                if(Array.isArray(data)){
                    setProducts(data)
                } else {
                    setProducts([data])
                }
                
            } catch (err) {
                if(err instanceof Error){
                    console.log(err.message)
                setError(err.message)
            }
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            }
        }
        fetchProducts()
    }, [])
    
    if(loading) return <Spinner />
    if(error) return <ErrorComponent/>

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
                <Link to="/product" className='noUnderline'>
                    <Cards
                        key={product.id} 
                        product={product}
                        isActive={true}
                    />
                </Link>    
                ))}
            </C.ContainerCards>
        </>
    )
}
