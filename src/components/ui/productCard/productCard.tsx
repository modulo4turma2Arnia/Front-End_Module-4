<<<<<<< HEAD
import { IoDiamondOutline } from "react-icons/io5";
import * as C from "./style/style";
import headphone from "../../../assets/images/headphone-2.png";
import { Link } from "react-router-dom";

export const ProductCard: React.FC = () => {
  return (
    <C.Container>
      <C.Img src={headphone}></C.Img>
=======
import * as C from "./style/style";
import * as React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { CardProps } from "../../../types/cardProps/CardProps";
import { GetProduct } from "../../../requests/product_id";
import { RedeemProduct } from "../../../requests/products";

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

  const reedem = async () => {
    await RedeemProduct(product?.id)
  }

  return (
    <C.Container>
      <C.FieldImage>
        <C.Img src={product?.image}></C.Img>
      </C.FieldImage>
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
      <C.Content>
        <C.Title>{product?.name}</C.Title>
        <C.Details>
          <C.DetailName>Por:</C.DetailName>
<<<<<<< HEAD
          <C.Count>2</C.Count>
          <C.DiamondIcon>
=======
          <C.Count>{product?.price}</C.Count>
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
            <IoDiamondOutline />
          </C.DiamondIcon>
        </C.Details>
        <C.Description>
          O Fone de ouvido Headphone Bluetooth Edifier W820BT 80 Horas é um fone
          completo que oferece um áudio preciso em seus agudos e graves, com
          total conforto e equilíbrio que um Over-Ear pode lhe oferecer.
          <br></br>
          <br></br>
          <p>
            {" "}
            Experimente áudio de altíssima qualidade, garantida por meio de uma
            conexão sem fio com sinal firme e estável, otimizada pela tecnologia
            CSR adicionada ao Bluetooth 4.1
          </p>
        </C.Description>
        <Link to={`/success-rescue/${product?.id}`}>
          <C.RescueBtn onClick={reedem}>Resgatar</C.RescueBtn>
        </Link>
      </C.Content>
    </C.Container>
  );
};
