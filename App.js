import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import firebase from './src/services/firebaseConfig';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#131313' barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
}


