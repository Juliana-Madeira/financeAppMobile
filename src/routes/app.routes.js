import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Expense from '../screens/Expense';
import Profile from '../screens/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return (
        <AppDrawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor:'#00b94a',
                drawerActiveTintColor: '#131313',
                drawerInactiveBackgroundColor: '#000',
                drawerInactiveTintColor: '#DDD',
                drawerStyle: {
                    backgroundColor: '#131313',
                },
                drawerLabelStyle: {
                    fontWeight: 'bold'
                },
                drawerItemStyle: {
                    marginVertical: 10
                }
            }}        
        >
            <AppDrawer.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <AppDrawer.Screen name='Registro de Valor' component={Expense} options={{headerShown: false}}/>
            <AppDrawer.Screen name='Perfil' component={Profile} options={{headerShown: false}}/>
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;