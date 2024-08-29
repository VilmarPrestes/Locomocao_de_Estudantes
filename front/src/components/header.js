import { View, Text, TouchableOpacity, StyleSheet,} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native';

const Header = () =>{
    const navigation = useNavigation();

    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={22} color="white" />
        </TouchableOpacity>
        <View style={{paddingLeft: 5}}>
          <FontAwesome name="graduation-cap" size={22} color="white" />
          <Text style={styles.headerTitle}>UniCaronas</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: '#00008b',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 15,
        zIndex: 1,
        elevation: 5,
      },
      headerTitle: {
        fontSize: 25,
        color: '#f1f1f1',
        textAlign: 'center',
        paddingLeft: 5,
        fontStyle: 'italic',
      },
      backButton: {
        paddingVertical: 25,
      },
});

export default Header;