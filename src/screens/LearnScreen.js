import React from 'react';
import { View, Text, TextInput, Alert, ToastAndroid } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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
        this.state = {
            integer: true,
            decimal: false
        }
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
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <CheckBox
                        value={this.state.integer}
                        onValueChange={(value) => {
                            this.setState({
                                integer: value
                            })
                        }} />
                    <Text
                        onPress={() => {
                            this.setState({
                                integer: !this.state.integer
                            })
                        }}>Integar</Text>
                    <CheckBox
                        value={this.state.decimal}
                        onValueChange={(value) => {
                            this.setState({
                                decimal: value
                            })
                        }}></CheckBox>
                    <Text
                        onPress={() => {
                            this.setState({
                                decimal: !this.state.decimal
                            })
                        }}>Decimal</Text>
                </View>
            </View>
        )
    }
}

class TimePreset extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            month: false,
            date: false,
            date_month: false,
            day: false,
            time: true,
        }
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
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <CheckBox
                            value={this.state.month}
                            onValueChange={(value) => {
                                this.setState({
                                    month: value
                                })
                            }} />
                        <Text
                            onPress={() => {
                                this.setState({
                                    month: !this.state.month
                                })
                            }}>Month</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <CheckBox
                            value={this.state.date}
                            onValueChange={(value) => {
                                this.setState({
                                    date: value
                                })
                            }}></CheckBox>
                        <Text
                            onPress={() => {
                                this.setState({
                                    date: !this.state.date
                                })
                            }}>Date</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <CheckBox
                            value={this.state.date_month}
                            onValueChange={(value) => {
                                this.setState({
                                    date_month: value
                                })
                            }}></CheckBox>
                        <Text
                            onPress={() => {
                                this.setState({
                                    date_month: !this.state.date_month
                                })
                            }}>Date & Month</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <CheckBox
                            value={this.state.day}
                            onValueChange={(value) => {
                                this.setState({
                                    day: value
                                })
                            }}></CheckBox>
                        <Text
                            onPress={() => {
                                this.setState({
                                    day: !this.state.day
                                })
                            }}>Day</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <CheckBox
                            value={this.state.time}
                            onValueChange={(value) => {
                                this.setState({
                                    time: value
                                })
                            }}></CheckBox>
                        <Text
                            onPress={() => {
                                this.setState({
                                    time: !this.state.time
                                })
                            }}>Time</Text>
                    </View>
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