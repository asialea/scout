import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,ImageBackground} from 'react-native';
import {colors,input,logo,overlay} from '../config/styles'
import {Button,Icon} from 'react-native-elements';


class Login extends React.Component {
  state =
  { username:null,
    password:null,
  };
  static navigationOptions = {header:null,headerMode:'none'}

  render() {
    return (
    <ImageBackground source={require('../images/home-design.jpg')} style={{width:'100%', height:'100%'}}>
      <View style={[overlay,{backgroundColor: 'rgba(70, 71, 105,0.9)'}]}>
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
    </ImageBackground>
    );
  }
}

export default(Login)



const styles = StyleSheet.create({

  loginReg:{
    width:255,
    borderBottomWidth: 1,
    borderBottomColor:'white',
    marginBottom:30,
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
    color: "white",
    marginBottom: 20,
  }
});
