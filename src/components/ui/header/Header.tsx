import { useState } from "react";
import * as C from "./style/style";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";
import { HeaderProps } from "../../../types/headerProps/HeaderProps";
<<<<<<< HEAD
import { GetDataUser } from "../../../requests/register";

export const Header: React.FC<HeaderProps> = ({ textColor }) => {
  const [userName, setUserName] = React.useState('')
=======
import { GetDataUser } from "../../../requests/dataUsers";
import * as React from "react";

export const Header: React.FC<HeaderProps> = ({ textColor }) => {
  const [userName, setUserName] = React.useState('')
  const [userImage, setUserImage] = React.useState('')
  const [lastName, setLastName] = useState('')
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
<<<<<<< HEAD
        await GetDataUser()
      const firstName = localStorage.getItem('userFirstName');
      if(firstName){
        setUserName(firstName)
=======
        const user = await GetDataUser()
      setUserName(user.FirstName)
      setLastName(user.LastName)
      setUserImage(user.profileImage)

      //teste
      if(user.credits != null ){
        localStorage.setItem("CREDITS", user.credits)
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
      }
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [userName, userImage, lastName])
  

  return (
    <C.Header>
      <C.FieldHeader>
        <C.FieldImage>
          <C.ImgCircle>
            <C.Image src={avatar} />
          </C.ImgCircle>
          <C.FieldSpan>
            <C.Greetings color={textColor}>Olá, </C.Greetings>
            <C.Name color={textColor}>{userName} {lastName}</C.Name>
          </C.FieldSpan>
        </C.FieldImage>
      </C.FieldHeader>
      <C.FieldMenu>
      <Link to="/home" style={{textDecoration: 'none'}}>
          <C.Home color={textColor}>Inicio</C.Home>
        </Link>
        <Link to="/products" style={{textDecoration: 'none'}}>
          <C.Products color={textColor}>Produtos</C.Products>
        </Link>
        <Link to="/profile" style={{textDecoration: 'none'}}>
          <C.Perfil color={textColor}>Meu Perfil</C.Perfil>
        </Link>
      </C.FieldMenu>
    </C.Header>
  )
}
