import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import {colors,input,logo,overlay} from '../config/styles'
import {ThemeProvider,Button,Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient'


class Register extends React.Component {
  state =
  { username:null,
    password:null,
    name:null,
    email:null,
    password:null,
    confirm:null
  };
  static navigationOptions = {header:null,headerMode:'none'}

  render() {
    return (
      <ImageBackground source={require('../images/home-design.jpg')} style={{width:'100%', height:'100%'}}>
        <View style={[overlay,{backgroundColor: 'rgba(70, 71, 105,0.9)'}]}>       
          <Icon color={"white"} size={70} type='antdesign' name='home' />
          <Text style={[logo,styles.logo]}>SCOUT</Text>

          <TextInput
          style={[input,styles.loginReg]}
          onChangeText={(text) => this.setState({name:text})}
          placeholder="Name"
          />
          <TextInput  onChangeText={(text) => this.setState({username:text})}
          style={[input,styles.loginReg]}
          placeholder="Username"
          />
          <TextInput
          style={[input,styles.loginReg]}
          onChangeText={(text) => this.setState({email:text})}
          placeholder="Email"
          />
          <TextInput
          style={[input,styles.loginReg]}
          onChangeText={(text) => this.setState({password:text})}
          placeholder="Password"
          />
          <TextInput
          style={[input,styles.loginReg]}
          onChangeText={(text) => this.setState({confirm:text})}
          placeholder="Confirm Password"
          />
          <Button buttonStyle={styles.button} onPress={() => this.register} title={"SIGN UP"}/>
        </View>
    </ImageBackground>
    );
  }
}

export default(Register)



const styles = StyleSheet.create({

  loginReg:{
    width:255,
    borderBottomWidth: 1,
    borderBottomColor:'white',
    marginBottom:20,
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
