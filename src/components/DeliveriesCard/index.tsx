import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Delivery } from "../../types/delivery";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { getStatusColor, getStatusText } from "../../utils/utils";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface DeliveriesCardProps {
    delivery: Delivery
}

export default function DeliveriesCard({ delivery }: DeliveriesCardProps) {

    const navigation = useNavigation<NavigationProp>();

    const handlePress = () => {
        navigation.navigate('DeliveryDetails', { delivery });
    };

    return (
        <TouchableOpacity 
            key={delivery.id} 
            className="bg-white p-4 rounded-lg shadow-sm mb-3 border border-border-light"
            onPress={handlePress}
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