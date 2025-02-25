// LanguageSelectionScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import i18n from '../i18';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/LanguageSelectionStyle'; // Importa los estilos

// Lista de idiomas soportados
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' }, 
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' }, 
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
];

const LanguageSelectionScreen = () => {
  const navigation = useNavigation();

  // Función para cambiar el idioma
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