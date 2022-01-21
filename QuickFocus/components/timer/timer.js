import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Countdown} from '../countdown/countdown';
//AddFocus will act as the starting button
import {AddFocus} from '../add-focus/add-focus';
import {Timing} from  '../timing/timing';
import {ProgressBar} from 'react-native-paper';

export const Timer = ({currFocus}) => {

  const [isStarted,setIsStarted] = useState(false);
  const [progress,setProgress] = useState(1);
  const [minutes,setMinutes] = useState(2);

  const onProgress = (progress) => {
    setProgress(progress)
  };
  const changeTime = (time) => {
    setMinutes(time);
    setProgress(0);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <Countdown mins={minutes} isPaused={!isStarted} onProgress={onProgress}/>
      <Text style={styles.title}>Currently Focusing On:</Text>
      <Text style={styles.task}>{currFocus}</Text>
      <View style={styles.progressBarWrapper}>
        <ProgressBar
          progress={1-progress}
          color='#2cb307'
          style={styles.progressBar}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing changeTime={changeTime}/>
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? 
        (<AddFocus title={'Pause ⏸'} size={200} onPress={()=>{setIsStarted(false)}}/>) : 
        (<AddFocus title={'Start ▶'} size={200} onPress={()=>{setIsStarted(true)}}/>)}
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

  progressBarWrapper: {
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  progressBar: {
    height: 20,
  },

  timingWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  buttonWrapper: {
    flex: 0.3,
    padding: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

});