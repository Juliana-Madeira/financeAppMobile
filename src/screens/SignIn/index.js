import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SignIn() {
 return (
   <View style={styles.container}>
    <Text>SignIn aqui</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        alignItems: 'center'
    }, 
})