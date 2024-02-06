import { IconBaseProps } from "react-icons";
import * as C from "./style/style";

type ProfileMenuProps = {
  title: string;
  icon: IconBaseProps;
};

export const ProfileMenu: React.FC = ({ title, icon }: ProfileMenuProps) => {
  return (
    <C.Container>
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
};
