import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { format } from 'date-fns';

import firebase from '../../services/firebaseConfig';

import { AuthContext } from '../../contexts/auth.context';

import Header from '../../components/Header';
import HistoricList from '../../components/HistoricList';

export default function Home() {
  const [historic, setHistoric] = useState([])
  const [balance, setBalance] = useState(0)

  const { user } = useContext(AuthContext)
  const uid = user && user.uid

  useEffect(() => {
    async function loadBalanceList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setBalance(snapshot.val().balance)
      })
      await firebase.database().ref('historic')
      .child(uid)
      .orderByChild('date').equalTo(format(new Date, 'dd/MM/yyyy'))
      .limitToLast(15).on('value', (snapshot) => {

        setHistoric([]); //zerar o array deixar vazio pra nao duplicar

        snapshot.forEach((item) => {
          let list = {
            key: item.key,
            value: item.val().value,
            type: item.val().type
          }

          setHistoric(oldArray => [...oldArray, list])
        })

      })
    }

    loadBalanceList()

  }, [])

 return (
  <View style={styles.background}>
     <Header/>
     <View style={styles.container}>
      <Text style={styles.name}>{user && user.name}</Text>
      <Text style={styles.balance}>R$ {balance.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.' )}</Text>
     </View>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList 
      style={styles.flatlist} 
      showsVerticalScrollIndicator={false}
      data={historic}
      keyExtractor={item => item.key}
      renderItem={({ item }) => (<HistoricList data={item}/>)}
      />
  </View>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#131313'
    },
    container: {
      marginLeft: 20,
      marginBottom: 20
    },
    name: {
      color: '#FFF',
      fontSize: 19,
      fontStyle: 'italic'
    },
    balance: {
      color: '#FFF',
      marginTop: 5,
      fontSize: 30,
      fontWeight: 'bold'
    },
    title: {
      marginLeft: 20,
      color: '#00b94a',
      marginBottom: 8
    },
    flatlist: {
      paddingTop: 15,
      backgroundColor: '#FFF',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      marginLeft: 8,
      marginRight: 8,
      marginHorizontal: 15
    } 

})