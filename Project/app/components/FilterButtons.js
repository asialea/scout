import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {inline,colors,screenWidth} from '../config/styles'
import {Button} from 'react-native-elements';

class FilterButtons extends React.Component {

  render() {
    return (
      <View style={[inline,styles.filterClose]}>
        <Button type={'clear'} title={'Reset'}></Button>
        <Button buttonStyle={styles.button} onPress={this.props.onClose} title={'Done'}></Button>
      </View>
    );
  }
}

export default(FilterButtons)


const styles = StyleSheet.create({
    filterClose:{
      height: 50,
      justifyContent: 'space-between',
      backgroundColor: colors.font,
      width: screenWidth,
      alignSelf: 'center',
      paddingHorizontal: 40,
      alignItems: 'center'
    },
    button:{
      paddingVertical:4,

    }

  })
