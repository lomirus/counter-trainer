import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

import { PresetCheckBox } from '../components/PresetCheckBox'
import { store } from '../store'

export class NumberPreset extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState().preset.number
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState().preset.number)
        })
        this.preset = {
            min: store.getState().preset.number.min,
            max: store.getState().preset.number.max
        }
    }
    componentWillUnmount() {
        this.unsubscribe()
        this.setState = () => { }
    }
    nextClick() {
        if (this.props.route.params.mode === 'Test') {
            Alert.alert("Oops", "Test Trainer is unavailable now.")
            return
        }
        let min = parseFloat(this.preset.min);
        let max = parseFloat(this.preset.max);
        if (min.toString() === 'NaN' || max.toString() === 'NaN') {
            Alert.alert("Oops", "Invalid Minimum or Maximum")
            return
        };
        if (min > max) {
            Alert.alert("Oops", "Minimum cannot be bigger than Maximum")
            return
        };
        store.dispatch({
            type: "CHANGE_PRESET_MIN_NUMBER",
            payload: min
        })
        store.dispatch({
            type: "CHANGE_PRESET_MAX_NUMBER",
            payload: max
        })
        this.props.navigation.push(
            `${this.props.route.params.mode} Trainer Screen`,
            {
                mode: this.props.route.params.mode,
                type: "Number",
                preset: store.getState().preset.number
            }
        )
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <View>
                    <Text
                        style={{
                            fontSize: 20
                        }}>Number Range</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TextInput
                        placeholder="Min"
                        keyboardType="numeric"
                        textAlign="center"
                        defaultValue={store.getState().preset.number.min.toString()}
                        onChangeText={text => this.preset.min = text}
                        underlineColorAndroid="gray" />
                    <Text style={{
                        height: 18
                    }}> ~ </Text>
                    <TextInput
                        placeholder="Max"
                        keyboardType="numeric"
                        textAlign="center"
                        defaultValue={store.getState().preset.number.max.toString()}
                        onChangeText={text => this.preset.max = text}
                        underlineColorAndroid="gray" />
                </View>
                <View
                    style={{
                        marginTop: 36
                    }}>
                    <Text
                        style={{
                            fontSize: 20
                        }}>Number Coverage</Text>
                </View>
                <View style={{
                    flexDirection: "column",
                }}>
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_INTEGER"
                        checked={this.state.integer}
                        disabled={true}
                        text="Integar" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_DECIMAL"
                        checked={this.state.decimal}
                        disabled={true}
                        text="Decimal" />
                </View>
                <View style={{
                    marginTop: 36
                }}>
                    <Button
                        title="Next"
                        onPress={() => this.nextClick()} />
                </View>
            </View>
        )
    }
}

export class TimePreset extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState().preset.time
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState().preset.time)
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
        this.setState = () => { }
    }
    nextClick() {
        if (this.props.route.params.mode === 'Test') {
            Alert.alert("Oops", "Test Trainer is unavailable now.")
            return
        }
        this.props.navigation.push(
            `${this.props.route.params.mode} Trainer Screen`,
            {
                mode: this.props.route.params.mode,
                type: "Time & Date",
                preset: store.getState().preset.time
            }
        )
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <View style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}>
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_MONTH"
                        checked={this.state.month}
                        text="Month" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_DATE"
                        checked={this.state.date}
                        text="Date" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_DATEMONTH"
                        checked={this.state.date_month}
                        text="Date & Month" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_DAY"
                        checked={this.state.day}
                        text="Day" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_TIME"
                        checked={this.state.time}
                        text="Time" />
                </View>
                <View style={{
                    marginTop: 36
                }}>
                    <Button
                        title="Next"
                        onPress={() => this.nextClick()} />
                </View>
            </View>
        )
    }
}
