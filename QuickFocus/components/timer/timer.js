import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Countdown} from '../countdown/countdown';
//AddFocus will act as the starting button
import {AddFocus} from '../add-focus/add-focus';

export const Timer = ({currFocus}) => {

  const [isStarted,setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <Countdown isPaused={!isStarted}/>
      <Text style={styles.title}>Currently Focusing On:</Text>
      <Text style={styles.task}>{currFocus}</Text>
      <View style={styles.buttonWrapper}>
        {isStarted ? 
        (<AddFocus title={'pause'} onPress={()=>{setIsStarted(false)}}/>) : 
        (<AddFocus title={'start'} onPress={()=>{setIsStarted(true)}}/>)}
      </View>
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

  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

});