import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { store } from '../store'

export class PresetCheckBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
            }}>
                <CheckBox
                    value={this.props.checked}
                    disabled={this.props.disabled}
                    onValueChange={() => {
                        store.dispatch({
                            type: this.props.dispatch
                        })
                    }} />
                <Text
                    onPress={() => {
                        store.dispatch({
                            type: this.props.dispatch
                        })
                    }}>{this.props.text}</Text>
            </View>
        )
    }
}