import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {header,shadow} from '../config/styles'
import {Button,Icon} from 'react-native-elements';


class Header extends React.Component {

  render() {
    return (
    <View style={[shadow,header]}>
      <Text style={{marginBottom: 10,fontSize: 16}}>{this.props.text}</Text>
    </View>
    );
  }
}

export default(Header)
