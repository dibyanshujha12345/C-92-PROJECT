import * as react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import SpaceScreen from './screens/SpaceScreen';
import AnimalScreen from './screens/AnimalScreen';


const Stack=createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOption={{
        headerMode:'screen',headerTintColor:'white',headerStyle:{backgroundColor:'#406882'}
      }}
       >
         <Stack.Screen name = "Main" component={MainScreen}/>
         <Stack.Screen name = "Animal" component={AnimalScreen}/>
         <Stack.Screen name = "Space" component={SpaceScreen}/>

       </Stack.Navigator>
    </NavigationContainer>
  )
}
