import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native';
import { validaCadastro } from '../../services/validaCadastro';
import Logo from '../../components/logo';
import Header from '../../components/header';
import styles from './CadastroEstilos';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [numeroMatricula, setNumeroMatricula] = useState('');
  const [numeroCelular, setNumeroCelular] = useState('');
  const navigation = useNavigation(); 

  const handleRegister = () => {
    if (validaCadastro(name, email, password, numeroMatricula, numeroCelular)) {
      navigation.navigate('CodigoSeguranca');
    }
    setName('');
    setEmail('');
    setPassword('');
    setNumeroMatricula('');
    setNumeroCelular('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <Header/>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Cadastro')}
            >
              <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setName('');
                setEmail('');
                setPassword('');
                setNumeroMatricula('');
                setNumeroCelular('');
                navigation.navigate('Login')}}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={{flexDirection: 'row', width: '80%'}}>
              <Logo/>
              <Text style={styles.screenText}>Cadastre-se aqui para caronas incríveis</Text>
            </View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="person" size={20} color="#00008b" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Nome completo"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="email" size={20} color="#00008b" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="E-mail institucional"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="lock" size={20} color="#00008b" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="school" size={20} color="#00008b" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Número de matrícula"
                value={numeroMatricula}
                onChangeText={setNumeroMatricula}
              />
            </View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="phone" size={20} color="#00008b" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Número de celular"
                value={numeroCelular}
                onChangeText={setNumeroCelular}
              />
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={styles.termosContainer}>
                <Text style={styles.termosTexto}>
                  Ao clicar em Cadastre-se você concorda com nossos 
                </Text>
              </View>

              <View style={styles.termosContainer}>
                  <TouchableOpacity>
                    <Text style={styles.termosTextoAzul}>Termos</Text>
                  </TouchableOpacity>
                  <Text style={styles.termosTexto}> , </Text>
                  <TouchableOpacity>
                    <Text style={styles.termosTextoAzul}>Política de Privacidade</Text>
                  </TouchableOpacity>
                  <Text style={styles.termosTexto}> e </Text>
                  <TouchableOpacity>
                    <Text style={styles.termosTextoAzul}>Política de Cookies.</Text>
                  </TouchableOpacity>
                  <Text style={styles.termosTexto}>
                    Voce
                  </Text>
              </View>

              <View style={styles.termosContainer}>
                <Text style={styles.termosTexto}>
                   poderá receber notificações por SMS e cancelar isso quando quiser.
                </Text>
              </View>
            </View>
            <View style={styles.cadastreContainer}>
              <TouchableOpacity style={styles.cadastreButton} onPress={handleRegister}>
                <Text style={styles.cadastreText}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Cadastro;
