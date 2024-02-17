import { LoginProps } from "../../../types/loginProps/Login";

export const handleSubmit = (
    login: (email: string, senha: string) => Promise<LoginProps>, onSuccess: () => void
) => {
    return async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const email = event.currentTarget.elements.namedItem('email') as HTMLInputElement
        const password = event.currentTarget.elements.namedItem('password') as HTMLInputElement

        if(email && password) {
            const response = await login(email.value, password.value)
            const success = response.login
            if(success){
                onSuccess()
            }
        }
    }
}