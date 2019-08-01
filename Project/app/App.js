import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {navItems} from './config/styles'
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator,createMaterialTopTabNavigator,
  createSwitchNavigator,createAppContainer} from "react-navigation";
import HomeScreen from './screens/HomeScreen'
import IosFonts from './screens/Fonts';
import Login from './screens/Login';
import Register from './screens/Register';
import Bookings from './screens/Bookings'
import Notifications from './screens/Notifications'
import Search from './screens/Search'
import Messages from './screens/Messages'
import Profile from './screens/Profile'

import SideMenu from './components/CustomDrawer'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer);

const DashStack = createBottomTabNavigator({
  Profile: { screen: Profile },
  Notifications: { screen: Notifications },
  Bookings: {screen: Bookings},
  Search: { screen: Search },
  Messages: { screen: Messages },
},
{initialRouteName:'Bookings'
},
)

const AppNavigator = createSwitchNavigator({
  loginFlow:{
    screen:createStackNavigator({
      Home:  HomeScreen,
      Login:createBottomTabNavigator({
        LOGIN: { screen: Login,
           },
        REGISTER: { screen: Register,
         },
      }),
    }),
      initialRouteName: "Home",
  },

  mainFlow:{
    screen:createDrawerNavigator({
      Dashboard: { screen: DashStack },
      Settings: { screen: IosFonts },
      Logout:{screen:HomeScreen}
    },
    {initialRouteName:'Dashboard',
    contentComponent: SideMenu,
    },
  ),
  },

});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  render () {
    return (
        <Provider store={store}>
          <AppContainer/>
        </Provider>
    )
  }
}
