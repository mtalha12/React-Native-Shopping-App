import React, { useEffect, useState } from "react";
// import { GoogleSignin } from 'react-native-google-signin';
// import firebase from 'react-native-firebase'
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
// import { } from '../../common'
import { CustomHeader, EditField, CustomButton } from '../../common';
const SignIn = (props) => {
    const [mail, setMail] = useState({});
    const [password, setPassword] = useState({});


    const changeHandler = (text) => {
        // console.log(text)
        setMail(text)
    }
    const passwordChangeHandler = (text) => {
        console.log(text)
        setPassword(text)
    }
    // const signInClickHadler = () => {
    //     // const benefit = props.navigation.getParam('benefit');
    //     const siteName = props.navigation.getParam("siteName")
    //     console.log("Param : ", siteName)
    // }

    // Calling this function will open Google for login.
    // const googleLogin = async () => {
    //     try {
    //         // add any configuration settings here:
    //         await GoogleSignin.configure();

    //         const data = await GoogleSignin.signIn();
    //         console.log("data", data);
    //         // create a new firebase credential with the token
    //         const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    //         console.log("credential", credential);
    //         // login with credential
    //         const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
    //         console.log("firebaseUserCredential", firebaseUserCredential);

    //         console.log(JSON.stringify(firebaseUserCredential.user.toJSON()));
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    return (
        <View>
            <View>
                <CustomHeader
                    left={false}
                    right={false}
                    text="GOK Shopping App"
                    titleStyle={styles.titleStyle}
                    // titleStyle={{ alignSelf: 'center' }}
                    // back={true}
                    onPress={() => props.navigation.goBack()}
                />
            </View>
            <View style={{ marginTop: '2%', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ width: 70 }}>Email : </Text>
                    <EditField
                        changeHandler={changeHandler}
                        value={mail}
                        placeholder="Email Or Number"
                        style={styles.inputField}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ width: 70 }}>Password : </Text>
                    <EditField
                        changeHandler={passwordChangeHandler}
                        value={password}
                        placeholder="Password"
                        style={styles.inputField}
                    />
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 35 }}>
                    <TouchableOpacity onPress={googleLogin} style={styles.signinBtn}>
                        <Text style={{}}>Sigin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        alignSelf: 'center',
        textAlign: 'center'
    },
    inputField: {
        height: 50,
        borderColor: 'gray',
        borderBottomWidth: 1,
        width: Dimensions.get("window").width - 100
    },
    signinBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4050B5',
        width: "60%",
        height: 40,
        borderWidth: 1
    },

});

export { SignIn }