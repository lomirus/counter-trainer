import React from 'react';
import { View, Text } from 'react-native';

import IconButton from '../components/IconButton'
import SpeakButton from '../components/SpeakButton'
import * as util from '../util'
import { store } from '../store'
import lang from '../languages/index'

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
        } else {
            if (this.preset.date) this.caseGenerators.push(lang.jp.randomDate)
            if (this.preset.date_month) this.caseGenerators.push(lang.jp.randomDateMonth)
            if (this.preset.month) this.caseGenerators.push(lang.jp.randomMonth)
            if (this.preset.day) this.caseGenerators.push(lang.jp.randomDay)
            if (this.preset.time) this.caseGenerators.push(lang.jp.randomTime)
        }
        this.history = [util.randomDraw(this.caseGenerators)()]
        this.state = {
            position: 0,
            present: this.history[0],
        }
    }
    WordBack() {
        this.setState({
            position: this.state.position - 1,
            present: this.history[this.state.position - 1]
        }, this.shouldSpeak)
    }
    WordForward() {
        if (this.state.position + 1 === this.history.length) {
            const newWord = util.randomDraw(this.caseGenerators)()
            this.history.push(newWord)
        }
        this.setState({
            position: this.state.position + 1,
            present: this.history[this.state.position + 1],
        }, this.shouldSpeak)
        
    }
    shouldSpeak() {
        if (store.getState().settings.autoSpeak) {
            this.speaker.speak()
        }
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
                        lang="ja-JP"
                        onRef={speaker => this.speaker = speaker} />
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
