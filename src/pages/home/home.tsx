import * as C from "./style/style";
import { Gamification } from "../../components/ui/gamification/Gamification";
import { Header } from "../../components/ui/header/Header";
import { ProductsComponent } from "../../components/ui/products/ProductsComponent";

export const Home: React.FC = () => {
<<<<<<< HEAD
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
=======
    return (
        <>
        <C.ContainerHome>
            <Header textColor="white" />
            <C.BoxHome>
            <Gamification />
            </C.BoxHome>
        </C.ContainerHome>
        <ProductsComponent isToShow={true} />
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
        </>
    )
}