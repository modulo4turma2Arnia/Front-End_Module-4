import * as C from "./style/style";
import { Cards } from "../../card/Card";
import { ProfileCard } from "../profileCard";

export const RescCard = () => {
  return (
    <>
      <ProfileCard title="Meus Resgates">
        <C.Content>
          <C.DateResc>22 de Dezembro</C.DateResc>
          <C.ContainerCards>
            <Cards />
            <Cards />
          </C.ContainerCards>
          <C.DateResc>10 de Janeiro</C.DateResc>
          <C.ContainerCards>
            <Cards />
          </C.ContainerCards>
        </C.Content>
      </ProfileCard>
    </>
  )
}
