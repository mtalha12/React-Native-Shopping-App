import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';

const Signin = ({ changeHandler, value, placeholder }) => {

    return (
        <View>
            <TextInput
                placeholder={placeholder}
                value={value}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => changeHandler(text)}
            // onChangeText={text => {
            //     onChange(text)
            // }}
            />
        </View>
    )
}
export { Signin }