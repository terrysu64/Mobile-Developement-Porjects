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

export const fetchData = (location) => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(convertData(data))
    })
    .catch((err) => console.log(err))
};

export const restaurantsRequest = (location) => {
    return new Promise ((resolve,reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found")
        }
        resolve(mock);
    })
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = mockImages
        return {
            ... restaurant,
            address: restaurant.vicinity,
            isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status !== "OPERATIONAL", 
            randomIndex: Math.floor(Math.random() * (6)),
        }
    })
    return camelize(mappedResults)
};




