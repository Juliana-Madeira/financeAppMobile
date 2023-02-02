import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function HistoricList({ data }) {
 return (
   <View style={styles.container}>
    <View style={styles.type}>
        <View 
          style={data.type === 'despesa' ? styles.iconTypeRed : styles.iconTypeGreen}
        >
          <Icon 
            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
            color='#FFF' 
            size={20}
          />
          <Text style={styles.textType}>{data.type}</Text>
        </View>
    </View>
    <Text style={styles.value}>R$ {data.value}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginBottom: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: 2,
    shadowOpacity: 0.4,
    backgroundColor: 'rgba(0,0,0,0.05)'
  },
  type:{
    flexDirection: 'row',
  },
  iconTypeGreen: {
    flexDirection: 'row',
    backgroundColor: '#049301',
    paddingBottom: 3,
    paddingTop: 3,
    paddingLeft: 8,
    paddingRight: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconTypeRed: {
    flexDirection: 'row',
    backgroundColor: '#c62c36',
    paddingBottom: 3,
    paddingTop: 3,
    paddingLeft: 8,
    paddingRight: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textType: {
    color:'#FFF',
    marginLeft: 5,
    fontSize: 16,
    fontStyle: 'italic'
  },
  value: {
    color: '#222',
    fontSize: 21,
    fontWeight: '500'
  }
})