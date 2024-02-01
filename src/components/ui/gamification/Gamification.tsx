import * as C from './style/style'
import blue from '../../../assets/images/blue.png'
import yellow from '../../../assets/images/yellow.png'
import lilac from '../../../assets/images/lilac.png'
import green from '../../../assets/images/green.png'
import { CiCalendar } from 'react-icons/ci'


export const Gamification: React.FC = () => {
    return (
        <C.FieldGame>
            <C.Balance>Meu Saldo</C.Balance>
            <C.Points>08</C.Points>
            <C.ParagraphOne>Jóias</C.ParagraphOne>
            <C.FieldJewels>
                <C.JewelsImg src={yellow}></C.JewelsImg>
                <C.JewelsImg src={lilac}></C.JewelsImg>
                <C.JewelsImg src={blue}></C.JewelsImg>
                <C.JewelsImg src={green}></C.JewelsImg>
            </C.FieldJewels>
            <C.Inline>
                <C.Calendar><CiCalendar size={24}/> <C.Cycle>2° Ciclo de Gestão de Desempenho</C.Cycle></C.Calendar>
                <C.ParagraphTwo>Vence em: 10 de maio de 2024</C.ParagraphTwo>
            </C.Inline>
        </C.FieldGame>
    )
}