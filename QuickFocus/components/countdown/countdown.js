import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const minToMs = (min) => min*60000;

export const Countdown = ({mins=0, isPaused, onProgress, onEnd}) => {

  const [ms,setMs] = useState(minToMs(mins));
  //in this case, useRef isn't pointing to any particular DOM node; 
  //we're using it as an arbitrary variable to store our countdown interval instead
  const interval = React.useRef(null);
  const formatTime = (time) => time < 10 ? `0${time}` : time;
  const countDown = (time) =>  {
    setMs((time) => {
      if (time <= 0 || mins === 0) {
        clearInterval(interval.current)
        onEnd()
        return 0
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / minToMs(mins))
      return timeLeft
    });
  };

  //change display everytime new minutes come in
  useEffect(()=> {
    setMs(minToMs(mins))
  },[mins])

  // useEffect is similar to componentDidMount and componentDidUpdate (it's like a condiiton for rendering)
  useEffect(() => {
    if (isPaused) {
      return
    }
    interval.current = setInterval(()=>countDown(ms),1000)
    return () => clearInterval(interval.current)
  },[isPaused]);

  const minutes = Math.floor(ms/60000)
  const seconds = Math.floor((ms%60000)/1000)

  return (
    <View>
      <Text style={styles.text}>{formatTime(minutes)}:{formatTime(seconds)}</Text>
    </View>
  );
  
};

const styles = StyleSheet.create({ 
  
  text: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
    margin: 10,
    marginTop: 20,
    backgroundColor: '#29cf87',
    textAlign: 'center',
  },

});