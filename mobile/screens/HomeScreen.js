// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{t('welcome')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  welcome: { fontSize: 24 }
});

export default HomeScreen;
