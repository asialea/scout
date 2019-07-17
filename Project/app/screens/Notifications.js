import React, {Component} from 'react';
import {StyleSheet,ScrollView,Dimensions,Text, View, TextInput,Image} from 'react-native';
import {screenWidth,colors,body,inline,overlay,shadow,navItems} from '../config/styles'
import {Button,Icon} from 'react-native-elements';
import Header from '../components/Header'
import {notifs} from '../data/notifs'
import Swipeout from 'react-native-swipeout';
import LinearGradient from 'react-native-linear-gradient';
import {parseNotif} from '../lib/functions'

class Notifications extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Icon size={24} color={navItems.color} type='font-awesome' name='bell-o' />),

    };
  render() {

  var swipe = [
    {
      text: 'Delete',
      backgroundColor:'red'
    }
  ]
    return (
  <LinearGradient colors={['#a8c0ff','#C9D6FF']}>
    <View style={overlay}>
      <Header text={"Notifications"}/>
        <View style={body}>
          <ScrollView>
            {notifs.length>0 ? notifs.map((notif,idx) =>(
            <Swipeout key={idx} right={swipe}>
              <View style={[styles.notifCont,{alignItems: 'flex-start'}]}>
                <View style={[inline,{marginLeft:10,width: 0.81*screenWidth,alignItems: 'center'}]}>
                  <Image source={notif.image} style={{width:52,height:52,borderRadius:26}}/>
                  <Text style={styles.text}> {parseNotif(notif.type,notif.user)}   {notif.datetime}</Text>
                </View>
              </View>
              </Swipeout>
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
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 0.5,
  },
  text:{
    fontSize: 15,
    marginLeft: 5,
    color:colors.font,
  },

})
