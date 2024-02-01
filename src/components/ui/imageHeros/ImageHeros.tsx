import * as C from './style/style'
import { LuCalendarRange } from 'react-icons/lu'
import Guardians from '../../../assets/images/Guardians.png'
import modo from '../../../assets/images/modo.png'

export const ImageHero: React.FC = () => {
    return(
        <>
        <C.Container>
            <C.Section>
                <C.HeadingFour>A DATA ESTA PROXIMA!</C.HeadingFour>
                <C.HeadingOne>Avaliação de Desempenho</C.HeadingOne>
                <C.BoxSpan>
                    <C.CalendarSpan><LuCalendarRange size={24}/> </C.CalendarSpan>
                    <C.Date>30 de dezembro</C.Date>
                </C.BoxSpan>
            </C.Section>
            <C.BoxHero>
                <C.ImgHero src={Guardians} />
                <C.Abstract src={modo}></C.Abstract>
            </C.BoxHero>
        </C.Container>
        </>
    )
}