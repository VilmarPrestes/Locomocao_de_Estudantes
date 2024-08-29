import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 20,
      marginVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: '#f1f1f1',
    },
    
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      height: 50,
      backgroundColor: '#f1f1f1',
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
    },
    button: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      padding: 15,
    },
    buttonText: {
      color: '#f1f1f1',
      fontSize: 16,
    },
    content: {
      flex: 1,
      paddingTop: 20,
      alignItems: 'center',
    },
    screenText: {
      fontSize: 24,
      color: '#00008b',
      marginBottom: 20,
    },
   
    icon: {
      position: 'absolute',
      left: 10,
      zIndex: 1,
    },
    input: {
      flex: 1,
      height: 40,
      paddingLeft: 40,
    },
    termosContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      width: '100%',
    },

    termosTexto: {
      fontSize: 11,
      textAlign: 'center',
    },
    termosTextoAzul: {
      fontSize: 11,
      color: '#00008b',
    
    }, 
    cadastreContainer: {
      width: '100%',
      alignItems: 'center',
      padding: 15,
    },
    cadastreButton: {
      backgroundColor: 'black',
      alignItems: 'center',
      padding: 15,
      borderRadius: 20,
      width: '80%',
    },
    cadastreText: {
      fontSize: 14,
      color: '#f1f1f1',
    },
  
  });

  export default styles;
  