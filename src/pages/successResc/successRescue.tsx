import * as C from "./style/style";
import WoodImg from "../../assets/images/success-photo.png";
import { ProductRescuedCard } from "../../components/ui/productRescuedCard/productRescuedCard";
import { Header } from "../../components/ui/header/Header";

export const SuccessRescue: React.FC = () => {

  return (
    <>
      <Header textColor="#502B6B" />
      <C.Container>
        <C.Img src={WoodImg} alt="" />
        <ProductRescuedCard />
      </C.Container>
    </>
  )
}
