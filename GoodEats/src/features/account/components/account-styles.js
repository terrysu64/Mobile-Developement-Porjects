import React from "react";
import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper"

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
})``;

export const BackButton = styled(Button).attrs({
    color: '#e396d9',
    mode: 'contained',
    labelStyle: { 
            color: "white", 
            fontSize: 23, 
    },
})`
    margin-top: 25px;
`;

export const AuthInput = styled(TextInput)`
  width: 270px;
  margin-bottom: 10px;
`;

export const ErrorText = styled.Text`
    color: ${(props) => props.theme.colors.text.error};
    font-weight: bold;
    max-width: 270px;
    margin-bottom: 15px;
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.colors.text.inverse};
    font-size: ${(props) => props.theme.sizes[3]};
    font-family: ${(props) => props.theme.fonts.heading};
`;

export const TerryText = styled.Text`
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: ${(props) => props.theme.colors.text.inverse};
    font-size: ${(props) => props.theme.sizes[1]};
    font-family: ${(props) => props.theme.fonts.monospace};
`;
