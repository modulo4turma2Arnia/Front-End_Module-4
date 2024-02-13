import * as C from "./style/style";

type ProfileCardProps = {
  title: string;
  children: React.ReactNode;
};

export const ProfileCard: React.FC = ({
  title,
  children,
}: ProfileCardProps) => {
  return (
    <C.Container>
      <C.Card>
        <C.Title>{title}</C.Title>
        <>{children}</>
      </C.Card>
    </C.Container>
  );
};
