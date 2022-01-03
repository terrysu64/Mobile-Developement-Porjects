// QuickFocus is a Pomodoro-like app that excels in simplicity and helps users focus on one task at a time

import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Focus} from './components/focus/focus';

export default function App() {

  // states
  const [focus,setfocus] = useState(null);

  // functions
  const renderElement = (focus) => {
    if (focus) {
      return <Text>Put timer here later</Text>
    }
    else {
      return (
        <Focus/>
      )
    }
  };

  // rendered app
  return (
    <View style={styles.container}>
      {renderElement(focus)}
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
