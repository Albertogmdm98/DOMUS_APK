// screens/Login.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../config';
import { useTranslation } from 'react-i18next';

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(t('login.error'), t('login.error_enter_credentials'));
      return;
    }

    const apiUrl = config.apiUrl;

    console.log(apiUrl);
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      console.log('Response status:', response.status);

      if (!response.ok) {
        console.log('Response status:', response.status);

        if (response.status === 401) {
          Alert.alert(t('login.error'), t('login.error_invalid_credentials'));
        } else {
          Alert.alert(t('login.error'), t('login.error_generic'));
        }
        return;
      }

      const data = await response.json();
      const { token, userId, userType, userName } = data;

      login(userId, userType, userName, token);
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert(t('login.error'), t('login.error_network'));
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logos/DOMUS texto y logo blanco.png')} 
        style={styles.iconLogo} 
      />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder={t('login.email_placeholder')}
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder={t('login.password_placeholder')}
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('RequestVerificationCode')}>
          <Text style={styles.forgotPasswordText}>
            {t('login.forgot_password')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>{t('login.login_button')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerBtnText}>{t('login.register')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004aad',
  },
  iconLogo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 40,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
    justifyContent: 'center',
  },
  loginBtn: {
    backgroundColor: '#a7c8e7',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  loginBtnText: {
    color: '#004aad',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  registerBtn: {
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#eec494',
    padding: 15,
    borderRadius: 5,
  },
  registerBtnText: {
    fontWeight: 'bold',
    color: '#004aad',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Login;
