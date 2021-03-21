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
                justifyContent: 'space-around',
                flex: 1
            }}>

                <View style={{
                    justifyContent: 'center',
                    flex: 1,
                }}>
                    <Text style={{
                        fontSize: 32,
                    }}>Counter Trainer</Text>
                </View>
                <View style={{
                    marginBottom: 16,
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: '#666'
                    }}>Author: Lomirus</Text>
                    <Text style={{
                        color: '#666'
                    }}>Github: /lomirus/counter-trainer</Text>
                    <Text style={{
                        color: '#666'
                    }}>License: MIT</Text>
                    <Text style={{
                        color: '#666'
                    }}>Version: 0.4.0</Text>
                </View>
            </View>
        )
    }
}
