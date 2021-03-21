import React from 'react';
import { View, Text, Switch, Pressable } from 'react-native';
import { store } from '../store'

import SettingPicker from '../components/SettingPicker';

class SettingsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayLanguage: "English",
            learnLanguage: "日本語",
            autoSpeak: false,
            autoNext: false,
            nightMode: false,
        }
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState().settings)
        })
    }
    componentWillUnmount() {
        this.setState = () => {}
        this.unsubscribe()
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    marginTop: 32
                }}>
                <SettingPicker
                    title="Display Language"
                    selectedValue={this.state.displayLanguage}
                    onValueChange={value => store.dispatch({
                        type: "CHANGE_DISPLAY_LANGUAGE",
                        payload: value
                    })}
                    items={["English"]}
                />
                <SettingPicker
                    title="Learn Language"
                    selectedValue={this.state.learnLanguage}
                    onValueChange={value => store.dispatch({
                        type: "CHANGE_LEARN_LANGUAGE",
                        payload: value
                    })}
                    items={["日本語"]}
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "85%",
                        height: 48,
                        alignItems: "center",
                    }}>
                    <Text style={{
                        fontSize: 18
                    }}>Night Mode</Text>
                    <Switch
                        value={this.state.nightMode}
                        onValueChange={() => store.dispatch({ type: "CHANGE_NIGHT_MODE" })} />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "85%",
                        height: 48,
                        alignItems: "center",
                    }}>
                    <Text style={{
                        fontSize: 18
                    }}>Auto Speak</Text>
                    <Switch
                        value={this.state.autoSpeak}
                        onValueChange={() => store.dispatch({ type: "CHANGE_AUTO_SPEAK" })} />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "85%",
                        height: 48,
                        alignItems: "center",
                    }}>
                    <Text style={{
                        fontSize: 18
                    }}>Auto Next</Text>
                    <Switch
                        value={this.state.autoNext}
                        onValueChange={() => store.dispatch({ type: "CHANGE_AUTO_NEXT" })} />
                </View>
                <Pressable
                    android_ripple={{
                        color: "rgba(0,0,0,0.2)",
                        borderless: false,
                    }}
                    style={{
                        height: 48,
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>
                    <View style={{
                        height: 48,
                        width: "85%",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Text
                            style={{
                                fontSize: 18
                            }}>About</Text>
                    </View>
                </Pressable>
            </View>
        )
    }
}

export { SettingsScreen }