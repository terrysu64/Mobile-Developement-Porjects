// QuickFocus is a Pomodoro-like app that excels in simplicity and helps users focus on one task at a time

import React, {useState, useEffect, Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Focus} from './components/focus/focus';
import {Timer} from './components/timer/timer';
import {FocusHistory} from './components/focus-history/focus-history';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  
  const [currFocus,setCurrFocus] = useState(null);
  const [focusHistory,setFocusHistory] = useState([]);

  const status = {
    complete : 1,
    cancelled : 0,
  }

  const addSubjectWithStatus = (subject, status) => {
    setFocusHistory([...focusHistory, {subject, status}])
  };
  const onTimerEnd = () => {
    addSubjectWithStatus(currFocus, status.complete)
    setCurrFocus(null)
  };
  const clearSubject = () => {
    addSubjectWithStatus(currFocus, status.cancelled)
    setCurrFocus(null)
  };
  const onClear = () => {
    setFocusHistory([])
  };
  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory))
    }
    catch (err) {
      console.log(err)
    }
  };
  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory")
      const temp = JSON.parse(history)
      if (history && temp.length) {
        setFocusHistory(temp)
      }
    }
    catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    console.log(focusHistory)
    saveFocusHistory()
  },[focusHistory]);

  useEffect(() => {
    console.log(focusHistory)
    loadFocusHistory()
  },[]);

  const renderElement = (currFocus) => {
    if (currFocus) {
      return <Timer currFocus={currFocus} onTimerEnd={onTimerEnd} clearSubject={clearSubject}/>
    }
    else {
      return (
        <>
          <Focus setCurrFocus={setCurrFocus}/>
          <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
        </>
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

