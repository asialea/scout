import React, {Component} from 'react';
import {StyleSheet,ScrollView, Text, View, TextInput,Image} from 'react-native';
import {Button,Icon} from 'react-native-elements';
import {overlay,inline,colors,shadow,body,screenWidth,navItems} from '../config/styles'
import LinearGradient from 'react-native-linear-gradient';
import {tours} from '../data/tours';
import Header from '../components/Header'

class Dash extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon size={27} color={navItems.color} type='antdesign' name='home' /> ),
    tabBarOptions:{
        showLabel:false
      }
    };

  render() {
    return (
  <LinearGradient colors={[colors.blue3,colors.blue1]}  style={{width: '100%', height: '100%'}}>
    <View style={[overlay]}>
      <Header text={"My Bookings"}/>
      <View style={[body,{paddingTop:10}]}>
        <ScrollView>
          {tours.length>0 ? tours.map((booking,idx) =>(
          <View key={idx} style={!booking.passed ? [styles.cont,shadow] : [styles.cont,shadow,{backgroundColor:'rgba(0,0,0,0.2)'}]}>
            <Image source={booking.image} style={{width:screenWidth,height:140}}/>
              <View style={[{margin:10}]}>
                <Text style={styles.text}> {booking.address} </Text>
                <View style={inline}>
                  {booking.job?<Icon size={18} color={navItems.color} type='materialicons' name='work' />: null}
                  <Text style={styles.text}> {booking.date} {booking.time} </Text>
                </View>
              </View>
            </View>
          )) : null
      }
        </ScrollView>
        </View>
        {this.props.children}
    </View>
  </LinearGradient>
    );
  }
}

export default(Dash)

const styles = StyleSheet.create({

  cont:{
    width:screenWidth,
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    marginBottom: 15,
  },
  text:{
    fontSize: 16,
    color:colors.font,
  },
  searchCont:{
    backgroundColor: colors.blue4,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:2,
  },

});
