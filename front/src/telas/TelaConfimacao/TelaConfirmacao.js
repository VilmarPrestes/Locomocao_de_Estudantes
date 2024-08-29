import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../components/logo';
import Header from '../../components/header';
import styles from './TelaConfirmacaoEstilos';

const TelaConfirmacao = () =>{
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.conteinerTelaInicial}>
            <Header/>

            <View style={styles.container80}>
                <View style={styles.containerLogo}>
                    <Logo/>
                </View>
                <View style={styles.conteinerTexto}>
                    
                    <Text style={styles.textContent}>
                        Cadastro realizado com sucesso!
                    </Text>

                    <Text style={styles.textContent}>
                        Prossiga para a tela de login clicando em "Continuar"
                    </Text>

                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>
                            Continuar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default TelaConfirmacao;