import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Title = styled.Text`
    paddingLeft: ${(props) => props.theme.space[3]};
    paddingBottom: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary}
`;

const StyledCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.ui.quaternary}
`;

const CardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.ui.quaternary}
    padding: 20px;
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
        <StyledCard evelvation={5}>
            <CardCover key={name} source={{ uri: photos[0]}}/>
            <Title>{name}</Title>
        </StyledCard>
    );

}

