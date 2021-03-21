import React from 'react';
import { Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Tts from 'react-native-tts';

export default class SpeakButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            icon: "volume-up",
            speaking: false
        }
        if (props.onRef) {
            props.onRef(this)
        }
    }
    componentDidMount() {
        Tts.addEventListener('tts-finish', () => this.finishSpeak())
    }
    componentWillUnmount() {
        clearInterval(this.speakInterval)
        Tts.removeEventListener('tts-finish', this.finishSpeak)
        this.setState = () => { }
    }
    speak() {
        let count = 0
        Tts.setDefaultLanguage(this.props.lang);
        Tts.speak(this.props.text)
        this.setState({ speaking: true })
        this.speakInterval = setInterval(() => {
            if (!this.state.speaking) {
                return
            }
            if (count % 3 === 0) {
                this.setState({ icon: "volume-mute" })
            } else if (count % 3 === 1) {
                this.setState({ icon: "volume-down" })
            } else if (count % 3 === 2) {
                this.setState({ icon: "volume-up" })
            }
            count += 1;
        }, 300)
    }
    finishSpeak(){
        return new Promise(resolve => {
            Tts.stop()
            clearInterval(this.speakInterval)
            this.setState({
                icon: "volume-up",
                speaking: false
            }, resolve)
        })
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
                    width: 72
                }}
                onPress={
                    () => this.speak()
                }
                android_disableSound={true}>
                <MaterialIcons
                    name={this.state.icon}
                    size={48}
                    color="white" />
            </Pressable>
        )
    }
}