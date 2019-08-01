import React, {Component} from 'react';
import {StyleSheet,ScrollView,Text, View, TextInput,Image,Slider} from 'react-native';
//Slider deprecated fix later
import {screenWidth,colors,body,inline,overlay,shadow,input,header,navItems} from '../config/styles'
import {Button,Icon,Input,ThemeProvider} from 'react-native-elements';
import {listings} from '../data/listings'
import FilterButtons from '../components/FilterButtons'
// import Slider from '@react-native-community/slider';

class Search extends React.Component {
  static navigationOptions = {
    title: 'Search',
    tabBarIcon: ({ tintColor }) => (
    <Icon size={25} color={navItems.color} type='feather' name='search' />),
    };

  constructor() {
      super();
      this.state = {
        filter:false,
      }
   }


  render() {
    const theme = {
        Button: {
          titleStyle: {
            color: "white",
            fontSize:16
          },
        },
      };
    return (
      <View style={overlay}>
        <View>
          <View style={[styles.filter,inline,{paddingTop:40}]}>
            <View style={{flex:6}}>
              <Input inputContainerStyle={styles.search}leftIcon={<Icon color={colors.grey} name='search'size={22}/>} placeholder="Search"/>
            </View>
          </View>
          <View style={[styles.filter]}>
            <ScrollView horizontal>
            <ThemeProvider theme={theme}>
              <Button type={"outline"} buttonStyle={styles.tile} onPress={()=>this.setState({radius:true})} title={"Radius"}></Button>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Button type={"outline"} buttonStyle={styles.tile} onPress={()=>this.setState({zipcode:true})} title={"Zip Code"}></Button>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Button type={"outline"} buttonStyle={styles.tile} title={"Date"}></Button>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Button type={"outline"} buttonStyle={styles.tile} title={"Time"}></Button>
            </ThemeProvider>
            </ScrollView>
          </View>
        </View>

        <View style={styles.filterPop}>
          {this.state.filter ?
            <View>
            <Text style={[styles.heading,{alignSelf: 'center'}]}>Filters</Text>
            <Text style={[styles.heading,{fontSize: 16}]}>Radius</Text>
            <Slider
               style={{width: 280, height: 60}}
               minimumValue={0}
               maximumValue={30}
               value={0}
             />
            <View style={inline}>
             <Text style={[styles.heading,{fontSize: 16}]}>Zip Code</Text>
             <Input style={{fontSize: 16}} placeholder={'Zip Code'}/>
            </View>
          <FilterButtons onClose={()=>this.setState({radius:false})}/>
          </View>
          :null}
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
      backgroundColor: colors.font,
      alignItems: 'center',
      width: screenWidth,
      justifyContent: 'flex-end'
    },
    tile:{
      paddingHorizontal:10,
      paddingVertical: 2,
      borderColor: 'white',
      borderWidth: 1,
      margin: 12,
      borderRadius: 2,
    },
    search:{
      borderColor:'white',
      backgroundColor: 'white',
      borderRadius: 5,
      height: 37,
      width:0.9*screenWidth,
      alignSelf: 'center'
    },
    filterPop:{
      paddingTop:10,
      width: screenWidth*0.8
    },
    heading:{
      fontSize: 20,
      color: colors.grey
    },

  })
