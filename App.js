/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Main } from './src/pages/Authentication/Main'
import { SignIn } from './src/pages/Authentication/Signin'
import { AppRoute } from './src/Navigator/AppContainer';


const App = () => {
  return (
    <AppRoute />
    // <View>
    //   {/* <Main /> */}
    //   <SignIn />
    // </View>
  );
};

const styles = StyleSheet.create({

});

export default App;

// /**
//  * @format
//  * @flow 
//  */

// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { Main } from './src/pages/Authentication/Main';
// import { Signin } from './src/pages/Authentication/Signin';


// const MainNavigator = createStackNavigator({
//   Main: { screen: Main },
//   Signin: { screen: Signin },
// });

// const App = createAppContainer(MainNavigator);

// export default App;