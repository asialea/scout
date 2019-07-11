import React, {Component} from 'react';
import {StyleSheet,ScrollView,Text, View, TextInput} from 'react-native';
import {screenWidth,colors,body,inline,overlay,shadow,navItems} from '../config/styles'
import {Button,Icon} from 'react-native-elements';
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient';

class Listing extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
    <Icon size={30} color={navItems.color} type='antdesign' name='pluscircleo' />),
    tabBarOptions:{
        showLabel:false
      }
  };
  render() {
    return (
    <LinearGradient colors={[colors.blue3,colors.blue1]}  style={{width: '100%', height: '100%'}}>
      <View style={overlay}>
      <Header text={"New Listing Form"}/>
        <View style={body}>

        </View>
        {this.props.children}
      </View>
    </LinearGradient>
    );
  }
}

export default(Listing)

const styles = StyleSheet.create({

})
