import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './modules/Home';
import Contact from './modules/MyAccount/Contact';
import MyAccount from './modules/MyAccount';
import iconHome from './images/iconHome.png';
import iconMyAccount from './images/iconMyAccount.png';

const AppNavigator = () => {
    const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Navigator
          initialRouteName="Home"
          headerMode="none"
          tabBarOptions={{
            activeTintColor:'#000',
            inactiveTintColor: '#666'
          }}
        >
            <Screen
             name="Home"
             component={Home}
             options={{
               tabBarIcon: () => (
                 <Image resizeMode="contain" style={{height:25}} source={iconHome}/>
               )
              }} 
            />

          <Screen
             name="Contact"
             component={Contact}
             options={{
               tabBarIcon: () => (
                 <Image resizeMode="contain" style={{height:25}} source={iconHome}/>
               )
              }} 
            />
            
            <Screen
             name="MyAccount"
             component={MyAccount}
             options={{
               title:'Minha Conta',
               tabBarIcon: () => (
                <Image resizeMode="contain" style={{height:25}} source={iconMyAccount}/>
              )
             }} 
            />
        </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;