import React from 'react';
import { View, Text, Switch, Pressable } from 'react-native';
import SettingPicker from '../components/SettingPicker';

class SettingsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            autoSpeak: false,
            displayLanguage: "English",
            learnLanguage: "日本語"
        }
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
                    onValueChange={value => this.setState({ displayLanguage: value })}
                    items={["English"]}
                />
                <SettingPicker
                    title="Learn Language"
                    selectedValue={this.state.learnLanguage}
                    onValueChange={value => this.setState({ learnLanguage: value })}
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
                    }}>Auto Speak</Text>
                    <Switch
                        value={this.state.autoSpeak}
                        onValueChange={autoSpeak => this.setState({ autoSpeak })} />
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