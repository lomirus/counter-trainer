import React from 'react';
import { View, Button, ToastAndroid } from 'react-native';

const App = () => {
    return (
        <View>
            <Button
                title="asd"
                onPress={() => ToastAndroid.show("hello", ToastAndroid.SHORT)}
            >
                Hello World
            </Button>
        </View>
    );
};

export default App;
