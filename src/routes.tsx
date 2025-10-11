import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/types/navigation';
import { useAuth } from './contexts/AuthContext';

// Screens
import Login from '../src/pages/Login';
import Home from './pages/Home';
import DeliveryDetails from './pages/DeliveryDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "Home" : "Login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        {isLoggedIn ? (
          <>
            <Stack.Screen 
              name="Home" 
              component={Home}
              options={{
                title: 'Home',
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="DeliveryDetails" 
              component={DeliveryDetails}
              options={{
                title: 'Detalhes da Entrega',
                headerShown: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
              title: 'Login',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}