import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import ProfileStack from '../stack/ProfileStack'
import RentsStack from '../stack/RentsStack'


const Tab = createBottomTabNavigator()


export default function Navigation() {
  return (
   <NavigationContainer>
    <Tab.Navigator
        initialRouteName='profile'
        screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route,color),
            tabBarActiveTintColor: '#175BF6',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
        })}
    >
        <Tab.Screen
        name='profile'
        options={{title: 'Perfil'}}
        component={ProfileStack}/>
        <Tab.Screen
        name='rents'
        options={{title: 'Rentas'}}
        component={RentsStack} />


    </Tab.Navigator>
   </NavigationContainer>
  )
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case 'profile':
            iconName = 'account-outline';
            break;
            case 'rents':
                iconName = 'currency-usd';
                break;
        default:
            break;
    }
    return (
        <Icon
        type='material-community'
        name={iconName}
        size={22}
        color={color} 
        >
        </Icon>
    )
}