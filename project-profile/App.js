
import { StyleSheet, Image, View, SafeAreaView, StatusBar, Text } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/66273229?v=4';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={styles.contente}>
        <Image 
          accessibilityLabel='Carlos no escritório'
          style={styles.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text style={[styles.defaultText, styles.name]}>Carlos Roberto</Text>
        <Text style={[styles.defaultText, styles.nickname]}>carlosti1099</Text>
        <Text style={[styles.defaultText, styles.description]}>
          Engenheiro Computacional | Suporte Técnico em Ti | Front-End Developer
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // column
    backgroundColor: colorGithub,
    flex: 1, //expandi para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  contente: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  
});
