import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import {colors,input,logo,overlay} from '../config/styles'
import {ThemeProvider,Button,Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';


class HomeScreen extends React.Component {
  state =
  { username:null,
    password:null,
  };
  static navigationOptions = {header:null}
  render() {
    return (
    <ImageBackground source={require('../images/bike.jpg')} style={{width:'100%', height:'100%'}}>
      <View style={[overlay,{backgroundColor: 'rgba(0,0,0,0.3)'}]}>
          <View style={styles.logoCont}>
            <Icon color={"white"} size={80} type='antdesign' name='home' />
            <Text style={[logo,styles.logo]}>SCOUT</Text>
            <Text style={{color:"white",fontSize:20}}>Apartment hunting made simple</Text>
          </View>
          <View style={styles.reg}>
            <Button type={'outline'} buttonStyle={styles.button} onPress={() => this.props.navigation.navigate('LOGIN')} title={"SIGN IN"}/>
            <Button buttonStyle={[styles.button,styles.regButton]} onPress={() => this.props.navigation.navigate('REGISTER')} title={"SIGN UP"}/>
          </View>
        </View>
        </ImageBackground>
    );
  }
}

export default(HomeScreen)



const styles = StyleSheet.create({

  loginReg:{
    width:255,
    borderBottomWidth: 1,
    borderBottomColor:'white',
    margin:5,
    color: "black",
  },
  button:{
    alignSelf: "center",
    width:255,
    borderRadius: 50,
    margin:7,
  },
  logoCont:
  {
    paddingLeft: 8,
    flex: 4,
    alignItems: 'center',
    alignSelf: 'center',
    top: 200,
},
reg:{
  flex: 1,
  bottom: 0,
  backgroundColor: "white",
  width: "100%",
  paddingTop: 10,
  shadowColor:"#000",
  shadowOffset:{height: 10,width: 0},
  shadowOpacity: 0.5,
  shadowRadius: 10,
  elevation: 24,
}
,
logo:{
  fontSize: 40,
  fontWeight: "500",
  color: "white"
}
});
