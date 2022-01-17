import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Countdown} from '../countdown/countdown'
 
export const Timer = ({currFocus}) => {

  return (
    <View style={styles.container}>
      <Countdown/>
      <Text style={styles.title}>Currently Focusing On:</Text>
      <Text style={styles.task}>{currFocus}</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({ 
  
  container: {
    flex: 1,
    paddingTop: 20,
  },

  title: {
    color: 'white',
    textAlign: 'center',
  },

  task: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

});