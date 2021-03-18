import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { LearnHomeScreen } from './LearnHomeScreen'
import {
    NumberPreset,
    TimePreset,
    PracticeTrainer,
    TestTrainer
} from './LearnScreens'

const Stack = createStackNavigator()

const LearnScreen = () => {
    return (
        <Stack.Navigator initialRouteName="LearnHome">
            <Stack.Screen
                name="LearnHome"
                component={LearnHomeScreen}
                options={{
                    title: "Home"
                }}
            />
            <Stack.Screen
                name="Number Preset Screen"
                component={screens.preset.number}
                options={{
                    title: "Preset"
                }}
            />
            <Stack.Screen
                name="Time & Date Preset Screen"
                component={screens.preset.time}
                options={{
                    title: "Preset"
                }}
            />
            <Stack.Screen
                name="Practice Trainer Screen"
                component={screens.trainer.practice}
                options={{
                    title: "Trainer"
                }}
            />
            <Stack.Screen
                name="Test Trainer Screen"
                component={screens.trainer.test}
                options={{
                    title: "Trainer"
                }}
            />
        </Stack.Navigator>
    )
}

const screens = {
    preset: {
        number: ({ route, navigation }) => <NumberPreset route={route} navigation={navigation} />,
        time: ({ route, navigation }) => <TimePreset route={route} navigation={navigation} />
    },
    trainer: {
        practice: ({ route }) => <PracticeTrainer route={route} />,
        test: ({ route }) => <TestTrainer route={route} />
    }
}

export { LearnScreen }