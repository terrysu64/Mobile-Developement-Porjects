import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TextInput} from 'react-native-paper';
import {AddFocus} from '../add-focus/add-focus';
 
export const Focus = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Please Enter a Temporary Focus ⌚</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}/>
          <AddFocus size={50} title={'+'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  
  container: {
    flex: 1,
  },

  titleContainer: {
    flex: 0.5,
    justifyContent: 'center',
    padding: 15,
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },

  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    marginRight: 20,
  },

});