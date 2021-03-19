import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

import { PresetCheckBox } from '../components/PresetCheckBox'
import IconButton from '../components/IconButton'
import SpeakButton from '../components/SpeakButton'
import { store } from '../store'
import * as util from '../util'
import lang from '../languages/index'

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
            Alert.alert("Oops", "Test Screen is unavailable now.")
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
                        text="Integar" />
                    <PresetCheckBox
                        dispatch="CHANGE_PRESET_DECIMAL"
                        checked={this.state.decimal}
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
                        onPress={() => {
                            if (this.props.route.params.mode === 'Test') {
                                Alert.alert("Oops", "Test Screen is unavailable now.")
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
                        }} />
                </View>
            </View>
        )
    }
}

export class PracticeTrainer extends React.Component {
    constructor(props) {
        super(props)
        this.type = this.props.route.params.type
        this.preset = this.props.route.params.preset
        this.caseGenerators = []
        if (this.type === 'Number') {
            this.caseGenerators.push(() => {
                let text = util.random(this.preset.min, this.preset.max)
                let speak = lang.jp.convert(text)
                return { text, speak }
            })
            console.log("Number Type")
            console.log(this.preset)
        } else {
            if (this.preset.date) this.caseGenerators.push(lang.jp.randomDate)
            if (this.preset.date_month) this.caseGenerators.push(lang.jp.randomDateMonth)
            if (this.preset.month) this.caseGenerators.push(lang.jp.randomMonth)
            if (this.preset.day) this.caseGenerators.push(lang.jp.randomDay)
            if (this.preset.time) this.caseGenerators.push(lang.jp.randomTime)
        }
        this.history = [util.randomDraw(this.caseGenerators)()]
        this.state = {}
        this.state.position = 0
        this.state.present = this.history[this.state.position]
    }
    WordBack() {
        this.setState({
            position: this.state.position - 1,
            present: this.history[this.state.position - 1]
        })
    }
    WordForward() {
        if (this.state.position + 1 === this.history.length) {
            const newWord = util.randomDraw(this.caseGenerators)()
            this.history.push(newWord)
        }
        this.setState({
            position: this.state.position + 1,
            present: this.history[this.state.position + 1]
        })
    }
    render() {
        return (
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}>
                <Text style={{
                    fontSize: 36
                }}>{this.state.present.text}</Text>
                <Text style={{
                    marginTop: 24,
                    fontSize: 24,
                    marginLeft: "10%",
                    marginRight: "10%",
                    textAlign: "center"
                }}>{this.state.present.speak}</Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "100%",
                        marginTop: 36
                    }}>
                    <IconButton
                        onPress={() => { }}
                        icon="pause" />
                    <SpeakButton
                        text={this.state.present.text.toString()}
                        lang="ja-JP" />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "100%",
                        marginTop: 36
                    }}>
                    <IconButton
                        style={{
                            opacity: this.state.position === 0 ? 0 : 1
                        }}
                        disabled={this.state.position === 0 ? true : false}
                        onPress={() => this.WordBack()}
                        icon="arrow-back" />
                    <IconButton
                        onPress={() => this.WordForward()}
                        icon="arrow-forward" />
                </View>
            </View>
        )
    }
}

export class TestTrainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}>
                <Text style={{
                    fontSize: 24
                }}>{this.props.route.params.text}</Text>
            </View>
        )
    }
}
