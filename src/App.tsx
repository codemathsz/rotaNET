import '../global.css';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './routes';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <Routes />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}