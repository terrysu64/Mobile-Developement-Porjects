import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const minToMs = (min) => min*6000;

export const Countdown = ({mins=20, isPaused}) => {

  const [ms,setMs] = useState(minToMs(mins));
  const formatTime = (time) => time < 10 ? `0${time}` : time;

  const min = Math.floor(ms/6000);
  const sec = Math.floor((ms%6000)/1000);

  return (
    <View>
      <Text style={styles.text}>{formatTime(min)}:{formatTime(sec)}</Text>
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