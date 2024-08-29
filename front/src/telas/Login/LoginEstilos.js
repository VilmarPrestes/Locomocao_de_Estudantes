import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
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

    loginContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    loginButtonContainer: {
      width: '100%',
      alignItems: 'center',
      alignContent: 'flex-start',
      padding: 15,
      marginBottom: 150,
    },

    loginButton: {
      backgroundColor: 'black',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 14,
      width: '65%',
    },

    telaLoginUpContainer: {
      width: '100%',
      alignItems: 'center',
      padding: 30,
      flexDirection: 'row'
    },

    telaLoginUpTexto: {
      fontSize: 24,
      color: '#00008b',
    },

    forgotPassword: {
      color: '#00008b',
      marginTop: 15,
      marginRight: 10,
    },

    forgotPasswordContainer: {
      width: '80%',
      alignItems: 'flex-end',
    },

    inputContainerLogin: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 20,
      marginVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: '#f1f1f1',
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
      paddingRight: 40,
    },

    eyeIcon: {
      position: 'absolute',
      right: 10, 
      zIndex: 1,
    },
  
    reCaptchaContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'flex-end',
      paddingVertical: 10,
      paddingRight: 25,
    },
    captchaCheckbox: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      backgroundColor: '#f5f5f5',
      width: '70%'
    },
    checkboxIcon: {
      width: 25,
      height: 25,
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    captchaText: {
      fontSize: 16,
      color: 'gray',
    },

    containerCaptcha:{
      paddingVertical: 5,
      alignItems: 'center'
    },

    captchaLogo: {
      width: 30,
      height: 30,
    },
  
  });
  
  export default styles;