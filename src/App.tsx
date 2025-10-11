import '../global.css';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './routes';
import { GlobalAlertProvider } from './contexts/GlobalAlertContext';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background-primary relative">
      <GlobalAlertProvider>
        <Routes />
      </GlobalAlertProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}