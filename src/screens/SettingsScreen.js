import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SettingsHomeScreen from './SettingsHomeScreen';

const Stack = createStackNavigator()

const SettingsScreen = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="SettingsHome"
            component={screens.home}
            options={{
                title: "Settings"
            }} />
    </Stack.Navigator>
)

const screens = {
    home: () => <SettingsHomeScreen />
}

export { SettingsScreen }
