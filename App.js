import 'react-native-gesture-handler';
import React from 'react';
import { createStore } from 'redux';
import { View, Text, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const reducer = (state = { mode: 'Practice', type: 'Number' }, action) => ({
    mode: action.type === "CHANGE_MODE" ? action.payload : state.mode,
    type: action.type === "CHANGE_TYPE" ? action.payload : state.type
})
const store = createStore(reducer)

class IconButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chosen: props.text === store.getState()[props.form]
        }
        store.subscribe(() => {
            this.setState({
                chosen: props.text === store.getState()[props.form]
            })
        })
    }
    render() {
        return (
            <View
                style={{
                    alignItems: "center"
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
                        backgroundColor: (
                            this.state.chosen ? "#007AFF" : "gray"
                        ),
                        elevation: 8,
                        width: 72
                    }}
                    onPress={
                        () => {
                            store.dispatch({
                                type: "CHANGE_" + this.props.form.toUpperCase(),
                                payload: this.props.text
                            })
                        }
                    }>
                    <MaterialIcons
                        name={this.props.icon}
                        size={48}
                        color="white" />
                </Pressable>
                <Text
                    style={{
                        marginTop: 8,
                        textAlign: "center",
                    }}>{this.props.text}</Text>
            </View>
        )
    }
}

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

const SettingsScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>Nothing here yet</Text>
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
