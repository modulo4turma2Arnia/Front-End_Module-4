import { IconBaseProps } from "react-icons";
import * as C from "./style/style";

type ProfileMenuProps = {
  title: string;
  icon: IconBaseProps;
  actionOpen?: () => void;
};

export const ProfileMenu = ({ title, icon , actionOpen}: ProfileMenuProps) => {
  return (
    <C.Container onClick={actionOpen}>
      <C.MenuLine>
        <C.IconSquare>
          <C.Icon>
            <>{icon}</>
          </C.Icon>
        </C.IconSquare>
        <C.MenuOption>{title}</C.MenuOption>
      </C.MenuLine>
    </C.Container>
  );
}
