import React from 'react';
import { View, Text, Switch } from 'react-native';
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
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "85%",
                        height: 36
                    }}>
                    <Text style={{
                        fontSize: 18
                    }}>Auto Speak</Text>
                    <Switch
                        value={this.state.autoSpeak}
                        onValueChange={autoSpeak => this.setState({ autoSpeak })} />
                </View>
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
            </View>
        )
    }
}

export { SettingsScreen }