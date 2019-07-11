import React, {Component} from 'react';
import {StyleSheet,ScrollView,Text, View, TextInput} from 'react-native';
import {screenWidth,colors,body,inline,overlay,shadow,navItems} from '../config/styles'
import {Button,Icon} from 'react-native-elements';
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient';

class Messages extends React.Component {
  static navigationOptions = {
    title: 'Messages',
    tabBarIcon: ({ tintColor }) => (
    <Icon size={25} color={navItems.color} type='font-awesome' name='envelope-o' />),
    tabBarOptions:{
        showLabel:false
      }

    };
  render() {
    return (
    <LinearGradient colors={[colors.blue3,colors.blue1]}  style={{width: '100%', height: '100%'}}>
      <View style={overlay}>
      <Header text={"Messages"}/>
        <View style={body}>

        </View>
        {this.props.children}
      </View>
    </LinearGradient>
    );
  }
}

export default(Messages)

const styles = StyleSheet.create({

})
