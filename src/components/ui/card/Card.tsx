import * as C from './style/style'
import React from 'react'
import { CardsProps } from '../../../types/cardsProps/CardsProps'

export const Cards: React.FC<CardsProps> = ({ product, isActive }) => {
    //const [showDetails, setShowDetails] = React.useState(false)

    if (!product || !product.name || !product.description || !product.price || !product.image) {
        return <C.NotFound>Produto não encontrado</C.NotFound>
    }

    return(
        <C.BoxCards>
            <C.FieldImgCard><C.Imgcard src={product.image} alt={product.name} /></C.FieldImgCard>
            <C.BoxDescription>
                <C.FieldDescription>
                    <C.HeadingFive>{product.name}</C.HeadingFive>
                    <C.HeadingFive>Bluetooth over-ear-edifier</C.HeadingFive>
                    <C.Paragraph>{product.price} jóias</C.Paragraph>
                    {/* { showDetails && (
                    <>
                        <C.Paragraph>{product.description}</C.Paragraph>
                        <C.Paragraph>R$ {product.price}</C.Paragraph>
                    </>
                    )} */}
                    {isActive && <C.BtnRescue>Resgatar</C.BtnRescue>}
                </C.FieldDescription>
            </C.BoxDescription>
            <C.FieldButton></C.FieldButton>
        </C.BoxCards>
    )
} 
