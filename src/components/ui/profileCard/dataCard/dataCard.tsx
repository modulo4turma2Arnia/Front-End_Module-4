import { ProfileCard } from "../profileCard";
import * as C from "./style/style";
import avatar from "../../../../assets/images/avatar.jpg";

export const DataCard = () => {
  return (
    <>
      <ProfileCard title="Meus Dados">
        <C.ImgCircle>
          <C.Image src={avatar} />
        </C.ImgCircle>
        <C.FormContainer>
          <C.Section>
            <C.Legend>Nome</C.Legend>
            <C.Field>João Victor</C.Field>
          </C.Section>
          <C.Section>
            <C.Legend>E-mail</C.Legend>
            <C.Field>joaovictor@gmail.com</C.Field>
          </C.Section>
        </C.FormContainer>
      </ProfileCard>
    </>
  );
};
