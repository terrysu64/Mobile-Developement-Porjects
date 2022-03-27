import React from "react";
import { RestaurantsNavigator } from "./restaurant-navigator";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { MapScreen } from "../../features/map/screens/map-screen";
import { SettingsNavigator } from "./settings-navigator";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={
            ({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                if (route.name === 'Restaurants') {
                return <Ionicons name={'md-fast-food'} size={size} color={color}/>
                } 
                else if (route.name === 'Map') {
                return <FontAwesome5 name="map-marked-alt" size={size} color={color}/>
                }
                else if (route.name === 'Settings') {
                return <MaterialIcons name="app-settings-alt" size={size} color={color} />
                }
            },
            headerShown: true,
            tabBarActiveTintColor: '#e396d9',
            tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
    )
};
