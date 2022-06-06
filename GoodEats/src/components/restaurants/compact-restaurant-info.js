import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const Item = styled.View`
    padding: 10px;
    max-width: 135px;
    align-items: center;
`;

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

//for an andriod-specific bug 
const CompactWebView = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const StyledText = styled.Text`
    padding-top: ${(props) => props.theme.space[2]};
    font-family: ${(props) => props.theme.fonts.body};
    text-align: center;
`

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap=false }) => {
    
    const Image = isAndroid && isMap ? CompactWebView : CompactImage;
    const noPhoto = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";


    return (
        <Item>
            <Image source={{uri: restaurant.photo!=='' ? restaurant.photo: noPhoto}}/>
            <StyledText>{restaurant.name}</StyledText>            
        </Item>
    );
};