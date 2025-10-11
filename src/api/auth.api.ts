import { LoginDTO } from "../types/auth";
import { User } from "../types/user";
import { axiosInstace } from "./axios";

export const LoginRequest = async (data: LoginDTO) : Promise<User> => {
    try {
        const response = await axiosInstace.get(`/users?email=${data.email}&password=${data.password}`);
        
        if (response.data && response.data.length > 0) {
            return response.data[0];
        } else {
            throw new Error("Usuário ou senha incorretos");
        }
    } catch (error: any) {
        if (error.message === 'Network Error') {
            throw new Error('Erro de conexão: Verifique se o servidor está rodando na porta 3001');
        }
        throw error;
    }
}