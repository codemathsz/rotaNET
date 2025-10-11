import { ScrollView, Text, View } from "react-native";

interface StatsCardsProps {
    total: number;
    delivered: number;
    pending: number;
    inProgress: number;
}

export default function StatsCards({ total, delivered, pending, inProgress }: StatsCardsProps) {
    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 0, gap: 16, paddingBottom: 4 }}
        >
            <View className="bg-white p-4 rounded-lg shadow-sm w-28 items-center">
                <Text className="text-2xl font-bold text-blue-600">{total}</Text>
                <Text className="text-sm text-text-secondary">Total</Text>
            </View>
            <View className="bg-white p-4 rounded-lg shadow-sm w-28 items-center">
                <Text className="text-2xl font-bold text-green-600">{delivered}</Text>
                <Text className="text-sm text-text-secondary">Entregues</Text>
            </View>
            <View className="bg-white p-4 rounded-lg shadow-sm w-28 items-center">
                <Text className="text-2xl font-bold text-yellow-600">{pending}</Text>
                <Text className="text-sm text-text-secondary">Pendentes</Text>
            </View>
            <View className="bg-white p-4 rounded-lg shadow-sm w-28 items-center">
                <Text className="text-2xl font-bold text-blue-600">{inProgress}</Text>
                <Text className="text-sm text-text-secondary text-center">Em andamento</Text>
            </View>
        </ScrollView>
    )
}