import {mocks, mockImages} from "./mock";
import camelize from "camelize";
import { YELP_API_KEY } from "../../../env"

const convertData = (data) => {
    return {
        'html_attributions': [],
        "next_page_token": "some token",
        "results": data.businesses.map((res) => {
            return {
                "business_status": "OPERATIONAL",
                "geometry": {
                    "location": {
                      "lat": res.coordinates.latitude,
                      "lng": res.coordinates.longitude
                    },
                  },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
                "name": res.name,
                "opening_hours": {
                    "open_now": !(res.is_closed)
                },
                "photo": res.image_url,
                "rating": res.rating,
                "types": [ "restaurant", "food"],
                "user_ratings_total": res.review_count,
                "vicinity": res.location.display_address.join(' ')
            }
        }),
        "status": "OK"
    }
};

export const restaurantsRequest = (keyword) => {
    return new Promise ((resolve, reject) => {
        const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${keyword}`
        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            },
        })
        .then((response) => response.json())
        .then((data) => {
            resolve(convertData(data))
        })
        .catch((err) => reject(`error requesting restaurants: ${err}`))
    })
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = mockImages
        return {
            ... restaurant,
            address: restaurant.vicinity,
            isOpen: restaurant.opening_hours.open_now,
            isClosedTemporarily: false
        }
    })
    return camelize(mappedResults)
};




