import React, {Component} from 'react';
import {StyleSheet,ScrollView, Text, View, TextInput} from 'react-native';
import {Button,Icon} from 'react-native-elements';
import {overlay,logo,inline,colors,shadow,body,screenWidth,navItems} from '../config/styles'
import LinearGradient from 'react-native-linear-gradient';
import {tours,jobs} from '../data/tours';
import Header from './Header'

class Dash extends React.Component {
  static navigationOptions = {
        title: 'Dashboard',
        tabBarIcon: ({ tintColor }) => (
          <Icon size={27} color={navItems.color} type='antdesign' name='home' /> ),
    };
  render() {
    return (
    <LinearGradient colors={[colors.blue3,colors.blue1]}  style={{width: '100%', height: '100%'}}>
      <View style={[overlay]}>
      <Header text={"Dashboard"}/>
        <View style={body}>
          <Text style={styles.welcome}>Welcome Asia!</Text>
          <View style={styles.blockSmCont}>
          <View style={[shadow,styles.block,styles.blockSm]}>
            <View style={styles.tileInner}>
              <View style={inline}>
                <Text style={{fontSize: 25}}>2</Text>
                <Icon size={35} color={colors.font} type='evilicon' name='envelope' />
              </View>
              <Text style={[styles.title,styles.text]}>New Messages</Text>
            </View>
          </View>
          <View style={[shadow,styles.block,styles.blockSm]}>
            <View style={styles.tileInner}>
              <View style={inline}>
                <Text style={{fontSize: 25}}>1</Text>
                <Icon size={28} color={colors.font} type='materialicons' name='date-range' />
              </View>
              <Text style={[styles.title,styles.text]}>This Week</Text>
            </View>
          </View>
          </View>

          <View style={[shadow,styles.block]}>
            <View style={[inline,styles.titleDiv]}>
              <Text style={styles.title}>Scheduled Tours</Text>
            </View>
            <ScrollView horizontal>
                {tours ? tours.map((item,idx) =>(
                  <View key={idx} style={[styles.tile,shadow]}>
                    <View style={styles.tileInner}>
                      <View style={inline}>
                        <Icon size={20} type='font-awesome' name='user' />
                        <Text style={styles.text}>  @{item.username}</Text>
                      </View>
                      <Text style={styles.text}>{item.address.slice(0, 22)} ..</Text>
                      <Text style={[styles.text,{color: colors.grey}]}>{item.date} {item.time}</Text>
                      <Button style={{position: 'absolute',bottom: 0,alignSelf:'flex-end'}}
                        type="clear" icon={<Icon size={20} type='antdesign' color={colors.font} name='plus' />}>
                      </Button>
                    </View>
                  </View>
                )):
                <View style={styles.tileInner}>
                  <Text style={[styles.title,{fontSize: 18}]}>No Items</Text>
                </View>
              }
            </ScrollView>
            <Button buttonStyle={styles.view} title="View All"/>
          </View>

          <View style={[shadow,styles.block]}>
            <View style={[inline,styles.titleDiv]}>
              <Text style={styles.title}>Scheduled Jobs</Text>
            </View>
            <ScrollView horizontal>
            {jobs ? jobs.map((item,idx) =>(
              <View key={idx} style={[styles.tile,shadow]}>
                <View style={styles.tileInner}>
                  <View style={inline}>
                    <Icon size={20} type='antdesign' name='home' />
                    <Text style={styles.text}> 0</Text>
                  </View>
                  <Text style={styles.text}>{item.address.slice(0, 22)} ..</Text>
                  <Text style={[styles.title,styles.text]}>{item.date} {item.time}</Text>
                  <View style={{position: 'absolute',bottom: 0,alignSelf:'flex-end'}}>
                    <Icon size={20} type='antdesign' color='#912f06' name='plus' />
                  </View>
                </View>
              </View>
            )):
            <View style={[styles.tile,shadow]}>
              <View style={styles.tileInner}>
                <Text style={[styles.title,{fontSize: 18}]}>No Items</Text>
              </View>
            </View>
          }
            </ScrollView>
            <Button buttonStyle={styles.view} title="View All"/>
          </View>
          </View>
        {this.props.children}
    </View>
  </LinearGradient>
    );
  }
}

export default(Dash)

const styles = StyleSheet.create({
  text:{
    fontSize: 17,
    marginBottom: 5,
    fontWeight: '200',
    color:"#464769"
  },

  titleDiv:{
    justifyContent: 'center',
    borderBottomWidth:0.2,
    borderColor: "#d9d9d9",
  },

  view:{
    width: '100%',
    backgroundColor:colors.blue3,
    borderTopLeftRadius:0,
    borderTopRightRadius:0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

  },

  title:{
    fontSize:25,
    fontWeight:"300",
    color: colors.grey,
    margin: 5,
  },

  welcome:{
    fontSize:33,
    fontWeight:"200",
    marginBottom: 10,
    color:"white",
  },

  block:{
    width:screenWidth*0.85,
    height: 200,
    marginBottom: 30,
    backgroundColor: 'white',
    alignSelf: 'center',
    shadowRadius: 2,
    borderRadius: 5,
  },

  blockSm:{
    width:screenWidth*0.4,
    height: 75,
  },

  blockSmCont:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    width:315,
  },

  tile:{
    alignSelf: 'center',
    height:"75%",
    width:screenWidth*0.7,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor:colors.lightBlue,
    borderRadius: 10,
  },
  tileInner:{
    margin: 12,
  }

});
