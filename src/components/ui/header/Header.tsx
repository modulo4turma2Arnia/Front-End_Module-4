import * as C from "./style/style";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";

type HeaderProps = {
  textColor: string;
};

export const Header: React.FC = ({ textColor }: HeaderProps) => {
  return (
    <C.Header>
      <C.FieldHeader>
        <C.FieldImage>
          <C.ImgCircle>
            <C.Image src={avatar} />
          </C.ImgCircle>
          <C.FieldSpan>
            <C.Greetings color={textColor}>Olá, </C.Greetings>
            <C.Name color={textColor}>Avatar name</C.Name>
          </C.FieldSpan>
        </C.FieldImage>
      </C.FieldHeader>
      <C.FieldMenu>
        <Link to="/home">
          <C.Home color={textColor}>Inicio</C.Home>
        </Link>
        <C.Products color={textColor}>Produtos</C.Products>
        <Link to="/profile">
          <C.Perfil color={textColor}>Meu Perfil</C.Perfil>
        </Link>
      </C.FieldMenu>
    </C.Header>
  );
};
