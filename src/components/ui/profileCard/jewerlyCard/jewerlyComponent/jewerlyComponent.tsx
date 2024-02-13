import * as C from "./style/style";

type JewerlyProps = {
  img: string;
  title: string;
  jewerlyCount: number;
  description: string;
};

export const JewerlyComponent: React.FC = ({
  img,
  title,
  jewerlyCount,
  description,
}: JewerlyProps) => {
  return (
    <C.Container>
      <C.ImgField>
        <C.Img src={img}></C.Img>
      </C.ImgField>
      <C.Content>
        <C.Title>{title}</C.Title>
        <C.Count>{jewerlyCount} Jóias</C.Count>
        <C.Description>{description}</C.Description>
      </C.Content>
    </C.Container>
  );
};
