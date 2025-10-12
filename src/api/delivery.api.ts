import { axiosInstace } from "./axios";

export const getAllDeliveries = async () => {
    try {
        const response = await axiosInstace.get('/deliveries');
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
}