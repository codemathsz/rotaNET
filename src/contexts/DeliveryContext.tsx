import { createContext, useContext } from "react";
import { Delivery } from "../types/delivery";

interface DeliveryContextType {
    deliveries: Delivery[];
};

const DeliveryContext = createContext({} as DeliveryContextType);

export const DeliveryProvider = ({ children }: { children: React.ReactNode }) => {

    // Mock data para as entregas
    const deliveries: Delivery[] = [
        { id: 1, cod: "COD123", title: "Entrega 1", description: "Descrição da Entrega 1", addressInitial: "Rua das Flores, 123", addressFinal: "Av. Brasil, 456", status: "pending" },
        { id: 2, cod: "COD124", title: "Entrega 2", description: "Descrição da Entrega 2", addressInitial: "Av. Principal, 456", addressFinal: "Rua da Paz, 789", status: "delivered"},
        { id: 3, cod: "COD125", title: "Entrega 3", description: "Descrição da Entrega 3", addressInitial: "Rua do Comércio, 789", addressFinal: "Av. das Américas, 101", status: "in_progress"},
    ];
    
    
    return(
        <DeliveryContext.Provider value={{ deliveries }}>
            {children}
        </DeliveryContext.Provider>
    )
}

export const useDelivery = () => useContext(DeliveryContext);