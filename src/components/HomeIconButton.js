import React from 'react';
import { View, Text, Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import IconButton from './IconButton'
import { store } from '../store'

export default class PresetIconButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chosen: props.text === store.getState()[props.form]
        }
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                chosen: props.text === store.getState()[props.form]
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
        this.setState = () => { }
    }
    render() {
        return (
            <View
                style={{
                    alignItems: "center"
                }}>
                <IconButton
                    style={{
                        backgroundColor: (
                            this.state.chosen ? "#007AFF" : "gray"
                        )
                    }}
                    onPress={() => {
                        store.dispatch({
                            type: "CHANGE_" + this.props.form.toUpperCase(),
                            payload: this.props.text
                        })
                    }}
                    icon={this.props.icon} />
                <Text
                    style={{
                        marginTop: 8,
                        textAlign: "center",
                    }}>{this.props.text}</Text>
            </View>
        )
    }
}