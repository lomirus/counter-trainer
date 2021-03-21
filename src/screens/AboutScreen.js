import React from 'react';
import { View, Text } from 'react-native';

export default class AboutScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}>
                <Text style={{
                    fontSize: 32,
                }}>About</Text>
            </View>
        )
    }
}
