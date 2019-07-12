import React, {Component} from 'react';
import {StyleSheet,ScrollView,Text, View, TextInput,Image} from 'react-native';
import {screenWidth,colors,body,inline,overlay,shadow,input,header,navItems} from '../config/styles'
import {Button,Icon,Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {listings} from '../data/listings'


class Search extends React.Component {
  static navigationOptions = {
    title: 'Search',
    tabBarIcon: ({ tintColor }) => (
    <Icon size={25} color={navItems.color} type='feather' name='search' />),
    tabBarOptions:{
        showLabel:false
      }
    };

  constructor() {
      super();
      this.state = {
         filter: false,
      }
   }
   toggleFilter = () => {
      this.setState({filter: !this.state.filter})
   }

  render() {
    return (
      <View style={overlay}>
        <View>
          <View style={[styles.filter,{marginTop:45},inline]}>
            <View style={{flex:6}}>
              <Input inputContainerStyle={styles.search}leftIcon={<Icon color={colors.grey} name='search'size={22}/>} placeholder="Search"/>
            </View>
            <View style={{flex:1}}>
              <Button onPress={this.toggleFilter} type={'clear'} buttonStyle={{width:50}} icon={<Icon size={30} color={"white"} type='materialicons' name='view-headline' />}/>
            </View>
          </View>
        {this.state.filter ?
          <View style={styles.filter}>
            <ScrollView horizontal>
              <View style={styles.tile}><Text style={[styles.text,{color:'white'}]}>Radius</Text></View>
              <View style={styles.tile}><Text style={[styles.text,{color:'white'}]}>Zip Code</Text></View>
              <View style={styles.tile}><Text style={[styles.text,{color:'white'}]}>Date</Text></View>
              <View style={styles.tile}><Text style={[styles.text,{color:'white'}]}>Time</Text></View>
            </ScrollView>
          </View>
        : null}
        </View>

          <View style={body}>
            <ScrollView>
              {listings.length>0 ? listings.map((listing,idx) =>(
              <View key={idx} style={[styles.cont,shadow,{alignItems: 'flex-start'}]}>
                <Image source={listing.image} style={{width:screenWidth,height:140}}/>
                  <View style={[{margin:10}]}>
                    <Text style={styles.text}> {listing.address} </Text>
                    <Text style={styles.text}> {listing.date} {listing.time} </Text>
                  </View>
                </View>
              )) :
            <View style={[styles.cont,shadow]}>
              <Text style={styles.text}>No Listings</Text>
            </View>
          }
            </ScrollView>
          </View>
          {this.props.children}
        </View>
      );
    }
  }

  export default(Search)

  const styles = StyleSheet.create({
    cont:{
      width:screenWidth,
      height: 200,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderColor: colors.lightGrey,
      marginBottom: 15,
    },
    text:{
      fontSize: 16,
      color:colors.font,
    },
    filter:{
      backgroundColor: colors.blue4,
      height: 55,
      alignItems: 'center',
      width: screenWidth
    },
    tile:{
      paddingHorizontal:10,
      paddingVertical: 5,
      borderColor: colors.blue1,
      borderWidth: 1,
      margin: 12,
      borderRadius: 5,
    },
    search:{
      borderColor:'white',
      backgroundColor: 'white',
      borderRadius: 5,
      height: 37,
    }
  })
