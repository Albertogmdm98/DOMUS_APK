// LanguageSelectionScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import i18n from '../i18'; // Asegúrate de que la ruta sea correcta
import { useNavigation } from '@react-navigation/native';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'de-CH', name: 'Swiss', flag: '🇨🇭' },
];

const LanguageSelectionScreen = () => {
  const navigation = useNavigation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    // Navegar a la pantalla de Login después de seleccionar el idioma
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Language</Text>
      <View style={styles.gridContainer}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={styles.languageBox}
            onPress={() => changeLanguage(lang.code)}
          >
            <Text style={styles.flag}>{lang.flag}</Text>
            <Text style={styles.languageName}>{lang.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default LanguageSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004aad',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  languageBox: {
    width: 140,
    height: 140,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // Sombra para iOS y Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  flag: {
    fontSize: 50,
    marginBottom: 10,
  },
  languageName: {
    fontSize: 18,
    color: '#004aad',
    fontWeight: '500',
  },
});
