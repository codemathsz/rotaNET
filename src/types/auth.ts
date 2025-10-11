import { User } from "./user";

export type LoginDTO = {
    email: string;
    password: string;
}

export type LoginResponse = {
    user: User
}