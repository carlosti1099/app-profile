import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>HELLO WORLD APP!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e5ac3',
    flex: 1,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
});
