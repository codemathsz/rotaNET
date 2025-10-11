import { TextInput, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";

interface InputPasswordProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
}

export default function InputPassword({ value, onChangeText, placeholder }: InputPasswordProps){

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    return(
        <View className="w-full h-12 bg-background-secondary border border-border-default rounded-input flex flex-row items-center justify-between px-4">
            <TextInput
                className="flex-1 h-full"
                placeholder={placeholder}
                placeholderTextColor="#a3a3a3"
                secureTextEntry={!isPasswordVisible}
                value={value}
                onChangeText={onChangeText}
            />
            <AntDesign name={isPasswordVisible ? "eye" : "eye-invisible"} size={24} color="#a3a3a3" onPress={() => setIsPasswordVisible(!isPasswordVisible)} />
        </View>
    )
}