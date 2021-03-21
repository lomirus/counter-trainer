import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SettingsHomeScreen from './SettingsHomeScreen';
import AboutScreen from './AboutScreen';

const Stack = createStackNavigator()

const SettingsScreen = () => (
    <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen
            name="SettingsHome"
            component={screens.home}
            options={{
                title: "Settings"
            }} />
        <Stack.Screen
            name="About"
            component={screens.about}
            options={{
                title: "About"
            }} />
    </Stack.Navigator>
)

const screens = {
    home: ({ navigation }) => <SettingsHomeScreen navigation={navigation} />,
    about: ({ navigation }) => <AboutScreen navigation={navigation} />
}

export { SettingsScreen }
