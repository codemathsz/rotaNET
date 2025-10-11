import { ActivityIndicator, TouchableOpacity } from "react-native";

interface ButtonProps {
    children: React.ReactNode;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    loading?: boolean;
}

export default function Button({ children, onPress, variant = 'primary', loading = false }: ButtonProps) {

    const variantColors = {
        primary: 'bg-primary-500',
        secondary: 'bg-primary-700',
        danger: 'bg-danger-500',
    }

    return(
        <TouchableOpacity onPress={onPress} disabled={loading} className={`w-full h-16 rounded-button flex justify-center items-center mt-6 ${variantColors[variant]}`}>
            {
                loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    children
                )
            }
        </TouchableOpacity>
    )
}