import * as React from "react";
import * as C from "./style/style";
import successPhoto  from '../../../assets/images/successPhoto.png'
import { IoDiamondOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { CardProps } from "../../../types/cardProps/CardProps";
import { GetProduct } from "../../../requests/product_id";
import { Header } from "../header/Header";


export const ProductRescuedCard: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = React.useState<CardProps | null>(null)
  const [credits, setCredits] = React.useState<string | null>("0")
  
  React.useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = await GetProduct(Number(id))
        setProduct(productData)
      } catch (err) {
        if(err instanceof Error){
          console.error(err.message)
        }
      }
      const storedCredits = localStorage.getItem("CREDITS")
      if(storedCredits != null){
        setCredits(storedCredits.length < 2 ? `0${storedCredits}` : storedCredits)
      }
    }
    fetchProductData()
  }, [id])

    // Calculando o saldo após a compra do produto
    const remainingCredits = product ? (parseInt(credits || "0") - product.price) : 0;


  return (
    <>
    <Header textColor="#502B6B" />
    <C.Container>
      <div><C.Image src={successPhoto} alt="" /></div>
      <C.Box>
        <C.Title>Produto resgatado com sucesso!</C.Title>
        <C.ProductInfo>
          <C.Img src={product?.image}></C.Img>
          <C.ProductContent>
            <C.ProductTitle>
              {product?.name}
            </C.ProductTitle>
            <C.Details>
              <C.DetailName>Por:</C.DetailName>
              <C.Count>{product?.price}</C.Count>
                <IoDiamondOutline />
            </C.Details>
          </C.ProductContent>
        </C.ProductInfo>
        <C.Description>
          A retirada do produto poderá ser feita pessoalmente em nosso estabelecimento
        </C.Description>
        <C.BalanceContainer>
        <C.BalanceTitle>Meu saldo:</C.BalanceTitle>
        
          <C.Count>
          {remainingCredits >= 0 ? remainingCredits : "Saldo insuficiente"}
            {/* {credits && credits.length < 2 ? `0${credits}` : credits} */}
            
            </C.Count>
            <IoDiamondOutline />
        </C.BalanceContainer>
        <Link to="/home">
          <C.ReturnBtn>Voltar à página inicial</C.ReturnBtn>
        </Link>
      </C.Box>
    </C.Container>
    </>
  )
}
