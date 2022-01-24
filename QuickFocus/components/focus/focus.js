import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TextInput} from 'react-native-paper';
import {AddFocus} from '../add-focus/add-focus';
 
export const Focus = ({setCurrFocus}) => {

  const [tempItem,setTempItem] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Please Enter a Temporary Focus</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            onChangeText={
              (text) => setTempItem(text)
            }
            onSubmitEditing={
              ({nativeEvent}) => setCurrFocus(tempItem)
            }
          />
          <AddFocus 
            size={50} 
            title={'+'}
            onPress={
              () => setCurrFocus(tempItem)
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  
  container: {
    flex: 0.3,
    paddingTop: 100,
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
    alignItems: 'center',
  },

  input: {
    flex: 1,
    marginRight: 20,
  },

});