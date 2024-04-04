import { ProfileCard } from "../profileCard";
import * as C from "./style/style";
import avatar from "../../../../assets/images/avatar.jpg";
<<<<<<< HEAD
import { UserDataProps } from "../../../../types/userProps/UserProps";


export const DataCard = (data: any) => {
  const userInfo: UserDataProps = data.dataUser

  return (
=======
import { DataCardProps } from "../../../../types/dataCardProps/DataCardProps";
import { useState } from "react";

export const DataCard: React.FC<DataCardProps> = ({ dataUser }) => {
  const userInfo = dataUser
 const [show, setShowModal] = useState(false)

 const handleshow = () => {
  setShowModal(!show)
 }

 

 return (
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
    <>
      <ProfileCard title="Meus Dados">
        <C.ImgCircle>
          <C.Image src={userInfo.profileImage ? userInfo.profileImage : avatar} />
        </C.ImgCircle>
        <C.FormContainer>
          <C.Section>
            <C.Legend>Nome</C.Legend>
<<<<<<< HEAD
            <C.Field>{userInfo.FirstName}</C.Field>
=======
            <C.Field>{userInfo.FirstName} {userInfo.LastName}</C.Field>
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592
          </C.Section>
          <C.Section>
            <C.Legend>E-mail</C.Legend>
            <C.Field>{userInfo.email}</C.Field>
          </C.Section>

          <button onClick={handleshow}>Alterar Senha</button>
          {show && 
              <C.BackModal>
              <C.CardModal>
              <button className="BtnClose" onClick={handleshow}>X</button>
              <p>Senha Atual:</p>
              <input type="password" name="currentPassword" />

              <p>Nova senha:</p>
              <input type="password" name="newPassword" />

              <button className="BtnModal">Salvar</button>
              </C.CardModal>
            </C.BackModal>
          }
      
        </C.FormContainer>
      </ProfileCard>
    </>
  )
}