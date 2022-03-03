import React, {useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { MapSearchBar } from "../components/map-search-component";
import { LocationContext } from "../../../services/location/location-context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants-context";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
`;

export const MapScreen = () => {

    const { location = {} } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
    const { lat, lng, viewport } = location; 

    //amount of north-to-south distance to display on the map.
    const [latDelta, setLatDelta] = useState(0);

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        const newLatDelta = northeastLat - southwestLat;
        setLatDelta(newLatDelta)
    }, [location, viewport]);

    return (
    <>
        <MapSearchBar/>
        <Map
            region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: latDelta,
                longitudeDelta: 0.02,
            }}
        >
            {restaurants.map((restaurant) => {
                return (
                    <MapView.Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        coordinate={{
                            latitude: restaurant.geometry.location.lat,
                            longitude: restaurant.geometry.location.lng,
                        }}
                    />
                );
            })}
        </Map>
    </>
    );
};