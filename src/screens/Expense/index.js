import React, { useState, useContext } from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Keyboard, 
  TouchableWithoutFeedback, 
  Alert } from 'react-native';
  
import { AuthContext } from '../../contexts/auth.context';
import firebase from '../../services/firebaseConfig';

import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Picker from '../../components/PickerSelect/index.android';



export default function Expense({}) {
  const [value, setValue] = useState('')
  const [type, setType] = useState(null)

  const {user: actualUser} = useContext(AuthContext)

  const navigation = useNavigation()

  const handleRegisterValue = () => {
    Keyboard.dismiss()
    if(isNaN(parseFloat(value)) || type === null){
      alert('Preencha todos os campos')
      return
    }
    Alert.alert(
      'Confirmando os dados',
      `Tipo: ${type} - Valor: ${parseFloat(value)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd(){
    console.log('adicionou registro');
    let uid = actualUser.uid

    let key = await firebase.database().ref('historic').child(uid).push().key;
    await firebase.database().ref('historic').child(uid).child(key).set({
      type: type,
      value: parseFloat(value),
      date: format(new Date(), 'dd/MM/yyyy')
    })

    //atualizar o saldo
    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let balance = parseFloat(snapshot.val().balance);

      type === 'despesa' ? balance -= parseFloat(value) : balance += parseFloat(value)

      user.child('balance').set(balance);
    })
    setValue('')
    Keyboard.dismiss()
    navigation.navigate('Home')
  }

 return (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
   <View style={styles.background}>
    <Header/>
    <View style={styles.container}>
      <TextInput
        placeholder='Valor a registrar'
        style={styles.input}
        keyboardType='numeric'
        returnKeyType='next'
        onSubmitEditing={() => Keyboard.dismiss()}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Picker
        onChange={setType}
        type={type}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegisterValue}>
        <Text style={styles.textButton}>Registrar Valor</Text>
      </TouchableOpacity>
    </View>
   </View>
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#131313'
  },
  container: {
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    width: '85%',
    fontSize: 18,
    borderRadius: 7,
    height: 60,
    marginTop: 30
  },
  button: {
    backgroundColor: '#00b94a',
    marginTop: 20,
    width: '85%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  textButton: {
    fontSize: 18,
    fontWeight: '600'
  }
})