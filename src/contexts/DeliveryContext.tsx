import { createContext, useContext, useState } from "react";
import { Delivery, UpdateDeliveryStatusDTO } from "../types/delivery";
import { getAllDeliveries, updateDeliveryStatus } from "../api/delivery.api";

interface DeliveryContextType {
    deliveries: Delivery[];
    getDeliveries: () => Promise<void>;
    updateDelivery: (data: UpdateDeliveryStatusDTO) => Promise<void>;
}

const DeliveryContext = createContext({} as DeliveryContextType);

export const DeliveryProvider = ({ children }: { children: React.ReactNode }) => {
    const [deliveries, setDeliveries] = useState<Delivery[]>([]);
    
    const getDeliveries = async () => {
        try {
            const data = await getAllDeliveries();
            setDeliveries(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Erro desconhecido ao buscar entregas');
        }
    }

    const updateDelivery = async (data: UpdateDeliveryStatusDTO) => {
        try {
            await updateDeliveryStatus(data);
            await getDeliveries();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Erro desconhecido ao atualizar entrega');
        }
    }

    return(
        <DeliveryContext.Provider value={{ deliveries, getDeliveries, updateDelivery }}>
            {children}
        </DeliveryContext.Provider>
    )
}

export const useDelivery = () => useContext(DeliveryContext);