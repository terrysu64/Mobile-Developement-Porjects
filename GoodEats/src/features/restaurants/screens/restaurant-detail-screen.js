import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurantCard } from "../components/restaurant-card.component";

//RestaurantDetailScreen has already been defined as a stack navigation route in restaurant-navigator.js
export const RestaurantDetailScreen = ({ route }) => {
    
    const [breakfastExpanded,setBreakfastExpanded] = useState(false);
    const [lunchExpanded,setLunchExpanded] = useState(false);
    const [dinnerExpanded,setDinnerExpanded] = useState(false);
    const [drinksExpanded,setDrinksExpanded] = useState(false);

    const { restaurant } = route.params;

    return (
        <>
            <RestaurantCard restaurant={restaurant}/>

            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={(props) => <List.Icon {...props} icon="coffee"/>}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="Breakfast Selection 1 🍳"/>
                    <List.Item title="Breakfast Selection 2 🍳"/>
                    <List.Item title="Breakfast Selection 3 🍳"/>
                </List.Accordion>

                <List.Accordion
                    title="Lunch"
                    left={(props) => <List.Icon {...props} icon="pizza"/>}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="Lunch Selection 1 🍔"/>
                    <List.Item title="Lunch Selection 2 🍔"/>
                    <List.Item title="Lunch Selection 3 🍔"/>
                </List.Accordion>

                <List.Accordion
                    title="Dinner"
                    left={(props) => <List.Icon {...props} icon="food-drumstick"/>}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="Dinner Selection 1 🍝"/>
                    <List.Item title="Dinner Selection 2 🍝"/>
                    <List.Item title="Dinner Selection 3 🍝"/>
                </List.Accordion>

                <List.Accordion
                    title="Drinks"
                    left={(props) => <List.Icon {...props} icon="beer"/>}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title="Drink Selection 1 🥂"/>
                    <List.Item title="Drink Selection 2 🥂"/>
                    <List.Item title="Drink Selection 3 🥂"/>
                </List.Accordion>
            </ScrollView>
        </>
    );
};