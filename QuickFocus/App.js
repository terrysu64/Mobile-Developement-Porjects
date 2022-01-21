// QuickFocus is a Pomodoro-like app that excels in simplicity and helps users focus on one task at a time

import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Focus} from './components/focus/focus';
import {Timer} from './components/timer/timer';

export default function App() {
  
  // states
  const [currFocus,setCurrFocus] = useState(null);
  
  // functions
  const renderElement = (currFocus) => {
    if (currFocus) {
      return <Timer currFocus={currFocus}/>
    }
    else {
      return (
        <Focus setCurrFocus={setCurrFocus}/>
      )
    }
  };

  // rendered app
  return (
    <View style={styles.container}>
      {renderElement(currFocus)}
    </View>
  );
}

// native styling
const styles = StyleSheet.create({ 
  
  container: {
    flex: 1,
    backgroundColor: '#1ed4b8',
  },

});

