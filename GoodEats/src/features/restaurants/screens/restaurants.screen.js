import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';

export const RestaurantsScreen = () => {

    return (
    <>
        <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
            <Searchbar placeholder="Search Restaurants 🍽"/>
        </View>
        <View style={styles.listContainer}>
            <RestaurantInfo/>
        </View>
        </SafeAreaView>
    </>
    );
}

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
  
    searchBar: {
      padding: 16,
      backgroundColor: 'green',
    },
  
    listContainer: {
      flex: 1,
      padding: 16,
      backgroundColor: 'blue',
    },
  
  });