import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
//will use add-focus as button for distinct purpose again
import AddFocus from '../add-focus/add-focus';

export const FocusHistory = ({focusHistory, onClear}) => {

  const clearHistory = () => {
    onClear()
  };
  const historyItem = ({item,index}) => {
    const status = item.status === 0 ? '❌' : '✅'
    return (
      <Text style={styles.historyItem(item.status)}>{`${item.subject} ${status}`}</Text>
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

});
