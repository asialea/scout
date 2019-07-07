import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator,createMaterialTopTabNavigator,createSwitchNavigator,createAppContainer} from "react-navigation";
import HomeScreen from './screens/HomeScreen'
import IosFonts from './screens/Fonts';
import Login from './screens/Login';
import Register from './screens/Register';
import Dash from './screens/Dash'
import Notifications from './screens/Notifications'

const DashStack = createBottomTabNavigator({
  ProfileHome: { screen: Dash },
  Notifications: { screen: Notifications },
})

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
    }
  ),
  },

});

export default createAppContainer(AppNavigator);
