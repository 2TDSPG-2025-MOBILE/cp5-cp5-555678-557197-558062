import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CalculatorScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
