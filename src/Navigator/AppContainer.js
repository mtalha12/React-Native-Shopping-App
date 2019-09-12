/**
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import { SignInNavigation } from './AuthorizedNavigator/SignInNavigation'
const AppRoute = createAppContainer(SignInNavigation);

export { AppRoute }; 
