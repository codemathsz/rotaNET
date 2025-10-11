import {TextInput} from 'react-native';

interface InputTextProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
    type?: string;
}

export default function InputText({ placeholder, secureTextEntry, value, onChangeText, type }: InputTextProps){
    return (
        <TextInput 
            className="h-12 bg-background-secondary border border-border-default rounded-input flex justify-center px-4" 
            placeholder={placeholder} 
            placeholderTextColor="#a3a3a3" 
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            keyboardType={type === 'email' ? 'email-address' : 'default'}
        />
    )
}