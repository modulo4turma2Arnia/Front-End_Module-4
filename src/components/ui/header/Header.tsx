import * as C from './style/style'
import avatar from '../../../assets/images/avatar.jpg'

export const Header: React.FC = () => {
    return (
            <C.Header>
                <C.FieldHeader>
                    <C.FieldImage>
                        <C.Image src={avatar} />
                        <C.FieldSpan>
                            <C.Greetings>Olá, </C.Greetings>
                            <C.Name>avatar name</C.Name>
                        </C.FieldSpan>
                    </C.FieldImage>
                </C.FieldHeader>
                <C.FieldMenu>
                    <C.Home>Inicio</C.Home>
                    <C.Products>Produtos</C.Products>
                    <C.Perfil>Meu Perfil</C.Perfil>
                </C.FieldMenu>
            </C.Header>
    )
}