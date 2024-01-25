import { LoginProps } from "../../../types/loginProps/Login";

export const handleSubmit = (
    login: (email: string, senha: string) => Promise<LoginProps>, onSuccess: () => void
) => {
    return async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const email = event.currentTarget.elements.namedItem('email') as HTMLInputElement
        const senha = event.currentTarget.elements.namedItem('password') as HTMLInputElement

        if(email && senha) {
            const response = await login(email.value, senha.value)
            const success = response.login
            if(success){
                onSuccess()
            }
        }
    }
}