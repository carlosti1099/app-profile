import React from "react";
import { StyleSheet, Image, View, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/66273229?v=4';

const urlToMyGithub = 'https://github.com/carlosti1099';

export default function App() {

  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
      console.log('link aprovado');
      console.log('Abrindo link...');
      await Linking.openURL(urlToMyGithub);
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={styles.contente}>
        <Image 
          accessibilityLabel='Carlos no escritório'
          style={styles.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel='Nome: carlos roberto'
          style={[styles.defaultText, styles.name]}>
          Carlos Roberto
        </Text>
        <Text
          accessibilityLabel='Nickname: carlosti1099'
          style={[styles.defaultText, styles.nickname]}>
          carlosti1099
        </Text>
        <Text
          accessibilityLabel='Descrição: Engenheiro Computacional | 
          Suporte Técnico em Ti | Front-End Developer'
          style={[styles.defaultText, styles.description]}>
          Engenheiro Computacional | Suporte Técnico em Ti | Front-End Developer
        </Text>
      </View>

      {/*  Box 1º row  */}
      <View style={[styles.containerBox, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "row"
        }]}>
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />    
      </View>
      {/* Fim Box 1º row */}

      {/* Box 2º row */}
      <View style={[styles.containerBox, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "row"
        }]}>
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
         <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
      </View>
      {/* Fim Box 2º row */}

      {/* Box 3º Row */}
      <View style={[styles.containerBox, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "row"
        }]}>
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
         <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
      </View>
      {/* Fim Box 3º row */}

      {/* Box 4º Row */}
      <View style={[styles.containerBox, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "row"
        }]}>
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
         <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
      </View>
      {/* Fim Box 4º row */}

      {/* Box 5º Row */}
      <View style={[styles.containerBox, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "row"
        }]}>
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#E4105D" },
          ]}
        />
         <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
      </View>
      {/* Fim Box 5º row */}

      {/* Box 6º Row */}
      <View style={[styles.containerBox, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "row"
        }]}>
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
         <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
        <View style={[styles.box,
          { backgroundColor: "#0000CD" },
          ]}
        />
      </View>
      {/* Fim Box 6º row */}

      {/* Botton */}
      <Pressable onPress={handlePressGoToGithub}>
        <View style={styles.button}>
          <Text style={[styles.defaultText, styles.textButton]}>Open in Github</Text>
        </View>
      </Pressable>
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
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  // box
  containerBox: {
    padding: 2,

  },
  box: {
    width: 14,
    height: 14,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  }, 
  // fim box

});
