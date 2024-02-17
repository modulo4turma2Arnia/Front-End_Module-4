import { CardProps } from "../cardProps/CardProps"

export type ContextProps = {
    selectProduct: CardProps | null
    setSelectProduct: React.Dispatch<React.SetStateAction<CardProps | null>>
}