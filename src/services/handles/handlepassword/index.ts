import axios from 'axios'
import { LoginProps } from '../../../types/loginProps/Login'
import { CulturePowerPath } from '../../url'

export const changePassword = async (currentPassword: string, newPassword: string): Promise<LoginProps> => {

    const changePasswordData = {
        currentPassword: currentPassword,
        newPassword: newPassword
    };
    try {
        const result = await CulturePowerPath.post('users/chg/password', {changePasswordData}) 
        if(result.status === 200) {
            return result.data
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