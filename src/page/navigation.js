import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SeniorScreen from './SeniorScreen';
import CarerScreen from './CarerScreen';
import TestingScreen from './TestingScreen';
import ContactScreen from './ContactScreen';
import GamesScreen from './GamesScreen';
import CuresScreen from './CuresScreen';
import FamilyScreen from './FamilyScreen';
import EventScreen from './EventScreen';
import CalendarScreen from './CalendarScreen';
import CallingScreen from './CallingScreen';
import IncomingCallScreen from './IncomingCallScreen';
import FlappyGameScreen from './FlappyGameScreen';
import MemoryGameScreen from './MemoryGameScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'LoginScreen'}>
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false}}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name='SeniorScreen' component={SeniorScreen}/>
                <Stack.Screen name='CarerScreen' component={CarerScreen}/>
                <Stack.Screen name='TestingScreen' component={TestingScreen}/>
                <Stack.Screen name="Contacts" component={ContactScreen}/>
                <Stack.Screen name='GamesScreen' component={GamesScreen}/>
                <Stack.Screen name='CuresScreen' component={CuresScreen}/>
                <Stack.Screen name='FamilyScreen' component={FamilyScreen}/>
                <Stack.Screen name='EventScreen' component={EventScreen}/>
                <Stack.Screen name='CalendarScreen' component={CalendarScreen}/>
                <Stack.Screen name='CallingScreen' component={CallingScreen} options={{ headerShown: false}}/>
                <Stack.Screen name='IncomingCallScreen' component={IncomingCallScreen} options={{ headerShown: false}}/>
                <Stack.Screen name='MemoryGameScreen' component={MemoryGameScreen} options={{ headerShown: false}}/>
                <Stack.Screen name='FlappyGameScreen' component={FlappyGameScreen} options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    ); 
};


export default Navigation;

