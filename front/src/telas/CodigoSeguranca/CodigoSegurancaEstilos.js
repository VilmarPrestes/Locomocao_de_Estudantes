import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native';

const styles = StyleSheet.create({
    conteinerTelaInicial: {
        backgroundColor: '#00008b',
        flex: 1
      },

    container: {
      flexDirection: 'row', 
      padding: 15,
    },

    container80: {
      flex: 8, 
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },

    containerLogo: {
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '80%',
      paddingTop: 60,
  },

    textSecurit: {
      fontSize: 25,
      color: '#00008b',
      textAlign: 'center',
    }, 

      textSecurit2: {
        fontSize: 15,
        color: 'black',
        padding: 15,
      },

      input: {
        width: 50,
        height: 60,
        borderWidth: 1,
        borderColor: '#000',
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#f1f1f1'
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
        width: '50%',
      },
});

export default styles;
