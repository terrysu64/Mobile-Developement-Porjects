import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

export const AddFocus = ({
  
  style = {},
  textStyle = {},
  size = 125,
  ...props

  }) => {
    return (
      <TouchableOpacity style={[styles(size).radius, size]}>
        <Text style={[styles(size).text,textStyle]}>{props.title}</Text>
      </TouchableOpacity>
    );
  };

const styles = (size) => {
  return StyleSheet.create({
    
    radius: {
      borderRadius: size/2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
      borderWidth: 2,
    },

    text: {
      color: '#fff',
      fontSize: size/3,
    }

  });
};
