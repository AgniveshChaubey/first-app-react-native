import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  // console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseFont}>Hii React Native! This is Agnivesh.</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseFont: {
    fontFamily: 'Cochin'
  }
});
