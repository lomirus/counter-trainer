import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { LearnScreen } from './src/screens/LearnScreen'
import { SettingsScreen } from './src/screens/SettingsScreen'

const Tab = createBottomTabNavigator()

const App = () => (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Learn">
            <Tab.Screen
                name="Learn"
                component={LearnScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons name={'home'} size={size} color={color} />
                    )
                }} />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons name={'settings'} size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    </NavigationContainer>
);

export default App;
