import axios from 'axios'
import { LoginProps } from '../../../types/loginProps/Login'
import { CulturePowerPath } from '../../url'

export const Login = async (email: string, senha: string): Promise<LoginProps> => {
    try {
        const result = await CulturePowerPath.post('login', {email, senha}) // simulação de chamada de api
        if(result.status === 200) {
            return { login: true, token: result.data.token }
        }
    } catch (error) {
        if(axios.isAxiosError(error)){
            if(error.response?.status === 401){
                return { login: false, message: 'Usuário ou senha incorreto'}
            }
            if (error.response?.status === 403) {
                return { login: false, message: 'Operação não autorizada' }
            }
            if (error.response?.status === 404) {
                return { login: false, message: 'Página não encontrada' }
            }
        }
    }
    return { login: false, message: 'Erro' }
}