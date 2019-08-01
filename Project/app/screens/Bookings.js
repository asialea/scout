import React, {Component} from 'react';
import {StyleSheet,ScrollView, Text, View, TextInput,ImageBackground} from 'react-native';
import {Button,Icon} from 'react-native-elements';
import {overlay,inline,colors,shadow,body,screenWidth,navItems,input} from '../config/styles'
import {tours} from '../data/tours';
import Header from '../components/Header'
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import DateTimePicker from "react-native-modal-datetime-picker";

class Bookings extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({

    tabBarIcon: ({ tintColor }) => (
      <Icon size={27} color={navItems.color} type='antdesign' name='home' /> ),

  });

  constructor() {
      super();
      this.state = {
         visible: false,
         isDateTimePickerVisible: false
      };
   }


  showDateTimePicker=()=>{
    this.setState({isDateTimePickerVisible:true});
  }

  handleDatePicked(){
    
  }

  render() {
    return (
    <View style={[overlay]}>
      <Header text={"My Bookings"}/>
      <View style={body}>
        <ScrollView>
          {tours.length>0 ? tours.map((booking,idx) =>(
          <View key={idx} style={!booking.passed ? [styles.cont,shadow] : [styles.cont,shadow,{backgroundColor:'rgba(0,0,0,0.2)'}]}>
            <ImageBackground source={booking.image} style={{width:screenWidth,height:140}}>
              <View style={!booking.passed ? styles.image :[styles.image,{backgroundColor:'rgba(0,0,0,0.2)'}]}>
              </View>
            </ImageBackground>
              <View style={[{margin:10}]}>
                <Text style={styles.text}> {booking.address} </Text>
                <Text style={[styles.text,{color: colors.grey}]}> {booking.date} {booking.time} </Text>
              </View>
            </View>
          )) : null
          }
        </ScrollView>
        <Button onPress={() => {this.setState({ visible: true });}} buttonStyle={[styles.button]} icon={<Icon color={'white'}size={24} type='materialicons' name='add' />}/>

        <Dialog visible={this.state.visible} onTouchOutside={() => {this.setState({ visible: false });}}>
          <DialogContent style={{width: screenWidth*0.9}}>
            <Text style={[styles.popup,styles.heading]}>New Listing</Text>
            <TextInput style={[input,styles.popup,{borderBottomWidth: 0.2}]} placeholder="Address"/>
            <TextInput style={[input,styles.popup,{borderBottomWidth: 0.2}]} placeholder="Unit # (optional)"/>
            <Button type={"clear"} style={styles.popup}title="Appointment Time (optional)" onPress={()=>{this.setState({isDateTimePickerVisible:true})}} />
            <DateTimePicker mode={'datetime'} isVisible={this.state.isDateTimePickerVisible} onConfirm={this.handleDatePicked} onCancel={()=>{this.setState({visible:false})}}/>
            <Button buttonStyle={{backgroundColor:colors.font}} title="Submit" onPress={()=>{this.setState({ visible: false });}}/>
          </DialogContent>
        </Dialog>
      </View>
        {this.props.children}
    </View>
    );
  }
}

export default(Bookings)

const styles = StyleSheet.create({
  image:{
    width:screenWidth,
    height:140,
},
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
    fontWeight: '400',
    },
  button:{
    position: 'absolute',
    right: 10,
    bottom: 20,
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: colors.font,
  },

  popup:{
    marginVertical: 10,
    color:colors.font,
    fontWeight: 'normal',
    fontSize: 18
  },

  heading:{
    fontWeight: '300',
    fontSize: 25,
    alignSelf: 'center'
  }

});
