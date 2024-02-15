import * as C from "./style/style";
import description from "../../assets/images/description.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRef, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { handleSubmit } from "../../services/handles/handleSubmit/handleSubmit";

export const Opening: React.FC = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const { login } = useLogin();
  const navigate = useNavigate();

  const handleIconClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoggedIn = () => {
    setShowForm(true);
    setShowLoginBtn(false);
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setShowForm(false);
      setShowLoginBtn(true)
    }
  };

  const handleSuccess = () => {
    navigate("/home");
  };

  return (
    <C.Container onClick={handleOutsideClick}>
      <C.Background />
      <C.Box>
          <C.FieldImg>
            <C.Logo src={description} />
            <C.FieldButton onClick={handleLoggedIn}>
              {showLoginBtn && <C.Button>Fazer login</C.Button>}
            </C.FieldButton>
          </C.FieldImg>
        
          {showForm && (
            <C.FormContainer>
              <C.Form ref={formRef} onSubmit={handleSubmit(login, handleSuccess)}>
                <C.Paragraph>Seja bem vindo!</C.Paragraph>
                <C.Heading2>Faça seu login</C.Heading2>
                  <C.Legend>E-mail</C.Legend>
                  <C.Input type="email" name="email" required />
                  <C.Legend>Senha</C.Legend>
                  <C.InputWrapper>
                    <C.Input
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      required
                    />
                    <C.IconWrapper onClick={handleIconClick}>
                      {passwordVisible ? (
                        <AiOutlineEye size={25} />
                      ) : (
                        <AiOutlineEyeInvisible size={25} />
                      )}
                    </C.IconWrapper>
                  </C.InputWrapper>
                <C.ButtonWrapper type="submit">Entrar</C.ButtonWrapper>
              </C.Form>
            </C.FormContainer>
          )}
        </C.Box>
    </C.Container>
  )
}
