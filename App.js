import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator()

const LearnScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#6cf'
        }}>
            <Text style={{
                fontSize: 24,
                color: "white"
            }}>Hello World</Text>
            <Button
                title="Click me and nothing will take place" />
        </View>
    )
}

const SettingsScreen = () => {
    return (
        <View>
            <Text>Test Settings Screen</Text>
        </View>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Learn">
                <Tab.Screen
                    name="Learn"
                    component={LearnScreen} 
                    options={{
                        tabBarIcon: ({ focused, color, size }) => <MaterialIcons name={'assessment'} size={size} color={color} />
                    }}/>
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => <MaterialIcons name={'settings'} size={size} color={color} />
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
