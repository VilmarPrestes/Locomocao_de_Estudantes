import {StyleSheet } from 'react-native';

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
        alignItems: 'center', 
        width: '100%',
        paddingTop: 40,
    },

    container80: {
        flex: 8, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    textRedefinirSenha: {
        fontSize: 25,
        color: '#00008b',
        textAlign: 'center',
      }, 

    textRedefinirSenha2: {
    fontSize: 15,
    color: 'black',
    padding: 10,
  },

  textEmail: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },

  input: {
    flex: 1,
    height: 40,
    paddingLeft: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#f1f1f1'
  },

  containerButton: {
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    padding: 25,
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