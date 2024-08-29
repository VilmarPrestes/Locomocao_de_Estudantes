import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    conteinerTelaInicial: {
      backgroundColor: '#00008b',
      flex: 1
    },
  
    containerTopo: {
      backgroundColor: '#00008b',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    containerBaixo: {
      backgroundColor: '#00008b', 
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 50
    },
  
    container20: {
      flex: 2, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00008b',
    },
    
    container60: {
      flex: 6, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00008b',
      paddingTop: 100 
    },
  
    textoBemVindo: {
      fontSize: 24,
      color: '#f1f1f1'
    },
  
    textoUnicaronas: {
      fontSize: 24,
      color: '#f1f1f1'
    },
  
    botaoIniciar: {
      backgroundColor: 'black',
      width: 250, 
      height: 50, 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      marginTop: 20
    },
  
    textoIniciar: {
      fontSize: 15,
      color: '#f1f1f1'
    },

    chapeu: {
      position: 'absolute',
      top: -17,
      right: 48,
      zIndex: 2,
    },
  
    boneco: {
      zIndex: 1,
    },

  });

export default styles;