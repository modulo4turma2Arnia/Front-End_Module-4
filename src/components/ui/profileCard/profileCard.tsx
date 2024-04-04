import { ProfileCardProps } from "../../../types/profileCardProps/ProfileCardProps";
import * as C from "./style/style";

export const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  children,
}) => {
  return (
    <C.Container>
      <C.Card>
        <C.Title>{title}</C.Title>
        <>{children}</>
      </C.Card>
    </C.Container>
  )
}
