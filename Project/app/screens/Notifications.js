import React, {Component} from 'react';
import {StyleSheet,ScrollView,Dimensions,Text, View, TextInput,Image} from 'react-native';
import {screenWidth,colors,body,inline,overlay,shadow,navItems} from '../config/styles'
import {Button,Icon} from 'react-native-elements';
import Header from './Header'
import {notifs} from '../data/notifs'
import Swipeout from 'react-native-swipeout';
import LinearGradient from 'react-native-linear-gradient';

class Notifications extends React.Component {
  static navigationOptions = {
        title: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
          <Icon size={24} color={navItems.color} type='font-awesome' name='bell-o' />)

    };
  render() {
    return (
    <LinearGradient colors={[colors.blue3,colors.blue1]}  style={{width: '100%', height: '100%'}}>
      <View style={overlay}>
      <Header text={"Notifications"}/>
        <View style={body}>
          <ScrollView>
            {notifs.length>0 ? notifs.map((notif,idx) =>(
              <View key={idx} style={[styles.notifCont,shadow,{alignItems: 'flex-start'}]}>
                <View style={[inline,{margin:10,alignItems: 'center'}]}>
                  <Image source={require('../images/Aaron_Asia2.jpeg')} style={{width:50,height:50,borderRadius:20}}/>
                  <Text> Processed Text base on type</Text>
                  <Text> {notif.datetime} </Text>
                </View>
              </View>
            )) :
          <View style={[styles.notifCont,shadow]}>
            <Text style={styles.text}>No Notifications</Text>
          </View>
        }
          </ScrollView>
        </View>
        {this.props.children}
      </View>
    </LinearGradient>
    );
  }
}

export default(Notifications)

const styles = StyleSheet.create({
  notifCont:{
    width:screenWidth,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderColor: colors.lightGrey,
  },
  text:{
    fontSize: 17,
    marginBottom: 5,
    fontWeight: '200',
    color:"#464769"
  },

})
