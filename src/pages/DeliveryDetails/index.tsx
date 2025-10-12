import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { getDeliveryStatusIcon, getStatusColor, getStatusText } from "../../utils/utils";
import Button from "../../components/Button";
import { useDelivery } from "../../contexts/DeliveryContext";
import { useState } from "react";
import { useGlobalAlert } from "../../contexts/GlobalAlertContext";

type DeliveryDetailsRouteProp = RouteProp<RootStackParamList, 'DeliveryDetails'>;

export default function DeliveryDetails() {

    const navigation = useNavigation();
    const route = useRoute<DeliveryDetailsRouteProp>();
    const { deliveryId } = route.params;
    const { updateDelivery, deliveries } = useDelivery();
    const [loading, setLoading] = useState<boolean>(false);
    const { showAlert } = useGlobalAlert();

    const delivery = deliveries.find(delivery => delivery.id === deliveryId);

    const handleDeliveryStatus = async () =>{
        if(!delivery) return;
        try {
            setLoading(true);      
            if(delivery.status === "pending"){
                await updateDelivery({ id: delivery.id, status: 'in_progress' });
                showAlert({
                    type: 'success',
                    title: 'Sucesso',
                    message: 'Entrega iniciada com sucesso!'
                })
            }else if(delivery.status === "in_progress"){
                await updateDelivery({ id: delivery.id, status: 'delivered' });
                showAlert({
                    type: 'success',
                    title: 'Sucesso',
                    message: 'Entrega finalizada com sucesso!'
                })
            }
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro ao atualizar o status da entrega.';
            showAlert({
                type: 'error',
                title: 'Erro',
                message: errorMessage
            })
        }finally{
            setLoading(false);
        }
    }

    if(!delivery){
        return(
            <View className="flex-1 items-center justify-center bg-background-primary px-6">
                <Text className="text-sm text-text-secondary">Entrega não encontrada</Text>
            </View>
        )
    }

    return(
        <View className="flex-1 bg-background-primary">
            {/* Header */}
            <View className="px-6 pt-16 pb-6 bg-white shadow-md border-b border-border-light">
                <View className="flex flex-col gap-4">
                    <View className="flex flex-row items-center gap-4">
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Feather name="arrow-left" size={24} color="#171717" />
                        </TouchableOpacity>
                        <Text className="text-2xl font-bold text-text-primary">Detalhes da Entrega</Text>
                    </View>
                    <Text className="text-sm text-text-secondary mt-1">#{delivery.cod}</Text>
                </View>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="px-6 py-6">

                    <View className="bg-white p-6 rounded-xl shadow-sm border border-border-light mb-6">
                        <Text className="text-2xl font-bold text-text-primary mb-2">{delivery.title}</Text>
                        <Text className="text-base text-text-secondary leading-6">{delivery.description}</Text>
                    </View>


                    <View className="bg-white p-6 rounded-xl shadow-sm border border-border-light mb-6">
                        <Text className="text-lg font-semibold text-text-primary mb-4">Rota da Entrega</Text>
                        
                        <View className="flex flex-col gap-1">
                            <View className="flex-row items-start">
                                <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center mr-4 mt-1">
                                    <MaterialIcons name="radio-button-checked" size={16} color="#16a34a" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-sm font-medium text-green-600 mb-1">ORIGEM</Text>
                                    <Text className="text-base text-text-primary">{delivery.addressInitial}</Text>
                                </View>
                            </View>

                            <View className="ml-4 w-px h-8 border-l-2 border-dashed border-gray-300"></View>

                            <View className="flex-row items-start">
                                <View className="w-8 h-8 bg-red-100 rounded-full items-center justify-center mr-4 mt-1">
                                    <MaterialIcons name="location-on" size={16} color="#dc2626" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-sm font-medium text-red-600 mb-1">DESTINO</Text>
                                    <Text className="text-base text-text-primary">{delivery.addressFinal}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="bg-white p-6 rounded-xl shadow-sm border border-border-light mb-6">
                        <Text className="text-lg font-semibold text-text-primary mb-4">Status da Entrega</Text>
                        <View className={`px-4 py-3 rounded-lg ${getStatusColor(delivery.status)} flex-row items-center justify-center`}>
                            <MaterialIcons 
                                name={getDeliveryStatusIcon(delivery.status)} 
                                size={20} 
                                color={delivery.status === 'delivered' ? '#16a34a' : delivery.status === 'in_progress' ? '#2563eb' : '#d97706'} 
                            />
                            <Text className="text-base font-semibold ml-2">{getStatusText(delivery.status)}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>


            <View className="px-6 py-4 bg-white border-t border-border-light">
                {
                    delivery.status !== "delivered" && (
                        <Button
                            onPress={handleDeliveryStatus}
                            variant="primary"
                            loading={loading}
                        >
                            <View className="flex-row items-center justify-center">
                                {
                                    delivery.status === "pending" ? (
                                        <>
                                            <Feather name="navigation" size={20} color="white" />
                                            <Text className="text-base text-white font-semibold ml-2">
                                                Iniciar Entrega
                                            </Text>
                                        </>
                                    ) :(
                                        <>
                                            <Feather name="stop-circle" size={20} color="white" />
                                            <Text className="text-base text-white font-semibold ml-2">
                                                Finalizar Entrega
                                            </Text>
                                        </>
                                    )
                                }
                            </View>
                        </Button>
                    )
                }
            </View>
        </View>
    )
}