import { Text, View, TouchableOpacity, FlatList } from "react-native";
import InputText from "../../components/InputText";
import { useEffect, useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import StatsCards from "../../components/StatsCards";
import DeliveriesCard from "../../components/DeliveriesCard";
import { useDelivery } from "../../contexts/DeliveryContext";
import { useGlobalAlert } from "../../contexts/GlobalAlertContext";
import { useAuth } from '../../contexts/AuthContext';

export default function Home(){
    const { logout } = useAuth();
    const { deliveries, getDeliveries } = useDelivery();
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { showAlert } = useGlobalAlert();

    const totalDeliveries = deliveries.length;
    const deliveredCount = deliveries.filter(delivery => delivery.status === 'delivered').length;
    const pendingCount = deliveries.filter(delivery => delivery.status === 'pending').length;
    const inProgressCount = deliveries.filter(delivery => delivery.status === 'in_progress').length;

    const handleGetDeliveries = async () => {
        try {
            setLoading(true);
            await getDeliveries();
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro ao buscar as entregas.';
            showAlert({
                type: 'error',
                title: 'Erro',
                message: errorMessage
            })
        }finally{
            setLoading(false);
        }
    }

    const handleLogout = () =>{
        logout();
    }

    useEffect(() =>{
        handleGetDeliveries();
    },[])

    return(
        <View className="flex-1 bg-background-primary">
            {/* Header */}
            <View className="px-6 pt-16 pb-6 bg-white shadow-sm">
                <View className="flex-row items-center justify-between mb-6">
                    <View>
                        <Text className="text-2xl font-bold text-text-primary">Entregas</Text>
                        <Text className="text-sm text-text-secondary">Gerencie suas entregas do dia</Text>
                    </View>
                    <TouchableOpacity 
                        className="w-10 h-10 bg-background-secondary rounded-full items-center justify-center"
                        onPress={handleLogout}
                    >
                        <Ionicons name="exit-outline" size={20} color="#6b7280" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center gap-3">
                    <View className="flex-1">
                        <InputText 
                            value={search}
                            onChangeText={setSearch}
                            placeholder="Pesquisar entregas..."
                        />
                    </View>
                    <TouchableOpacity className="w-12 h-12 bg-blue-600 rounded-lg items-center justify-center">
                        <Feather name="search" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="px-6 py-4">
                <StatsCards total={totalDeliveries} delivered={deliveredCount} pending={pendingCount} inProgress={inProgressCount} />
            </View>

            <View className="flex-1 px-6">
                <Text className="text-lg font-semibold text-text-primary mb-4">Entregas de Hoje</Text>
                
                <FlatList
                    data={deliveries}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <DeliveriesCard delivery={item} />
                    )}
                    contentContainerStyle={{ paddingHorizontal: 2 }}
                    ListEmptyComponent={() =>(
                        !loading && (
                            <View className="mt-10">
                                <Text className="text-center text-text-secondary">Nenhuma entrega encontrada</Text>
                            </View>
                        )
                    )}
                    onRefresh={handleGetDeliveries}
                    refreshing={loading}
                />
            </View>
        </View>
    )
}