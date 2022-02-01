import React from "react";
import styled from "styled-components/native";
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from "react-native-svg";
import { Star } from "../../../../assets/star";

const StyledCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.ui.quaternary};
    margin-bottom: ${(props) => props.theme.space[3]};
`;

const CardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.ui.quaternary};
    padding: 20px;
`;

const Info = styled.View`
    padding-left: ${(props) => props.theme.space[4]};
    padding-bottom: ${(props) => props.theme.space[3]};
`;

const SvgContainer = styled.View`
    flex-direction: row; 
    align-items: center;
`;

const OpenSvg = styled.View`
    margin-left: auto;
    flex-direction: row;
    align-items: center;
    padding-right: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
`;

const Closed = styled.Text`
    color: ${(props) => props.theme.colors.ui.error};
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
`;

const Open = styled.Text`
    color: ${(props) => props.theme.colors.ui.success};
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
`;

const RatingContainer = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[1]};
    padding-bottom: ${(props) => props.theme.space[1]};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const TypeIcon = styled.Image`
    width: 15px;
    height: 15px;
    margin-left: ${(props) => props.theme.space[2]};
`;

export const RestaurantCard = ({ restaurant = {} }) => {

    const {
        name = "Terry's Restaurant",
        icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://media.blogto.com/articles/20211009-1Hotel-15.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"],
        address = '100 temp street',
        isOpen = true,
        rating = 3
    } = restaurant;

    return (
        <StyledCard evelvation={5}>
            <CardCover key={name} source={{ uri: photos[0]}}/>
            <Info>
                <Title>{name}</Title>
                <SvgContainer>
                    <RatingContainer>
                        {[...Array(Math.floor(rating))].map(() =>(
                            <SvgXml xml={Star} width={20} height={20}/>
                        ))}
                    </RatingContainer>
                    <OpenSvg>
                        {!isOpen ? <Closed>CLOSED</Closed>
                        : <Open>OPEN</Open>
                        }
                        <TypeIcon source={{ uri: icon }} />
                    </OpenSvg>
                </SvgContainer>
                <Address>{address}</Address>
            </Info>
        </StyledCard>
    );

}

