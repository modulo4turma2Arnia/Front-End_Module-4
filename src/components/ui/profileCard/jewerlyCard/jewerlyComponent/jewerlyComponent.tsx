import { JewerlyProps } from "../../../../../types/jewelyProps/JewerlyProps";
import * as C from "./style/style";

export const JewerlyComponent: React.FC<JewerlyProps> = ({
  img,
  title,
  jewerlyCount,
  description,
}) => {
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
