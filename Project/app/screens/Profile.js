import React, {Component} from 'react';
import {StyleSheet,ScrollView,Text, View,Image,Switch} from 'react-native';
import {screenWidth,colors,body,inline,overlay,shadow,navItems} from '../config/styles'
import {Button,Icon} from 'react-native-elements';
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient';

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon size={27} color={navItems.color} type='antdesign' name='user' /> ),
    tabBarOptions:{
        showLabel:false
      }
    };
  constructor() {
      super();
      this.state = {
         switchValue: false,
      }
   }
   toggleSwitch = (value) => {
      this.setState({switchValue: value})
   }
  render() {
    return (
      <View style={overlay}>
      <Header text={"Profile"}/>
      <View style={body}>
        <LinearGradient colors={[colors.blue3,colors.blue1]} style={styles.top}>
        </LinearGradient>
          <View style={styles.infoCont}>
            <View style={styles.editAvi}><Icon color={colors.font} size={25} type='font-awesome' name='camera'/></View>
            <Switch style={styles.switch}  onValueChange = {this.toggleSwitch} value = {this.state.switchValue}/>
            <View style={[styles.info,{marginTop:95}]}>
              <View style={inline}>
                <Text style={styles.title}>Basic Info</Text>
                <View style={styles.data}><Icon color={colors.font} size={18} type='font-awesome' name='pencil' /></View>
              </View>
              <View style={inline}>
                <Text style={styles.text}>Display Name</Text>
                <Text style={[styles.text,styles.data]}>Asia</Text>
              </View>
              <View style={inline}>
                <Text style={styles.text}>Username</Text>
                <Text style={[styles.text,styles.data]}>@asia</Text>
              </View>
              <View style={inline}>
                <Text style={styles.text}>Email</Text>
                <Text style={[styles.text,styles.data]}>asia@test.com</Text>
              </View>
            </View>
          { this.state.switchValue ?
            <View style={styles.info}>
              <View style={inline}>
                <Text style={styles.title}>Scout Info</Text>
                <View style={styles.data}><Icon color={colors.font} size={18} type='font-awesome' name='pencil' /></View>
              </View>
              <View style={inline}>
                <Text style={styles.text}>Rate</Text>
                <Text style={[styles.text,styles.data]}>$10 + $4/hr</Text>
              </View>
              <View style={inline}>
                <Text style={styles.text}>Location</Text>
                <Text style={[styles.text,styles.data]}>My Current Location</Text>
              </View>
              <View style={inline}>
                <Text style={styles.text}>Availability</Text>
                <View style={styles.data}><Icon color={colors.font} size={20} type='font-awesome' name='angle-right' /></View>
              </View>
              <View style={inline}>
                <Text style={styles.text}>Notes</Text>
                <View style={styles.data}><Icon color={colors.font}size={20} type='font-awesome' name='angle-right' /></View>
              </View>
            </View> : null}
          </View>
          <Image source={require('../images/Aaron_Asia2.jpeg')} style={styles.avi}/>
      </View>
        {this.props.children}
      </View>
    );
  }
}

export default(Profile)

const styles = StyleSheet.create({
  editAvi:{
    left:25,
    top:20,
    position: 'absolute'
  },
  data:{
    right:20,position: 'absolute'
  },
  switch:{
    position: 'absolute',
    top:10,
    right: 20,
  },
  avi:{
    position: 'absolute',
    width: screenWidth*0.5,
    height: screenWidth*0.5,
    top: 100,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: "white",
    borderRadius: screenWidth*0.5/2,
  },
  title:{
    fontSize: 20,
    marginBottom: 15,
    color:colors.font
  },
  text:{
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 15,
    color:colors.font
  },
  info:{
    paddingLeft:20,
    marginBottom: 30,
  },
  top:{
    flex:4,
  },
  infoCont:{
    backgroundColor: "white",
    flex: 10,
    width:screenWidth,
  }

})
