
import { StyleSheet, Image, View, SafeAreaView, StatusBar } from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/66273229?v=4';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View >
        <Image accessibilityLabel='Carlos no escritório' style={styles.avatar} source={{uri: imageProfileGithub}}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, //expandi para a tela inteira
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 2,
  },
  
});
