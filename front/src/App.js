import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './telas/Login/Login.js';
import Cadastro from './telas/Cadastro/Cadastro.js';
import CodigoSeguranca from './telas/CodigoSeguranca/CodigoSeguranca.js';
import TelaConfirmacao from './telas/TelaConfimacao/TelaConfirmacao.js'
import RecuperacaoSenha1 from './telas/RecuperacaoSenha1/RecuperacaoSenha1.js';
import RecuperacaoSenha2 from './telas/RecuperacaoSenha2/RecuperacaoSenha2.js';
import HomeScreen from './telas/Home/Home.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="CodigoSeguranca" component={CodigoSeguranca} options={{headerShown:false}}/>
        <Stack.Screen name="TelaConfirmacao" component={TelaConfirmacao} options={{headerShown: false}}/>
        <Stack.Screen name="RecuperacaoSenha1" component={RecuperacaoSenha1}
          options={{headerShown: false}}/>
        <Stack.Screen name="RecuperacaoSenha2" component={RecuperacaoSenha2}
          options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


