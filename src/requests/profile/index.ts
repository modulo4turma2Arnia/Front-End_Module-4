import axios from "axios";
import { CulturePowerPath } from "../../services/url";
import { UserDataProps } from "../../types/userProps/UserProps";

export const GetDataUser = async () : Promise<UserDataProps> =>{
    try {
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const result = await CulturePowerPath.get('users/infouser', { headers })

        if(result.status === 200){
            return result.data
        }

    } catch (error) {
        if(axios.isAxiosError(error)){
            if(error.response?.status === 401){
                throw new Error('Operação não autorizada')
            }
            if(error.response?.status === 403){
                throw new Error('Usuário não tem permissão de acesso')
            }
            if(error.response?.status === 404){
                throw new Error('Página não encontrada')
            }
        }
    }
    throw new Error('Pagina em manutenção')
}