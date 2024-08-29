import { View, Text, TouchableOpacity, SafeAreaView, TextInput,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../components/logo';
import Header from '../../components/header';
import styles from './RecuperacaoSenhaEstilos';

const RecuperacaoSenha1 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.conteinerTelaInicial}>
            <Header/>

            <View style={styles.container80}>
               <View style={styles.containerLogo}>
                    <Logo/>
               
                    <Text style={styles.textRedefinirSenha}>
                        Redefina sua senha
                    </Text>
                </View>
                <View style={{width: '90%'}}>
                    <Text style={styles.textRedefinirSenha2}>
                        Vamos enviar um email com um link para redefinir sua senha
                    </Text>

                    <Text style={styles.textEmail}>
                        E-mail cadastro
                    </Text>
                </View>

                <View style={styles.container}>
                    <TextInput style={styles.input}>

                    </TextInput>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('RecuperacaoSenha2')}>
                    <Text style={styles.buttonText}>Enviar e-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )            
};

export default RecuperacaoSenha1;