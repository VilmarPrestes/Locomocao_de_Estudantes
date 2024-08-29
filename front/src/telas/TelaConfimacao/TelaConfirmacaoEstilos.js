import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    conteinerTelaInicial: {
        backgroundColor: '#00008b',
        flex: 1
      },

    container: {
        flexDirection: 'row',  
        padding: 15,
    },

    containerLogo: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        width: '80%',
        paddingTop: 60,
    },

    conteinerTexto:{
        flexDirection: 'column',
        alignItems: 'center',
    },

    container80: {
        flex: 8, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },

    textContent: {
        fontSize: 25,
        color: '#00008b',
        textAlign: 'center',
        padding: 20,
    },

    buttonText: {
        color: '#f1f1f1',
        fontSize: 16,
      },

      button: {
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 15,
        borderRadius: 20,
        width: '80%',
      },
    });

export default styles;