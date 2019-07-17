
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,StyleSheet,Switch} from 'react-native';
import {inline} from '../config/styles'
import {Icon} from 'react-native-elements';


class SideMenu extends React.Component {
    navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  constructor() {
      super();
      this.state = {
         switchValue: false,
      }
   }
   toggleSwitch = (value) => {
      this.setState({switchValue: value})
   }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>

              <View style={inline}>
                <View style={styles.navItemStyle}>
                  <Switch onValueChange = {this.toggleSwitch} value = {this.state.switchValue}/>
                </View>
                <View style={{paddingTop: 15}}>
                  <Icon size={22} type='materialicons' name='work' />
                </View>
              </View>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Dashboard')}>
                Dashboard
              </Text>

              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Settings')}>
                Settings
              </Text>

          </View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Logout')}>
            Logout
          </Text>
        </View>
      </View>

    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default(SideMenu);



const styles = StyleSheet.create({

  container: {
    paddingTop: 50,
    flex: 1
  },
  navItemStyle: {
    padding: 10,
    fontSize: 16,
  },

  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
  }


})
