/**
 * @format
 * @flow
 */

import { createStackNavigator } from 'react-navigation-stack';
import { Main, SignIn } from '../../pages/Authentication';
import { Home } from '../../pages/Home/Home';
const SignInNavigation = createStackNavigator(
    {
        Main: { screen: Main },
        SignIn: { screen: SignIn },
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Main',
    },
);

export { SignInNavigation }; 
