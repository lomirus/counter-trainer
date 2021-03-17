import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
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
                name="Number Preset Screen"
                component={screens.preset.number}
                options={{
                    title: "Preset"
                }}
            />
            <Stack.Screen
                name="Time & Date Preset Screen"
                component={screens.preset.time}
                options={{
                    title: "Preset"
                }}
            />
            <Stack.Screen
                name="Practice Trainer Screen"
                component={screens.trainer.practice}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen
                name="Test Trainer Screen"
                component={screens.trainer.test}
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
            this.setState(store.getState().preset.number)
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
        this.setState = () => { }
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
                <View style={{
                    marginTop: 36
                }}>
                    <Button
                        title="Next"
                        onPress={() => {
                            this.props.navigation.push(
                                `${this.props.route.params.mode} Trainer Screen`,
                                { text: `${this.props.route.params.mode} Number Trainer Screen` }
                            )
                        }} />
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
        this.setState = () => { }
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
                <View style={{
                    marginTop: 36
                }}>
                    <Button
                        title="Next"
                        onPress={() => {
                            this.props.navigation.push(
                                `${this.props.route.params.mode} Trainer Screen`,
                                { text: `${this.props.route.params.mode} Time & Date Trainer Screen` }
                            )
                        }} />
                </View>
            </View>
        )
    }
}

class PracticeTrainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}>
                <Text style={{
                    fontSize: 24
                }}>{this.props.route.params.text}</Text>
            </View>
        )
    }
}

class TestTrainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}>
                <Text style={{
                    fontSize: 24
                }}>{this.props.route.params.text}</Text>
            </View>
        )
    }
}

const screens = {
    preset: {
        number: ({ route, navigation }) => <NumberPreset route={route} navigation={navigation} />,
        time: ({ route, navigation }) => <TimePreset route={route} navigation={navigation} />
    },
    trainer: {
        practice: ({ route }) => <PracticeTrainer route={route} />,
        test: ({ route }) => <TestTrainer route={route} />
    }
}

export { LearnScreen }