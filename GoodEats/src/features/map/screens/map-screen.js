import React, {useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { MapSearchBar } from "../components/map-search-component";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
`;

export const MapScreen = () => {
    return (
    <>
        <MapSearchBar/>
        <Map/>
    </>
    );
};