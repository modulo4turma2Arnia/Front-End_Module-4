import React from 'react'
import { CardsProps } from '../../../types/cardsProps/CardsProps'
import * as C from './style/style'


export const Cards: React.FC<CardsProps> = ({ product }) => {
    const [showDetails, setShowDetails] = React.useState(false)
    console.log('Props do componente Cards:', product)

    
    if (!product || !product.name || !product.description || !product.price || !product.image) {
        return <div>Produto não encontrado</div>;
    }
    return(
        <C.BoxCards>
            <C.FieldImgCard><C.Imgcard src={product.image} alt={product.name} /></C.FieldImgCard>
            <C.BoxDescription>
                <C.FieldDescription>
                    <C.HeadingFive>{product.name}</C.HeadingFive>
                    <C.HeadingFive>Bluetooth over-ear-edifier</C.HeadingFive>
                    <C.Paragraph>2 jóias</C.Paragraph>
                    { showDetails && (
                    <>
                        <C.Paragraph>{product.description}</C.Paragraph>
                        <C.Paragraph>R$ {product.price}</C.Paragraph>
                    </>
                    )}
                    <C.BtnRescue>Resgatar</C.BtnRescue>
                </C.FieldDescription>
            </C.BoxDescription>
            <C.FieldButton></C.FieldButton>
        </C.BoxCards>
    )
} 