import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

export default function Header() {

    const navigation = useNavigation()

 return (
   <View style={styles.container}>
    <TouchableOpacity tyle={styles.buttonMenu} onPress={() => {navigation.toggleDrawer()}}>
        <Icon
        name= 'menu'
        color='#FFF'
        size={30} 
        />
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 15,
        width: '100%',
        height: 50
    },
    buttonMenu: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})