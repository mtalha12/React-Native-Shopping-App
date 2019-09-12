import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
// import { Left, Body, Right, Icon, Title, Subtitle } from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';

const CustomHeader = (props) => {
    return (
        <View>
            <Header>
                {props.back &&
                    <Left>
                        <TouchableOpacity onPress={props.onPress}>
                            <Icon name="md-arrow-back" type="Ionicons" style={{ color: 'white' }} />
                        </TouchableOpacity>

                    </Left>}
                <Body>
                    <Title style={props.titleStyle}>{props.text}</Title>
                    {props.subtitle && <Subtitle></Subtitle>}
                </Body>
                {props.right &&
                    <Right>
                        <TouchableOpacity>
                            <Icon name="menu" type="MaterialCommunityIcons" style={{ color: 'white' }} />
                        </TouchableOpacity>
                    </Right>}
            </Header>
        </View>
    );
}

export { CustomHeader }