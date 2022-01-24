import React, {useState} from 'react';
import { View, Text, StyleSheet, Vibration, Platform } from 'react-native';
import {useKeepAwake} from 'expo-keep-awake';
import {Countdown} from '../countdown/countdown';
//AddFocus will act as the starting and clear focus button (work on naming better in future)
import {AddFocus} from '../add-focus/add-focus';
import {Timing} from  '../timing/timing';
import {ProgressBar} from 'react-native-paper';

export const Timer = ({currFocus, onTimerEnd, clearSubject}) => {

  useKeepAwake();

  const [isStarted,setIsStarted] = useState(false);
  const [progress,setProgress] = useState(1);
  const [minutes,setMinutes] = useState(0.05);

  const onProgress = (progress) => {
    setProgress(progress)
  };
  const changeTime = (time) => {
    setMinutes(time);
    setProgress(1);
    setIsStarted(false);
  };
  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval),10000)
    }
    else {
      Vibration.vibrate(10000)
    }
  };
  const onEnd = () => {
    changeTime(0)
    vibrate()
    onTimerEnd()
  };

  return (
    <View style={styles.container}>
      <Countdown 
        mins={minutes} 
        isPaused={!isStarted} 
        onProgress={onProgress}
        onEnd={onEnd}
      />
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
      <View style={styles.clearSubject}> 
        <AddFocus title={'Clear'} size={50} backgroundColor={'#2cb307'} onPress={()=>clearSubject()}/>
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

  clearSubject: {
    marginLeft: 17,
  },

});