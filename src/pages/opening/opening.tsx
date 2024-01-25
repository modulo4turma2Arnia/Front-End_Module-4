import * as C from './style/style'
import description from '../../assets/images/description.png'
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRef, useState } from 'react';
import { useLogin } from '../../hook/useLogin';
import { handleSubmit } from '../../services/handles/handleSubmit/handleSubmit';

export const Opening: React.FC = () => {
const [passwordVisible, setPasswordVisible] = useState(false)
const [showForm, setShowForm] = useState(false)
const { login } = useLogin()
const navigate = useNavigate()

const handleIconClick = () => {
    setPasswordVisible(!passwordVisible)
}

const handleLoggedIn = () => {
    setShowForm(true)
}
const formRef = useRef<HTMLFormElement | null>(null)

const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if(formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowForm(false)
    }
}
const handleSuccess = () => {
    navigate('/login')
}
    return (
        <C.Container onClick={handleOutsideClick}>
            <C.Box>
                <C.FieldImg>
                    <C.Img src={description} />
                    <C.FieldButton>
                        <C.Button onClick={handleLoggedIn}>Fazer login</C.Button>
                    </C.FieldButton>
                </C.FieldImg>
                { showForm && (
                    <C.Form ref={formRef} onSubmit={handleSubmit(login, handleSuccess)}>
                        <C.Paragraph>seja bem vindo!</C.Paragraph>
                        <C.Heading2>Faça seu login</C.Heading2>
                        <C.Fieldset>
                            <C.Legend>Email</C.Legend>
                            <C.Input type='email' name='email' required />
                        </C.Fieldset>
                        <C.Fieldset>
                            <C.Legend>Senha</C.Legend>
                            <C.InputWrapper>
                                <C.Input 
                                    type={passwordVisible ? 'text':'password'} 
                                    name='password'
                                    required    
                                />
                                <C.IconWrapper onClick={handleIconClick}>
                                    {passwordVisible ? (
                                        <AiOutlineEye size={25}/>
                                    ) : (
                                        <AiOutlineEyeInvisible size={25}/>
                                    )}
                                </C.IconWrapper>
                            </C.InputWrapper>
                        </C.Fieldset>
                        <C.ButtonWrapper type='submit'>Entrar</C.ButtonWrapper>
                    </C.Form>
                )}
            </C.Box>
        </C.Container>
    )
}