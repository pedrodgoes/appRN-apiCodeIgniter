import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarIcon:({size})=> (<MaterialCommunityIcons name="home" size={size}
            />)}} />

            <Tab.Screen name="Details" component={DetailsScreen}
            options={{
                tabBarIcon:({size})=> (<MaterialCommunityIcons name="plus" size={size}
            />)}} />
        </Tab.Navigator>
        </NavigationContainer>
        
    );
}