import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import { PresetCheckBox } from '../components/PresetCheckBox'
import { LearnHomeScreen } from './LearnHomeScreen'
import { store } from '../store'

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
                    title: "Preset"
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
                    title: "Preset"
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
                    title: "Preset"
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
                    title: "Preset"
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

class NumberPreset extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState().preset.number
        this.unsubscribe = store.subscribe(() => {
            console.log(this.state)
            this.setState(store.getState().preset.number)
            console.log(this.state)
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <View>
                    <Text
                        style={{
                            fontSize: 20
                        }}>Number Range</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TextInput
                        placeholder="Min"
                        keyboardType="numeric"
                        underlineColorAndroid="gray" />
                    <Text style={{
                        height: 18
                    }}> ~ </Text>
                    <TextInput
                        placeholder="Max"
                        keyboardType="numeric"
                        underlineColorAndroid="gray" />
                </View>
                <View
                    style={{
                        marginTop: 36
                    }}>
                    <Text
                        style={{
                            fontSize: 20
                        }}>Number Coverage</Text>
                </View>
                <View style={{
                    flexDirection: "column",
                }}>
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_INTEGER"
                        checked={this.state.integer}
                        text="Integar" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_DECIMAL"
                        checked={this.state.decimal}
                        text="Decimal" />
                </View>
            </View>
        )
    }
}

class TimePreset extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState().preset.time
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState().preset.time)
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <View style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}>
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_MONTH"
                        checked={this.state.month}
                        text="Month" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_DATE"
                        checked={this.state.date}
                        text="Date" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_DATEMONTH"
                        checked={this.state.date_month}
                        text="Date & Month" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_DAY"
                        checked={this.state.day}
                        text="Day" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_TIME"
                        checked={this.state.time}
                        text="Time" />
                </View>
            </View>
        )
    }
}

const screens = {
    practice: {
        number: {
            preset: () => <NumberPreset />,
            main: () => ({})
        },
        time: {
            preset: () => <TimePreset />,
            main: () => ({})
        }
    },
    test: {
        number: {
            preset: () => <NumberPreset />,
            main: () => ({})
        },
        time: {
            preset: () => <TimePreset />,
            main: () => ({})
        }
    }
}

export { LearnScreen }