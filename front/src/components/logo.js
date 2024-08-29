import { View, Image, StyleSheet } from 'react-native';

const Logo = () =>{
    return(
        <View>
            <Image 
                source={require('../assets/logoAzul/logo2.png')}
                style={styles.chapeu}
                resizeMode="contain"/>
            <Image
                source={require('../assets/logoAzul/logo1.png')} 
                style={styles.boneco}
                resizeMode="contain"/>
        </View>
    )
}

const styles = StyleSheet.create({
    chapeu: {
        position: 'absolute',
        top: -14,  // Ajuste para posicionar o chapéu sobre o boneco
        right: 48,
        zIndex: 2, // Garante que o chapéu fique sobre o boneco
      },
    
      boneco: {
        zIndex: 1, // Garante que o boneco fique abaixo do chapéu
      },
});

export default Logo;