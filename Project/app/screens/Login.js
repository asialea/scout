import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,} from 'react-native';
import {colors,input,logo,overlay} from '../config/styles'
import {ThemeProvider,Button,Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient'


class Login extends React.Component {
  state =
  { username:null,
    password:null,
  };
  static navigationOptions = {header:null,headerMode:'none'}

  render() {
    return (
      <LinearGradient colors={[colors.blue3,colors.blue1]}  style={{width: '100%', height: '100%'}}>
        <View style={overlay}>
          <Icon color={"white"} size={70} type='antdesign' name='home' />
          <Text style={[logo,styles.logo]}>SCOUT</Text>
          <TextInput  onChangeText={(text) => this.setState({username:text})}
          style={[input,styles.loginReg]}
          placeholder="Username"
          />
          <TextInput
          style={[input,styles.loginReg]}
          onChangeText={(text) => this.setState({password:text})}
          placeholder="Password"
          />
          <Button buttonStyle={styles.button} onPress={() => {this.login;this.props.navigation.navigate('mainFlow')}} title={"SIGN IN"}/>
          <Text style={{alignSelf:'center',color:"white"}}>Forgot Password?</Text>
        </View>
      </LinearGradient>
    );
  }
}

export default(Login)



const styles = StyleSheet.create({

  loginReg:{
    width:255,
    borderBottomWidth: 1,
    borderBottomColor:'white',
    marginBottom:35,
    color: "white",
    alignSelf: 'center'
  },
  button:{
    alignSelf: "center",
    width:255,
    borderRadius: 50,
    margin: 10,
  },
  logo:{
    fontSize: 25,
    fontWeight: "400",
    color: "white"
  }
});
