import { createContext, useContext, useEffect, useState } from "react";
import { LoginDTO } from "../types/auth";
import { LoginRequest } from "../api/auth.api";
import { User } from "../types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
    handleLogin: (data: LoginDTO) => Promise<void>;
    isLoggedIn: boolean;
    user: User | null;
    logout: () => Promise<void>;
}

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = async (data: LoginDTO) => {
        try {
            const response = await LoginRequest(data);
            if(response && response.id){
                saveToken(response.id.toString());
                setUser(response);
                setIsLoggedIn(true);
            }
        } catch (error: any) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    const saveToken = (token: string) => {
        AsyncStorage.setItem("token", token);
    }
    
    const getToken = async () => {
        const token = await AsyncStorage.getItem("token");
        return token;
    }

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("token");
            setUser(null);
            setIsLoggedIn(false);
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }

    useEffect(() => {
        const checkToken = async () => {
            const token = await getToken();
            if (token) {
                setIsLoggedIn(true);
            }
        };
        checkToken();
    }, [])

    return(
        <AuthContext.Provider value={{ handleLogin, isLoggedIn, user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);