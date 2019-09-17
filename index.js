/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as JOBBEY} from './app.json';
import Login from './src/components/Login/Login'

AppRegistry.registerComponent(JOBBEY, () => Login);
