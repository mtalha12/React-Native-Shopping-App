import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';

const EditField = ({ changeHandler, value, placeholder, style }) => {

    return (
        <View>
            <TextInput
                placeholder={placeholder}
                value={value}
                // dataDetectorTypes
                style={style}
                onChangeText={text => changeHandler(text)}
            // onChangeText={text => {
            //     onChange(text)
            // }}
            />
        </View>
    )
}
export { EditField }