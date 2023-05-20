import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screen/Home';
import Detail from './src/screen/Detail';
import Album from './src/screen/Album';

const Stack = createNativeStackNavigator();

function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Detail' component={Detail}/>
        <Stack.Screen name='Album' component={Album}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;