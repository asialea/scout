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
  render() {
    return (
    <LinearGradient colors={[colors.blue3,colors.blue1]}  style={{width: '100%', height: '100%'}}>
      <View style={overlay}>
        <View style={{flex:2}}>
          <View style={[styles.searchCont,{paddingTop:45}]}>
            <Input inputContainerStyle={styles.search}leftIcon={<Icon color={colors.grey} name='search'size={22}/>} placeholder="Search"/>
          </View>
          <View style={styles.searchCont}>
            <ScrollView horizontal>
              <View style={styles.tile}><Text style={[styles.text,{color:'white'}]}>Radius</Text></View>
              <View style={styles.tile}><Text style={[styles.text,{color:'white'}]}>Zip Code</Text></View>
              <View style={styles.tile}><Text style={[styles.text,{color:'white'}]}>Date</Text></View>
              <View style={styles.tile}><Text style={[styles.text,{color:'white'}]}>Time</Text></View>
            </ScrollView>
          </View>
        </View>

          <View style={[body]}>
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
      </LinearGradient>
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
      borderColor: colors.grey,
      marginBottom: 5,
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
    tile:{
      paddingHorizontal:15,
      paddingVertical: 8,
      borderColor: colors.blue1,
      borderWidth: 1,
      margin: 12,
      borderRadius: 5,
    },
    search:{
      borderColor:'white',
      backgroundColor: colors.lightGrey,
      borderRadius: 5,

    }
  })
