import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper"

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/account-background.jpg")
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    height: 100%;
    width: 100%
    background-color: rgba(255, 255, 255, 0.25);
`;

export const AccountContainer = styled.View`
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
    background-color: rgba(255, 255, 255, 0.75);
`;

export const LoginButton = styled(Button).attrs({
    color: '#e396d9',
    icon: 'lock-open',
    mode: 'contained',
    labelStyle: { 
            color: "white", 
            fontSize: 23 
    },
    onPress: () => null,
})`
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RegisterButton = styled(Button).attrs({
    color: '#e396d9',
    icon: 'account',
    mode: 'contained',
    labelStyle: { 
            color: "white", 
            fontSize: 23, 
    },
    onPress: () => null,
})``;