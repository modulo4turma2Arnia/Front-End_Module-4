import headphone from '../../../assets/images/headphone.png'
import * as C from './style/style'

export const Cards: React.FC = () => {
    return(
        <C.BoxCards>
            <C.FieldImgCard><C.Imgcard src={headphone} alt="" /></C.FieldImgCard>
            <C.BoxDescription>
                <C.FieldDescription>
                    <C.HeadingFive>Headphone W820BT</C.HeadingFive>
                    <C.HeadingFive>Bluetooth over-ear-edifier</C.HeadingFive>
                    <C.Paragraph>2 jóias</C.Paragraph>
                    <C.BtnRescue>Resgatar</C.BtnRescue>
                </C.FieldDescription>
            </C.BoxDescription>
            <C.FieldButton></C.FieldButton>
        </C.BoxCards>
    )
} 