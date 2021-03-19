import React from 'react';
import { View, Text, Switch } from 'react-native';

class SettingsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            autoSpeak: false
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
                        width: "85%"
                    }}>
                    <Text style={{
                        fontSize: 18
                    }}>Auto Speak</Text>
                    <Switch
                        value={this.state.autoSpeak}
                        onValueChange={autoSpeak => this.setState({ autoSpeak })} />
                </View>
            </View>
        )
    }
}

export { SettingsScreen }