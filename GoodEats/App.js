import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants-screen';

export default function App() {

  return (
    <View style={styles.appContainer}>
      <RestaurantsScreen/>
      <ExpoStatusBar style="auto"/>
    </View>
  );

};

const styles = StyleSheet.create({

    appContainer: {
      flex: 1,
    },

});
