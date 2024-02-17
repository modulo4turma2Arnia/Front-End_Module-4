import React from "react";
import * as C from "./style/style";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";
import { HeaderProps } from "../../../types/headerProps/HeaderProps";
import { GetDataUser } from "../../../requests/register";

export const Header: React.FC<HeaderProps> = ({ textColor }) => {
  const [userName, setUserName] = React.useState('')

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        await GetDataUser()
      const firstName = localStorage.getItem('userFirstName');
      if(firstName){
        setUserName(firstName)
      }
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])
  

  return (
    <C.Header>
      <C.FieldHeader>
        <C.FieldImage>
          <C.ImgCircle>
            <C.Image src={avatar} />
          </C.ImgCircle>
          <C.FieldSpan>
            <C.Greetings color={textColor}>Olá, </C.Greetings>
            <C.Name color={textColor}>{userName}</C.Name>
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
  )
}
