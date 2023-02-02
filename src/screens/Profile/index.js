import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth.context';

import Header from '../../components/Header';

export default function Profile() {

  const { user, signOut } = useContext(AuthContext)
  
  const navigation = useNavigation()

 return (
   <View style={styles.background}>
     <Header/>
     <View  style={styles.container}>
      <Text style={styles.name}>Olá, {user && user.name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro de Gastos')}>
        <Text style={styles.textButton}>Registrar Gastos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogout} onPress={signOut}>
        <Text style={styles.textButtonLogout}>Sair</Text>
      </TouchableOpacity>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#131313',
  },
  container: {
    alignItems: 'center'
  },
  name: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 27,
    marginBottom: 25
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b94a',
    width: '90%',
    height: 55,
    borderRadius: 10,
    marginBottom: 15
  },
  textButton: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600'
  },
  buttonLogout: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c62c36',
    width: '90%',
    height: 55,
    borderRadius: 10,
    marginBottom: 10
  },
  textButtonLogout: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600'
  },
})