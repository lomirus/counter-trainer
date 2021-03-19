import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class SettingPicker extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <View
            style={{
                width: "85%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
            <Text style={{
                fontSize: 18
            }}>{this.props.title}</Text>
            <Picker
                selectedValue={this.props.selectedValue}
                onValueChange={this.props.onValueChange}
                mode="dropdown"
                style={{
                    width: 120,
                }}>
                {this.props.items.map(value =>
                    <Picker.Item label={value} value={value} key={value} />)}
            </Picker>
        </View>
    }
}