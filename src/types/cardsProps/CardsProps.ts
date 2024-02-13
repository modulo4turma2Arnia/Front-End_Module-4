import { CardProps } from "../cardProps/CardProps"

type BtnIsActive = {
    isActive: boolean
}

export type CardsProps = {
    product: CardProps
} & BtnIsActive