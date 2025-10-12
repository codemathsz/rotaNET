import { createContext, useContext, useState } from "react";
import { Delivery } from "../types/delivery";
import { getAllDeliveries } from "../api/delivery.api";

interface DeliveryContextType {
    deliveries: Delivery[];
    getDeliveries: () => Promise<void>;
};

const DeliveryContext = createContext({} as DeliveryContextType);

export const DeliveryProvider = ({ children }: { children: React.ReactNode }) => {
    const [deliveries, setDeliveries] = useState<Delivery[]>([]);
    
    const getDeliveries = async () => {
        try {
            const data = await getAllDeliveries();
            setDeliveries(data);
        } catch (error: any) {
            throw new Error(error);
        }
    }


    return(
        <DeliveryContext.Provider value={{ deliveries, getDeliveries }}>
            {children}
        </DeliveryContext.Provider>
    )
}

export const useDelivery = () => useContext(DeliveryContext);