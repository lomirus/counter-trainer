import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
                        underlineColorAndroid="gray" />
                    <Text style={{
                        height: 18
                    }}> ~ </Text>
                    <TextInput
                        placeholder="Max"
                        keyboardType="numeric"
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
                        onPress={() => {
                            this.props.navigation.push(
                                `${this.props.route.params.mode} Trainer Screen`,
                                { text: `${this.props.route.params.mode} Number Trainer Screen` }
                            )
                        }} />
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
                            this.props.navigation.push(
                                `${this.props.route.params.mode} Trainer Screen`,
                                { text: `${this.props.route.params.mode} Time & Date Trainer Screen` }
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
        this.history = [util.random(0, 100)]
        this.state = {}
        this.state.position = 0
        this.state.presentNumber = this.history[this.state.position]
    }
    WordBack() {
        this.setState({
            position: this.state.position - 1,
            presentNumber: this.history[this.state.position - 1]
        })
    }
    WordForward() {
        if (this.state.position + 1 === this.history.length) {
            const newNumber = Math.round(util.random(0, 100))
            this.history.push(newNumber)
        }
        this.setState({
            position: this.state.position + 1,
            presentNumber: this.history[this.state.position + 1]
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
                }}>{Math.round(this.state.presentNumber)}</Text>
                <Text style={{
                    marginTop: 24,
                    fontSize: 24,
                    marginLeft: "10%",
                    marginRight: "10%",
                    textAlign: "center"
                }}>{lang.jp.convert(Math.round(this.state.presentNumber))}</Text>
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
                        text={lang.jp.convert(Math.round(this.state.presentNumber))}
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
