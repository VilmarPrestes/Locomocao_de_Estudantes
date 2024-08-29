import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native';
import ConfirmHcaptcha from '@hcaptcha/react-native-hcaptcha';
import Logo from '../../components/logo';
import Header from '../../components/header';
import styles from './LoginEstilos';

const siteKey = '00000000-0000-0000-0000-000000000000';
const baseUrl = 'https://hcaptcha.com';

const Login = () => {

  const [loginUser, setLoginUser] = useState('');
  const [loginSenha, setLoginSenha] = useState('');
  const [captchaCode, setCaptchaCode] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation(); 
  const captchaRef = useRef(null);

  const onMessage = (event) => {
    if (event && event.nativeEvent.data) {
      const data = event.nativeEvent.data;
      if (['cancel', 'error', 'expired'].includes(data)) {
        if (captchaRef.current) {
          captchaRef.current.hide();
        }
        setCaptchaCode(data);
      } else if (data === 'open') {
        console.log('Visual challenge opened');
      } else {
        console.log('Verified code from hCaptcha', data);
        setCaptchaCode(data);
        if (captchaRef.current) {
          captchaRef.current.hide();
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <Header />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Cadastro')}
            >
              <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => 
                navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginContent}>
            <View style={styles.telaLoginUpContainer}>
              <Logo />
              <Text style={styles.telaLoginUpTexto}>Acesse sua conta!</Text>
            </View>
            <View style={styles.inputContainerLogin}>
              <MaterialIcons name="email" size={20} color="#00008b" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email ou nome de usuario"
                value={loginUser}
                onChangeText={setLoginUser}
              />
            </View>
            <View style={styles.inputContainerLogin}>
              <MaterialIcons name="lock" size={20} color="#00008b" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={loginSenha}
                onChangeText={setLoginSenha}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity style={styles.eyeIcon}
              onPress={() => setPasswordVisible(!passwordVisible)}
               >
              <MaterialIcons 
                name={passwordVisible ? "visibility" : "visibility-off"} 
                size={20} 
                color="gray" 
              />
              </TouchableOpacity>
            </View>
            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity onPress={() => {
                setLoginUser('');
                setLoginSenha('');
                navigation.navigate('RecuperacaoSenha1')}}>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.reCaptchaContainer}>
              <TouchableOpacity
                style={styles.captchaCheckbox}
                onPress={() => captchaRef.current && captchaRef.current.show()}
              >
                <View style={styles.checkboxIcon}>
                  {captchaCode && <FontAwesome name="check" size={16} color="green" />}
                </View>
                <Text style={styles.captchaText}>I'm not a robot</Text>
                <View style={styles.containerCaptcha}>
                  <Image
                    source={require('../../assets/hcaptcha.png')} 
                    style={styles.captchaLogo}
                    resizeMode="contain"
                  />
                  <Text>hCaptcha</Text>
                  <Text style={{color: 'gray', fontSize: 13}}>Privacy-Terms</Text>
                </View>
              </TouchableOpacity>
              <ConfirmHcaptcha
                ref={captchaRef}
                siteKey={siteKey}
                baseUrl={baseUrl}
                languageCode="en"
                onMessage={onMessage}
              />
            </View>
          </View>

          <View style={styles.loginButtonContainer}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

