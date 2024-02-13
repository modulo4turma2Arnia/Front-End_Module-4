import { IoDiamondOutline } from "react-icons/io5";
import Headphone from "../../../assets/images/headphone-2.png";
import * as C from "./style/style";
import { Link } from "react-router-dom";

export const ProductRescuedCard: React.FC = () => {
  return (
    <C.Container>
      <C.Title>Produto resgatado com sucesso!</C.Title>
      <C.ProductInfo>
        <C.Img src={Headphone}></C.Img>
        <C.ProductContent>
          <C.ProductTitle>
            Headphone W820BT Bluetooth over-ear edifier
          </C.ProductTitle>
          <C.Details>
            <C.DetailName>Por:</C.DetailName>
            <C.Count>2</C.Count>
            <C.DiamondIcon>
              <IoDiamondOutline />
            </C.DiamondIcon>
          </C.Details>
        </C.ProductContent>
      </C.ProductInfo>
      <C.Description>
        Aqui irá um texto explicando como o produto será retirado.
      </C.Description>
      <C.BalanceContainer>
        <C.BalanceTitle>Meu saldo:</C.BalanceTitle>
        <C.Count>4</C.Count>
        <C.DiamondIcon>
          <IoDiamondOutline />
        </C.DiamondIcon>
      </C.BalanceContainer>
      <Link to="/home">
        <C.ReturnBtn>Voltar à página inicial</C.ReturnBtn>
      </Link>
    </C.Container>
  );
};
