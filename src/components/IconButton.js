import React from 'react';
import { View, Text, Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { store } from '../store'

export class IconButton extends React.Component {
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
    }
    render() {
        return (
            <View
                style={{
                    alignItems: "center"
                }}>
                <Pressable
                    android_ripple={{
                        color: 'rgba(0,0,0,0.1)',
                        borderless: true,
                        radius: 36,
                    }}
                    style={{
                        borderRadius: 36,
                        padding: 12,
                        backgroundColor: (
                            this.state.chosen ? "#007AFF" : "gray"
                        ),
                        elevation: 8,
                        width: 72
                    }}
                    onPress={
                        () => {
                            store.dispatch({
                                type: "CHANGE_" + this.props.form.toUpperCase(),
                                payload: this.props.text
                            })
                        }
                    }>
                    <MaterialIcons
                        name={this.props.icon}
                        size={48}
                        color="white" />
                </Pressable>
                <Text
                    style={{
                        marginTop: 8,
                        textAlign: "center",
                    }}>{this.props.text}</Text>
            </View>
        )
    }
}