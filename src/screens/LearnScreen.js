import React from 'react';
import { View, Text, TextInput, Button, Pressable, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { PresetCheckBox } from '../components/PresetCheckBox'
import { LearnHomeScreen } from './LearnHomeScreen'
import SpeakButton from '../components/SpeakButton'
import { store } from '../store'
import * as util from '../util'
import lang from '../languages/index'

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
        this.history = [util.random(0, 100)]
        this.state = {}
        this.state.position = 0
        this.state.presentNumber = this.history[this.state.position]
    }
    WordBack() {
        this.setState({
            position: this.state.position - 1,
            presentNumber: this.history[this.state.position - 1]
        })
    }
    WordForward() {
        if (this.state.position + 1 === this.history.length) {
            const newNumber = Math.round(util.random(0, 100))
            this.history.push(newNumber)
        }
        this.setState({
            position: this.state.position + 1,
            presentNumber: this.history[this.state.position + 1]
        })
    }
    render() {
        return (
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}>
                <Text style={{
                    fontSize: 36
                }}>{Math.round(this.state.presentNumber)}</Text>
                <Text style={{
                    marginTop: 24,
                    fontSize: 24,
                    marginLeft: "10%",
                    marginRight: "10%",
                    textAlign: "center"
                }}>{lang.toJP(Math.round(this.state.presentNumber))}</Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "100%",
                        marginTop: 36
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
                            elevation: 8,
                            width: 72
                        }}
                        onPress={() => { }}>
                        <MaterialIcons
                            name="pause"
                            size={48}
                            color="white" />
                    </Pressable>
                    <SpeakButton
                        text={lang.toJP(Math.round(this.state.presentNumber))}
                        lang="ja-JP" />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "100%",
                        marginTop: 36
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
                            elevation: 8,
                            width: 72,
                            opacity: this.state.position === 0 ? 0 : 1
                        }}
                        disabled={this.state.position === 0 ? true : false}
                        onPress={() => this.WordBack()}>
                        <MaterialIcons
                            name="arrow-back"
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
                            elevation: 8,
                            width: 72
                        }}
                        onPress={() => this.WordForward()}>
                        <MaterialIcons
                            name="arrow-forward"
                            size={48}
                            color="white" />
                    </Pressable>
                </View>
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