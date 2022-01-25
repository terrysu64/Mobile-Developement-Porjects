import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
//will use TimeButton as button for distinct purpose again
import {TimeButton} from '../time-button/time-button';

export const FocusHistory = ({focusHistory, onClear}) => {

  const historyItem = ({item,index}) => {
    const status = item.status === 0 ? '❌' : '✅'
    const date = new Date().toLocaleString().slice(0,10)
    return (
      <Text style={styles.historyItem(item.status)}>{`${item.subject} ${status}, ${date}`}</Text>
    )
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.title}>Focus History</Text>
        <FlatList 
            style={styles.flatList}
            contentContainerStyle = {{flex: 1, alignItems: 'center'}} 
            data={focusHistory} 
            renderItem={historyItem}
        />
        <View style={styles.clearContainer}>
          <TimeButton title={'Clear History'} size={50} onPress={() => onClear()}/>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({ 
  
  safeAreaView: {
    flex: 0.7,
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  flatList: {
    width: '100%',
    height: '100%',
  },

  historyItem: (status) => ({
    color: status === 0 ? 'red' : 'green',
    fontSize: 17,
    marginBottom: 10,
  }),

  clearContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },

});
