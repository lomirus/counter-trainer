import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const LearnScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="LearnHome">
            <Stack.Screen
                name="LearnHome"
                component={LearnHomeScreen}
                options={{
                    title: "Home"
                }}
            />
            <Stack.Screen
                name="LearnMain"
                component={LearnMainScreen}
                options={{
                    title: "Trainer"
                }}
            />
        </Stack.Navigator>
    )
}

const LearnHomeScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                fontSize: 24,
                color: "black",
                marginBottom: 36
            }}>Choose your learning mode</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%"
                }}>
                <Pressable
                    android_ripple={{
                        color: 'rgba(0,0,0,0.1)',
                        borderless: true,
                        radius: 36,
                    }}
                    style={{
                        borderRadius: 36,
                        padding: 12,
                        backgroundColor: "#007AFF",
                        elevation: 8
                    }}
                    onPress={
                        () => {
                            navigation.push("LearnMain")
                        }
                    }>
                    <MaterialIcons
                        name={'assessment'}
                        size={48}
                        color="white" />
                </Pressable>
                <Pressable
                    android_ripple={{
                        color: 'rgba(0,0,0,0.1)',
                        borderless: true,
                        radius: 36,
                    }}
                    style={{
                        borderRadius: 36,
                        padding: 12,
                        backgroundColor: "#007AFF",
                        elevation: 8
                    }}
                    onPress={
                        () => {
                            navigation.push("LearnMain")
                        }
                    }>
                    <MaterialIcons
                        name={'assignment'}
                        size={48}
                        color="white" />
                </Pressable>
            </View>
        </View>
    )
}

const LearnMainScreen = ({ navigation }) => {
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
            }}>Trainer</Text>
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
};

export default App;
