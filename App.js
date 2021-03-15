import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

class IconButton extends React.Component {
    render() {
        return (
            <View>
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
                            this.props.navigation.push(this.props.link)
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
                <IconButton
                    link="PracticePresetScreen"
                    icon="assessment"
                    navigation={navigation}
                    text="Practice" />
                <IconButton
                    link="TestPresetScreen"
                    icon="assignment"
                    navigation={navigation}
                    text="Test" />
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
