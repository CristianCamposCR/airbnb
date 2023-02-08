import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Rents from '../../modules/rents/adapters/screens/Rents';


const Stack = createNativeStackNavigator();

export default function RentsStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#175BF6'}
    }}>
        <Stack.Screen
        name='rentsStack'
        options={{title: 'Rentas'}}
        component={Rents}/>

    </Stack.Navigator>
  )
}