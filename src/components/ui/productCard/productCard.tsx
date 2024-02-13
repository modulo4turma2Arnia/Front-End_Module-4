import { IoDiamondOutline } from "react-icons/io5";
import * as C from "./style/style";
import headphone from "../../../assets/images/headphone-2.png";
import { Link } from "react-router-dom";

export const ProductCard: React.FC = () => {
  return (
    <C.Container>
      <C.Img src={headphone}></C.Img>
      <C.Content>
        <C.Title>Headphone W820BT Bluetooth over-ear edifier</C.Title>
        <C.Details>
          <C.DetailName>Por:</C.DetailName>
          <C.Count>2</C.Count>
          <C.DiamondIcon>
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
        <Link to="/success-rescue">
          <C.RescueBtn>Resgatar</C.RescueBtn>
        </Link>
      </C.Content>
    </C.Container>
  );
};
