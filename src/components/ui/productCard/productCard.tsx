import * as C from "./style/style";
import { IoDiamondOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CardProps } from "../../../types/cardProps/CardProps";
import React from "react";
import { GetDataCards } from "../../../requests/products";


export const ProductCard: React.FC = () => {
  const [product, setProduct] = React.useState<CardProps | null>(null)
  
  React.useEffect(() => {
    const fetchProductData = async () => {
      try {
        const cardsData = await GetDataCards()
        setProduct(cardsData[0])
      } catch (err) {
        if(err instanceof Error){
          console.error(err.message)
        }
      }
    }
    fetchProductData()
  }, [])
  
  let firstHalf = ""
  let secondHalf = ""

  if(product?.description){
    let parts = product.description.split(/\s+/g);
    firstHalf = parts.slice(0, parts.length / 2).join(" ")
    secondHalf = parts.slice(parts.length / 2).join(" ")
  }

  return (
    <C.Container>
      <div><C.Img src={product?.image}></C.Img></div>
      <C.Content>
        <C.Title>Headphone W820BT Bluetooth over-ear edifier</C.Title>
        <C.Details>
          <C.DetailName>Por:</C.DetailName>
          <C.Count>2</C.Count>
            <IoDiamondOutline />
        </C.Details>
        <C.Description>
          {firstHalf}
          <C.Space></C.Space>
          <C.Space></C.Space>
          {secondHalf}
        </C.Description>
        <Link to="/success-rescue">
          <C.RescueBtn>Resgatar</C.RescueBtn>
        </Link>
      </C.Content>
    </C.Container>
  )
}
