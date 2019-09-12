import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from "native-base";


const CustomButton = (props) => {
    // console.log("props", props)
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
            <TouchableOpacity onPress={props.onPress} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#4050B5', width: "60%", height: 40, borderWidth: 1 }}>
                {props.iconName && props.iconType && <Icon name={props.iconName} type={props.iconType} style={props.iconStyle} />}
                <Text style={props.textStyle}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}
export { CustomButton }