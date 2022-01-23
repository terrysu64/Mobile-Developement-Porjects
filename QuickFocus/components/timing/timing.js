import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import {TimeButton} from '../time-button/time-button'
 
export const Timing = ({changeTime}) => {
  return (
    <View style={styles.buttonWrapper}>
      <TimeButton size={50} title={'15min'} onPress={()=>changeTime(15)}/>
      <TimeButton size={50} title={'30min'} onPress={()=>changeTime(30)}/>
      <TimeButton size={50} title={'45min'} onPress={()=>changeTime(45)}/>
    </View>
  )
};

const styles = StyleSheet.create({ 

  buttonWrapper: {
    display: "flex",
    flexDirection: 'row',
  },

});


