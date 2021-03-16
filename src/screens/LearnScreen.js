import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import { IconButton } from '../components/IconButton'

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
                name="PracticePresetScreen"
                component={PracticePresetScreen}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen
                name="TestPresetScreen"
                component={TestPresetScreen}
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
                    link="PracticePresetScreen"
                    icon="assessment"
                    form="mode"
                    navigation={navigation}
                    text="Practice" />
                <IconButton
                    link="TestPresetScreen"
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
                    link="PracticePresetScreen"
                    icon="calculate"
                    form="type"
                    navigation={navigation}
                    text="Number" />
                <IconButton
                    link="TestPresetScreen"
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
                    title="  Next  " />
            </View>
        </View>
    )
}

const PracticePresetScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Text style={{
                fontSize: 20
            }}>Practice Preset Screen</Text>
        </View>
    )
}

const TestPresetScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Text style={{
                fontSize: 20
            }}>Test Preset Screen</Text>
        </View>
    )
}

export { LearnScreen }