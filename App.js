import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


console.disableYellowBox = true
LogBox.ignoreAllLogs()


import firebase from './src/services/firebaseConfig';

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth.context';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#131313' barStyle='light-content'/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}


