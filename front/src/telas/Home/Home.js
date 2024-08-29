import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './HomeEstilos';

function HomeScreen() {

    const navigation = useNavigation(); 

    return (
      <SafeAreaView style={styles.conteinerTelaInicial}>
        <View style={styles.containerTopo}>
          <View style={styles.container60}>
            <Text style={styles.textoBemVindo}>
              Bem-Vindo!
            </Text>
          </View>
          <View style={styles.container20} />
        
          <View>
            <Image 
              source={require('../../assets/logoBranco/logo2.png')}
              style={styles.chapeu}
              resizeMode="contain"/>
            <Image
                source={require('../../assets/logoBranco/logo1.png')} 
                style={styles.boneco}
                resizeMode="contain"/>
          </View>
          <View style={styles.container20}>
            <Text style={styles.textoUnicaronas}>
              UniCaronas
            </Text>
          </View>
        </View>
        <View style={styles.containerBaixo}>
          <TouchableOpacity style={styles.botaoIniciar} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.textoIniciar}>Iniciar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

export default HomeScreen;
  
  