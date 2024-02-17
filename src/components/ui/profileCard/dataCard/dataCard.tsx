import { ProfileCard } from "../profileCard";
import * as C from "./style/style";
import avatar from "../../../../assets/images/avatar.jpg";
import { UserDataProps } from "../../../../types/userProps/UserProps";


export const DataCard = (data: any) => {
  const userInfo: UserDataProps = data.dataUser

  return (
    <>
      <ProfileCard title="Meus Dados">
        <C.ImgCircle>
          <C.Image src={userInfo.profileImage ? userInfo.profileImage : avatar} />
        </C.ImgCircle>
        <C.FormContainer>
          <C.Section>
            <C.Legend>Nome</C.Legend>
            <C.Field>{userInfo.FirstName}</C.Field>
          </C.Section>
          <C.Section>
            <C.Legend>E-mail</C.Legend>
            <C.Field>{userInfo.email}</C.Field>
          </C.Section>
        </C.FormContainer>
      </ProfileCard>
    </>
  );
};
