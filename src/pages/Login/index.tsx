import { Text, View } from "react-native";
import { useState } from "react";
import { useForm, Controller, FieldErrors } from "react-hook-form";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";
import { useGlobalAlert } from "../../contexts/GlobalAlertContext";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";

interface LoginFormData {
    email: string;
    password: string;
}

type Errors = FieldErrors<LoginFormData>

export default function Login() {
    const { control, handleSubmit } = useForm<LoginFormData>();
    const [loading, setLoading] = useState<boolean>(false);
    const { showAlert } = useGlobalAlert();
    const route = useNavigation();
    const { handleLogin } = useAuth();

    const onSubmit = async (data: LoginFormData) => {
        try {
            setLoading(true);
            console.log('Dados do formulário:', data);
            await handleLogin(data);
            route.navigate('Home' as never);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro ao fazer login.';
            showAlert({
                type: 'error',
                title: 'Erro de login',
                message: errorMessage
            });
        } finally {
            setLoading(false);
        }
    };

    const onError = (errors: Errors) => {
        console.log('Erros de validação:', errors);
        showAlert({
            type: 'error',
            title: 'Erro de validação',
            message: errors.email ? errors.email.message || '' : errors.password ? errors.password.message || '' : 'Por favor, verifique os campos e tente novamente.'
        })
    }

    return(
        <View className="flex-1">
            <View className="flex-1 justify-center items-center px-6">
                <View className="w-full max-w-sm bg-background-card rounded-card shadow-card p-8 border border-border-light">
                    
                    <Text className="text-3xl font-bold text-text-primary text-center mb-2">
                        Bem-vindo
                    </Text>
                    
                    <Text className="text-base text-text-secondary text-center mb-8">
                        Faça login para acessar o sistema
                    </Text>
                    
                    <View className="">
                        <View className="w-full flex flex-col gap-4">
                            <Controller
                                control={control}
                                name="email"
                                rules={{
                                    required: "Email é obrigatório",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Email inválido"
                                    }
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <InputText
                                        value={value || ''}
                                        onChangeText={onChange}
                                        placeholder="Email"
                                        type="email"
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="password"
                                rules={{
                                    required: "Senha é obrigatória",
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <InputPassword
                                        value={value || ''}
                                        onChangeText={onChange}
                                        placeholder="Senha"
                                    />
                                )}
                            />
                        </View>
                        
                        <Button
                            onPress={handleSubmit(onSubmit, onError)}
                            loading={loading}
                            variant="primary"
                        >
                            <Text className="text-white font-medium text-base">
                                Entrar
                            </Text>
                        </Button>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}