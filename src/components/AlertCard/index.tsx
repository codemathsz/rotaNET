import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useGlobalAlert } from "../../contexts/GlobalAlertContext";

type IconProps ={
    name: 'check-circle' | 'error' | 'warning';
    color: string;
    textColor: string;
    bg: string;
}

export default function AlertCard() {

    const { alert, hideAlert } = useGlobalAlert();

    if (!alert) {
        return null;
    }

    const iconProps: Record<string, IconProps> = {
        success: { name: 'check-circle', color: '#16a34a',  textColor: '#16a34a',  bg: '#dcfce7' },
        error: { name: 'error', color: '#dc2626',  textColor: '#dc2626',  bg: '#fee2e2' },
        warning: { name: 'warning', color: '#d97706',  textColor: '#d97706',  bg: '#fde68a' },
    }

    const { name, color, bg, textColor } = iconProps[alert.type];

    return (
        <View style={{backgroundColor: bg}} className={`absolute left-4 right-4 bottom-32 p-4 rounded-lg z-50 flex flex-col gap-2`} onTouchStart={hideAlert}>
            <View className="w-full flex flex-row items-center justify-start gap-4">
                <MaterialIcons name={name} size={20} color={color}/>
                <Text style={{ color: textColor }} className={`font-bold`}>{alert.title}</Text>
            </View>
            <Text style={{ color: textColor }}>{alert.message}</Text>
        </View>
    )
}