import axios from "axios";
import { CulturePowerPath } from "../../services/url";
import { UserProps } from "../../types/userProps/UserProps";

export const GetDataUser = async () : Promise<UserProps> =>{
    try {
        const token = localStorage.getItem('token')
        const headers = {
            Authorization: `Bearer ${token}`
        }
<<<<<<< HEAD:src/requests/register/index.ts
        const result = await CulturePowerPath.post('auth/register', { headers })
        console.log('Resultado da API:', result)
        if(result.status === 201){
            console.log('Dados do usuário:', result.data)
=======
        const result = await CulturePowerPath.get('users/infouser', { headers })
        //console.log('Resultado da API:', result)
        if(result.status === 200){
            //console.log('Dados do usuário:', result.data)
>>>>>>> 0405e7ebf1fc611c2b9f8a8d897393d0331ea592:src/requests/dataUsers/index.ts
            localStorage.setItem('userFirstName', result.data.FirstName)
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
