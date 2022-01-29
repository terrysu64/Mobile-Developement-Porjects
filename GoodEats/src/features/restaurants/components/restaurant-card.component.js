import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Title = styled.Text`
    paddingLeft: 16px;
    paddingBottom: 16px;
`;

export const RestaurantCard = ({ restaurant = {} }) => {

    const {
        name = 'Temp',
        icon,
        photos = ["https://media.blogto.com/articles/20211009-1Hotel-15.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"],
        address = '100 temp street',
        IsOpen = true,
        rating = 3,
        isClosedTemporarily
    } = restaurant;

    return (
        <Card evelvation={5} style={styles.restaurantCard}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0]}}/>
            <Title>{name}</Title>
        </Card>
    );

}

const styles = StyleSheet.create({

    card: {
        backgroundColor: 'white',
    },

    cover: {
        padding: 20,
        backgroundColor: 'white',
    },

    title: {
        paddingLeft: 16,
        paddingBottom: 16,
    },

});