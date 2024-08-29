import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Logo from '../../components/logo';
import Header from '../../components/header';
import styles from './CodigoSegurancaEstilos';


const CodigoSeguranca = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState(['', '', '', '', '']);
    const inputs = useRef([]);

    const handleChange = (text, index) => {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      if (text && index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    };

    return(
    <SafeAreaView style={styles.conteinerTelaInicial}>
        <Header/>

        <View style={styles.container80}>
          <View style={styles.containerLogo}>
            <Logo/>
            <Text style={styles.textSecurit}>
              Insira o códgigo de segurança
            </Text>
          </View>

          <View>
            <Text style={styles.textSecurit2}>
              Insira o código de segurança que enviamos para o seu email e confirme o seu cadastro
            </Text>
          </View>

          <View style={styles.container}>
            {code.map((value, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleChange(text, index)}
              ref={(input) => inputs.current[index] = input}
            />
          ))}
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('TelaConfirmacao')}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Text>Não recebeu seu código?</Text>
            <TouchableOpacity>
              <Text style={{color:'#00008b'}}>Receba um novo</Text>
            </TouchableOpacity>
          </View>

        </View>

    </SafeAreaView>
    )
};

export default CodigoSeguranca;