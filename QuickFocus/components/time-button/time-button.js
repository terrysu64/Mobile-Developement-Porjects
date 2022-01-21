import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

export const TimeButton = ({
  
  style = {},
  textStyle = {},
  size = 125,
  ...props

  }) => {
    return (
      <TouchableOpacity style={[styles(size).button, size]}>
        <Text style={[styles(size).text,textStyle]} onPress={props.onPress}>{props.title}</Text>
      </TouchableOpacity>
    );
  };

const styles = (size) => {
  return StyleSheet.create({
    
    button: {
      width: size*1.5,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
      borderWidth: 2,
      marginRight: 20,
    },

    text: {
      color: '#fff',
      fontSize: size/3,
      textAlign: 'center',
    }

  });
};