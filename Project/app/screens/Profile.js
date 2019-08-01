import React, {Component} from 'react';
import {StyleSheet,ScrollView,Text, View,Image,Switch} from 'react-native';
import {screenWidth,colors,body,inline,overlay,shadow,navItems} from '../config/styles'
import {Button,Icon} from 'react-native-elements';
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';


class Profile extends React.Component {

  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon size={27} color={navItems.color} type='antdesign' name='user' /> ),
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

  componentDidMount(){
    console.log(this.props.user.type);
  }

  render() {
    const user = this.props.user;
    return (
      <View style={overlay}>
      <Header text={"Profile"}/>
      <View style={body}>
      <LinearGradient colors={['#a8c0ff','#C9D6FF']}  style={styles.top}></LinearGradient>
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
                <Text style={[styles.text,styles.data]}>{user.name}</Text>
              </View>
              <View style={inline}>
                <Text style={styles.text}>Username</Text>
                <Text style={[styles.text,styles.data]}>@{user.username}</Text>
              </View>
              <View style={inline}>
                <Text style={styles.text}>Email</Text>
                <Text style={[styles.text,styles.data]}>{user.email}</Text>
              </View>
            </View>
          { this.state.switchValue ?
            <View style={styles.info}>
              <Text style={styles.title}>Scout Info</Text>
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
          <Image source={user.avi} style={styles.avi}/>
      </View>
        {this.props.children}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchUser: () => {
    //   dispatch(fetchUser())
    // }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

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
    backgroundColor: colors.main,
  },
  infoCont:{
    backgroundColor: "white",
    flex: 10,
    width:screenWidth,
  }

})
