import headphone from "../../../assets/images/headphone.png";
import * as C from "./style/style";

type BtnIsActive = {
  isActive: boolean;
};

export const Cards: React.FC = ({ isActive }: BtnIsActive) => {
  return (
    <C.BoxCards>
      <C.FieldImgCard>
        <C.Imgcard src={headphone} alt="" />
      </C.FieldImgCard>
      <C.BoxDescription>
        <C.FieldDescription>
          <C.HeadingFive>Headphone W820BT</C.HeadingFive>
          <C.HeadingFive>Bluetooth over-ear-edifier</C.HeadingFive>
          <C.Paragraph>2 jóias</C.Paragraph>
          {isActive && <C.BtnRescue>Resgatar</C.BtnRescue>}
        </C.FieldDescription>
      </C.BoxDescription>
      <C.FieldButton></C.FieldButton>
    </C.BoxCards>
  );
};
