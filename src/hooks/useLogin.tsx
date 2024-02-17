import React from "react";
import { LoginProps } from "../types/loginProps/Login";
import { Login } from "../services/handles/handleLogin";

export function useLogin() {
  const [result, setResult] = React.useState<LoginProps | null>(null)

  const login = async (email: string, password: string): Promise<LoginProps> => {
    const response = await Login(email, password);
    if (response.login) {
      if (response.token) {
        localStorage.setItem("token", response.token)
        localStorage.setItem("email", email)
        setResult({ login: true, token: response.token })
      }
    } else {
      setResult({ login: false, message: response.message })
    }
    return response
  }
  return { result, login }
}
