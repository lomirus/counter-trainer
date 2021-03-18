import React from 'react';
import { Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class IconButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
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
                    height: 72,
                    ...this.props.style
                }}
                disabled={this.props.disabled}
                onPress={this.props.onPress}>
                <MaterialIcons
                    name={this.props.icon}
                    size={48}
                    color="white" />
            </Pressable>
        )
    }
}