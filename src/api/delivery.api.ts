import { Delivery, UpdateDeliveryStatusDTO } from "../types/delivery";
import { createApiError } from "../types/error";
import { axiosInstace } from "./axios";

export const getAllDeliveries = async (): Promise<Delivery[]> => {
    try {
        const response = await axiosInstace.get('/deliveries');
        return response.data;
    } catch (error: unknown) {
        const apiError = createApiError(error);
        throw new Error(apiError.message);
    }
}

export const updateDeliveryStatus = async (data: UpdateDeliveryStatusDTO): Promise<Delivery> => {
    try {
        const response = await axiosInstace.patch(`/deliveries/${data.id}`, { status: data.status });
        return response.data;
    } catch (error: unknown) {
        const apiError = createApiError(error);
        throw new Error(apiError.message);
    }
}