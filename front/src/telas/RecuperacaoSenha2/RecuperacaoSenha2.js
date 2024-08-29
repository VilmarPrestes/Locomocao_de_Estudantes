import { View, Text, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../components/logo';
import Header from '../../components/header';
import styles from './RecuperacaoSenhaEstilos';

const RecuperacaoSenha2 = () => {
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

                <View>
                    <Text style={styles.textRedefinirSenha2}>
                        Sua senha deve possuir no minimo 6 caracteres, incluindo letras, números e caracteres especiais
                    </Text>

                </View>

                <View style={{alignItems:'flex-start', width:'90%'}}>
                    <Text style={styles.textEmail}>
                        Senha nova
                    </Text>
                </View>

                <View style={styles.container}>
                    <TextInput style={styles.input}>

                    </TextInput>
                </View>

                <View style={{alignItems:'flex-start', width:'90%'}}>
                    <Text style={styles.textEmail}>
                        Confirmar senha nova
                    </Text>
                </View>

                <View style={styles.container}>
                    <TextInput style={styles.input}>

                    </TextInput>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Redefinir senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )            
};

export default RecuperacaoSenha2;