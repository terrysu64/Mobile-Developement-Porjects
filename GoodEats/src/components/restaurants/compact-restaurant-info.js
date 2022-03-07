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

export const CompactRestaurantInfo = ({ restaurant }) => {
    
    const Image = isAndroid ? CompactWebView : CompactImage;

    return (
        <Item>
            <Image source={{uri: restaurant.photos[0]}}/>
            <StyledText>{restaurant.name}</StyledText>            
        </Item>
    );
};