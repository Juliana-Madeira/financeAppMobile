import React, { useState, useContext } from 'react';
import { Platform, View, StyleSheet, Image, TextInput, KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth.context';

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const { signUp } = useContext(AuthContext)

  const navigation = useNavigation()

  const handleSignup = () => {
    console.log('apertei botao de cadastrar');
    signUp(email, password, name)
  }

 
 return (
   <View style={styles.background}>
     <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
     >
        <Image style={styles.image} source={require('../../assets/Logo.png')}/>
        <View style={styles.input}>
          <TextInput
            placeholder='Nome'
            autoCorrect={false}
            style={styles.textInput}
            placeholderTextColor='rgba(255,255,255,0.30)'
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder='Email'
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
            placeholderTextColor='rgba(255,255,255,0.30)'
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder='Senha'
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
            placeholderTextColor='rgba(255,255,255,0.30)'
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignup} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.textButtonSignup}>Já tem uma conta? Login</Text>
        </TouchableOpacity>
     </KeyboardAvoidingView>
   </View>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#131313',
      
    }, 
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',      
    },
    image: {
      marginBottom: 20
    },
    input: {
      flexDirection: 'row'
    },
    textInput: {
      backgroundColor: '#000',
      width: '90%',
      fontSize: 17,
      color: '#FFF',
      marginBottom: 15,
      padding: 15,
      borderRadius: 7,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00b94a',
      width: '90%',
      height: 55,
      borderRadius: 7,
      marginTop: 10
    },
    textButton: {
      color: "#131313",
      fontSize: 18
    },
    buttonSignup: {
      marginTop: 35,
      marginBottom: 9
    },
    textButtonSignup: {
      color: '#A9A9A9',
    }
})