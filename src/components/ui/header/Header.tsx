import { useState } from "react";
import * as C from "./style/style";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg"
import { HeaderProps } from "../../../types/headerProps/HeaderProps";
import { GetDataUser } from "../../../requests/dataUsers";
import * as React from "react";

export const Header: React.FC<HeaderProps> = ({ textColor }) => {
  const [userName, setUserName] = React.useState('')
  const [userImage, setUserImage] = React.useState('')
  const [lastName, setLastName] = useState('')

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await GetDataUser()
      setUserName(user.FirstName)
      setLastName(user.LastName)
      setUserImage(user.profileImage)

      //teste
      if(user.credits != null ){
        localStorage.setItem("CREDITS", user.credits)
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
            <C.Image src={userImage || avatar} />
          </C.ImgCircle>
          <C.FieldSpan>
            <C.Greetings color={textColor}>Olá, </C.Greetings>
            <C.Name color={textColor}>{userName} {lastName}</C.Name>
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
