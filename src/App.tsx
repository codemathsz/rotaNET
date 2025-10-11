import '../global.css';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './routes';
import { GlobalAlertProvider } from './contexts/GlobalAlertContext';
import { DeliveryProvider } from './contexts/DeliveryContext';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background-primary" style={{ flex: 1 }}> 
      <AuthProvider>
        <GlobalAlertProvider>
          <DeliveryProvider>
            <Routes />
          </DeliveryProvider>
        </GlobalAlertProvider>
      </AuthProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}