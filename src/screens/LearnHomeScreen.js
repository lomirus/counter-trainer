import React from 'react';
import { View, Text, Button } from 'react-native';

import { IconButton } from '../components/IconButton'
import { store } from '../store'

const LearnHomeScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                fontSize: 20,
                color: "black",
            }}>Mode</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                    marginBottom: 20
                }}>
                <IconButton
                    icon="assessment"
                    form="mode"
                    navigation={navigation}
                    text="Practice" />
                <IconButton
                    icon="assignment"
                    form="mode"
                    navigation={navigation}
                    text="Test" />
            </View>

            <Text style={{
                fontSize: 20,
                color: "black",
            }}>Type</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%"
                }}>
                <IconButton
                    icon="calculate"
                    form="type"
                    navigation={navigation}
                    text="Number" />
                <IconButton
                    icon="event"
                    form="type"
                    navigation={navigation}
                    text="Time & Date" />
            </View>

            <View
                style={{
                    marginTop: 36,
                    fontSize: 48
                }}>
                <Button
                    title="  Next  "
                    onPress={() => {
                        const { mode, type } = store.getState()
                        navigation.push(`${type} Preset Screen`, { mode })
                    }} />
            </View>
        </View>
    )
}

export { LearnHomeScreen }