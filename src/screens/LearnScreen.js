import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import { IconButton } from '../components/IconButton'
import { store } from '../store'

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

const LearnHomeScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                fontSize: 20,
                color: "black",
            }}>Mode</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                    marginBottom: 20
                }}>
                <IconButton
                    icon="assessment"
                    form="mode"
                    navigation={navigation}
                    text="Practice" />
                <IconButton
                    icon="assignment"
                    form="mode"
                    navigation={navigation}
                    text="Test" />
            </View>

            <Text style={{
                fontSize: 20,
                color: "black",
            }}>Type</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%"
                }}>
                <IconButton
                    icon="calculate"
                    form="type"
                    navigation={navigation}
                    text="Number" />
                <IconButton
                    icon="event"
                    form="type"
                    navigation={navigation}
                    text="Time & Date" />
            </View>

            <View
                style={{
                    marginTop: 36,
                    fontSize: 48
                }}>
                <Button
                    title="  Next  "
                    onPress={() => {
                        const { mode, type } = store.getState()
                        navigation.push(`${mode} ${type} Preset Screen`)
                    }} />
            </View>
        </View>
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