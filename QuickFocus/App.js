// QuickFocus is a Pomodoro-like app that excels in simplicity and helps users focus on one task at a time

import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Focus} from './components/focus/focus';
import {Timer} from './components/timer/timer';

export default function App() {
  
  const [currFocus,setCurrFocus] = useState(null);
  
  const onTimerEnd = () => {
    setCurrFocus(null)
  };
  const renderElement = (currFocus) => {
    if (currFocus) {
      return <Timer currFocus={currFocus} onTimerEnd={onTimerEnd}/>
    }
    else {
      return (
        <Focus setCurrFocus={setCurrFocus}/>
      )
    }
  };

  return (
    <View style={styles.container}>
      {renderElement(currFocus)}
    </View>
  );
}

const styles = StyleSheet.create({ 
  
  container: {
    flex: 1,
    backgroundColor: '#1ed4b8',
  },

});

