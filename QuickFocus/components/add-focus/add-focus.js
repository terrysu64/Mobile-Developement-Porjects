import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

export const AddFocus = ({
  
  style = {},
  textStyle = {},
  size = 125,
  backgroundColor = null,
  ...props

  }) => {
    return (
      <TouchableOpacity style={[styles(size,backgroundColor).radius, size]}>
        <Text style={[styles(size).text,textStyle]} onPress={props.onPress}>{props.title}</Text>
      </TouchableOpacity>
    );
  };

const styles = (size,backgroundColor) => {
  return StyleSheet.create({
    
    radius: {
      borderRadius: size/2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
      borderWidth: 2,
      backgroundColor: backgroundColor,
    },

    text: {
      color: '#fff',
      fontSize: size/5,
      textAlign: 'center',
    }

  });
};
