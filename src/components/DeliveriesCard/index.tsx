import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Delivery } from "../../types/delivery";

interface DeliveriesCardProps {
    delivery: Delivery
}

export default function DeliveriesCard({ delivery }: DeliveriesCardProps) {

    const getStatusColor = (status: string) => {
        switch(status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'delivered': return 'bg-green-100 text-green-800';
            case 'in_progress': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status: string) => {
        switch(status) {
            case 'pending': return 'Pendente';
            case 'delivered': return 'Entregue';
            case 'in_progress': return 'Em andamento';
            default: return 'Desconhecido';
        }
    };

    return (
        <TouchableOpacity 
            key={delivery.id} 
            className="bg-white p-4 rounded-lg shadow-sm mb-3 border border-border-light"
        >
            <View className="w-full flex-row items-start justify-between mb-2">
                <View className="flex-1">
                    <Text className="text-base font-semibold text-text-primary">{delivery.title}</Text>
                    <Text numberOfLines={1} ellipsizeMode="tail" className="text-sm text-text-secondary mt-1">{delivery.addressInitial} - {delivery.addressFinal}</Text>
                </View>
                <View className={`px-3 py-1 rounded-full ${getStatusColor(delivery.status)}`}>
                    <Text className="text-xs font-medium">{getStatusText(delivery.status)}</Text>
                </View>
            </View>
            
            <View className="flex-row items-center justify-end mt-1">
                <Feather name="chevron-right" size={16} color="#6b7280" />
            </View>
        </TouchableOpacity>
    )
}