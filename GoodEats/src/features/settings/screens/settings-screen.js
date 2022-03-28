import React, { useContext } from "react";
import { Linking } from "react-native";
import { List, Avatar } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication-context";
import styled from "styled-components/native";

const StyledListItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
    align-items: center;
    padding-top: 10px;
`;

const EmailText = styled.Text`
    padding-top: 10px;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
`;

export const SettingsScreen = ({ navigation }) => {

    const { onLogout, user} = useContext(AuthenticationContext);

    return (
        <>
            <AvatarContainer>
                <Avatar.Icon size={180} icon="account" backgroundColor="#e396d9"/>
            </AvatarContainer>
            {user && <EmailText>{user.email}</EmailText>}
            <List.Section>
                <StyledListItem
                    title="Favourites"
                    description="Check out your favourite restaurants"
                    left={(props) => <List.Icon {...props} color="black" icon="heart-outline" />}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <StyledListItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={onLogout}
                />
                <StyledListItem
                    title="Special Button 🌟"
                    description="Learn more about the creator of this app"
                    left={(props) => <List.Icon {...props} color="black" icon="human" />}
                    onPress={() => Linking.openURL('https://terrysu64.github.io/Terry-Su-Personal-Website/')}
                />
            </List.Section>
        </>
    );
};