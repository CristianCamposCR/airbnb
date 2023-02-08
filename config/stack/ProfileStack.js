import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Profile from '../../modules/profile/adapters/screens/Profile';


const Stack = createNativeStackNavigator();
export default function ProfileStack() {
  return (
   <Stack.Navigator
   initialRouteName=''
   screenOptions={{
    headerMode: 'screen',
    headerTintColor: 'white',
    headerStyle: {backgroundColor: '#175BF6'}
   }}>
    <Stack.Screen
        name='profileStack'
        options={{title: 'Perfil'}}
        component={Profile}
    />

   </Stack.Navigator>
  )
}