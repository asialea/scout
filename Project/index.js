/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
// var RCTEventEmitter = require('RCTEventEmitter');
AppRegistry.registerComponent(appName, () => App);
