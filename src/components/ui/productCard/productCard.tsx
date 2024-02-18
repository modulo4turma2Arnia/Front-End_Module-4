import * as C from "./style/style";
import * as React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { CardProps } from "../../../types/cardProps/CardProps";
import { GetProduct } from "../../../requests/product_id";

export const ProductCard: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = React.useState<CardProps | null>(null)
  
  React.useEffect(() => {
    const fetchProductData = async () => {
      try {
        const cardData = await GetProduct(Number(id))
        setProduct(cardData)
      } catch (err) {
        if(err instanceof Error){
          console.error(err.message)
        }
      }
    }
    fetchProductData()
  }, [id])
  
  let firstHalf = ""
  let secondHalf = ""

  if(product?.description){
    let parts = product.description.split(/\s+/g);
    firstHalf = parts.slice(0, parts.length / 2).join(" ")
    secondHalf = parts.slice(parts.length / 2).join(" ")
  }

  return (
    <C.Container>
      <C.FieldImage>
        <C.Img src={product?.image}></C.Img>
      </C.FieldImage>
      <C.Content>
        <C.Title>{product?.name}</C.Title>
        <C.Details>
          <C.DetailName>Por:</C.DetailName>
          <C.Count>{product?.price}</C.Count>
            <IoDiamondOutline />
        </C.Details>
        <C.Description>
          {firstHalf}
          <C.Space></C.Space>
          <C.Space></C.Space>
          {secondHalf}
        </C.Description>
        <Link to={`/success-rescue/${product?.id}`}>
          <C.RescueBtn>Resgatar</C.RescueBtn>
        </Link>
      </C.Content>
    </C.Container>
  )
}
