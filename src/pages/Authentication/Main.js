import React from "react";
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { CustomHeader, CustomButton } from '../../common';

const Main = (props) => {


    // Calling this function will open Google for login.
    const googleLogin = async () => {
        try {
            // add any configuration settings here:
            await GoogleSignin.configure();

            const data = await GoogleSignin.signIn();
            console.log("data", data);
            // create a new firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
            console.log("credential", credential);
            // login with credential
            const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
            console.log("firebaseUserCredential", firebaseUserCredential);

            console.log(JSON.stringify(firebaseUserCredential.user.toJSON()));
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View>
            <View>
                <CustomHeader
                    left={false}
                    right={false}
                    text="GOK Shopping App"
                    titleStyle={styles.titleStyle}
                // titleStyle={{ alignSelf: 'center' }}
                />
            </View>
            <View style={{ marginTop: 30 }}>
                <CustomButton
                    text="Sign in with Google"
                    iconName="google"
                    iconType="Zocial"
                    textStyle={styles.textStyle}
                    iconStyle={styles.iconStyle}
                    onPress={googleLogin}
                // onPress={() => {
                //     props.navigation.navigate("SignIn", { siteName: "google" });
                // }}
                />
                <CustomButton
                    text="Sign in with Facebook"
                    iconName="facebook"
                    iconType="MaterialCommunityIcons"
                    textStyle={styles.textStyle}
                    iconStyle={styles.iconStyle}
                    onPress={() => {
                        props.navigation.navigate("SignIn", { siteName: "facebook" });
                    }}
                />
                <CustomButton
                    text="Create New Account"
                    iconName="account"
                    iconType="MaterialCommunityIcons"
                    textStyle={styles.textStyle}
                    iconStyle={styles.iconStyle}
                    onPress={() => {
                        props.navigation.navigate("SignIn", { siteName: "newAccount" });
                    }}
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    titleStyle: {
        alignSelf: 'center'
    },
    textStyle: {
        marginLeft: 33,
        color: "white"
    },
    iconStyle: {
        marginLeft: 3,
        color: 'white'
    },
})
export { Main }