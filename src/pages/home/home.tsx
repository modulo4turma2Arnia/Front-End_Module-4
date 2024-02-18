// import * as C from './style/style'
// import * as React from 'react';
// import { Link } from "react-router-dom";
// import { Gamification } from '../../components/ui/gamification/Gamification'
// import { Header } from '../../components/ui/header/Header'
// import { IconWithMargin } from './style/style'
// import { useRef } from 'react'
// import { useOutsideClick } from '../../hooks/useOutsideClick'
// import { ImageHero } from '../../components/ui/imageHeros/ImageHeros'
// import { Cards } from '../../components/ui/card/Card'
// import { CardProps } from '../../types/cardProps/CardProps'
// import { GetDataCards } from '../../requests/products'
// import { Spinner } from '../../components/ui/spinner/Spinner';
// import { ErrorComponent } from '../../components/ui/error/ErrorComponent';
// import { Product } from '../../types/product';

// export const Home: React.FC = () => {
//     const [products, setProducts] = React.useState<Array<CardProps>>([])
//     const [loading, setLoading] = React.useState(true)
//     const [error, setError] = React.useState<string | null>(null)
//     const [searchTerm, setSearchTerm] = React.useState('')
//     const [price, _] = React.useState('')
//     const ref = useRef<HTMLDivElement>(null)
//     const[clicked, setClicked] = React.useState(false)

//     useOutsideClick(ref, () => setClicked(false), () => setClicked(true))

//     React.useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const isPrice = !isNaN(Number(searchTerm))
//                 const name = isPrice ? '' : searchTerm
//                 const price = isPrice ? (searchTerm) : '' 
//                 const data = await GetDataCards(name, price)
//                 setProducts(data)  
//             } catch (err) {
//                 if(err instanceof Error){
//                     console.log(err.message)
//                 setError(err.message)
//             }
//             } finally {
//                 setTimeout(() => {
//                     setLoading(false)
//                 }, 2000)
//             }
//         }
//         fetchProducts()
//     }, [searchTerm, price])
    
//     if(loading) return <Spinner />
//     if(error) return <ErrorComponent/>

//     return (
//         <>  
//             <C.ContainerHome>
//                 <Header textColor="white"/>
//                 <C.BoxHome>
//                     <Gamification />      
//                 </C.BoxHome>
//             </C.ContainerHome>
//             <C.FieldSearch>
//                 <C.SearchBox 
//                     clicked={clicked} 
//                     onClick={(event: React.ChangeEvent<HTMLInputElement>) => {
//                         event.stopPropagation()
//                         setClicked(true)}}
//                     >
//                     <IconWithMargin size={30}/>
//                     <C.Search placeholder='O que você esta buscando? '
//                         type='text'
//                         value={searchTerm}
//                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
//                     />   
//                 </C.SearchBox>
//             </C.FieldSearch>
//             <C.ContainerHero>
//                 <C.FieldImageHero>
//                         <ImageHero />
//                 </C.FieldImageHero>
//             </C.ContainerHero>
//             <C.FieldTitle>
//                 <C.HeadingThree>Produtos para você</C.HeadingThree>
//             </C.FieldTitle>
//             <C.ContainerCards>
//                 {products.map((product: Product) => (
//                 <Link to={`/product/${product.id}`} className='noUnderline'>
//                     <Cards
//                         key={product.id} 
//                         product={product}
//                         isActive={true}
//                     />
//                 </Link>    
//                 ))}
//             </C.ContainerCards>
//         </>
//     )
// }
import * as C from "./style/style";
import { Gamification } from "../../components/ui/gamification/Gamification";
import { Header } from "../../components/ui/header/Header";
import { ProductsComponent } from "../../components/ui/products/ProductsComponent";

export const Home: React.FC = () => {
    return (
        <>
        <C.ContainerHome>
            <Header textColor="white" />
            <C.BoxHome>
            <Gamification />
            </C.BoxHome>
        </C.ContainerHome>
        <ProductsComponent isToShow={true} />
        </>
    )
}