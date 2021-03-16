import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import { LearnHomeScreen } from './LearnHomeScreen'

const Stack = createStackNavigator()

const LearnScreen = () => {
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
                name="Practice Number Preset Screen"
                component={screens.practice.number.preset}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen
                name="Practice Number Main Screen"
                component={screens.practice.number.main}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen
                name="Practice Time & Date Preset Screen"
                component={screens.practice.time.preset}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen
                name="Practice Time & Date Main Screen"
                component={screens.practice.time.main}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen
                name="Test Number Preset Screen"
                component={screens.test.number.preset}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen
                name="Test Number Main Screen"
                component={screens.test.number.main}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen
                name="Test Time & Date Preset Screen"
                component={screens.test.time.preset}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen
                name="Test Time & Date Main Screen"
                component={screens.test.time.main}
                options={{
                    title: "Trainer"
                }}
            />
        </Stack.Navigator>
    )
}

const screens = {
    practice: {
        number: {
            preset: ({ navigation }) => (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Text style={{
                        fontSize: 20
                    }}>Practice Number Preset Screen</Text>
                </View>
            ),
            main: () => ({})
        },
        time: {
            preset: ({ navigation }) => {
                return (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Text style={{
                            fontSize: 20
                        }}>Practice Time & Date Preset Screen</Text>
                    </View>
                )
            },
            main: () => ({})
        }
    },
    test: {
        number: {
            preset: ({ navigation }) => {
                return (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Text style={{
                            fontSize: 20
                        }}>Test Number Preset Screen</Text>
                    </View>
                )
            },
            main: () => ({})
        },
        time: {
            preset: ({ navigation }) => {
                return (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Text style={{
                            fontSize: 20
                        }}>Test Time & Date Preset Screen</Text>
                    </View>
                )
            },
            main: () => ({})
        }
    }
}

export { LearnScreen }