import camelize from "camelize";
import { POSITIONSTACK_API_KEY } from "../../../env";

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location; 
  return { lat, lng, viewport: geometry.viewport };
};

export const locationRequest = (searchTerm) => { 
  return new Promise((resolve, reject) => {
    fetch(`http://api.positionstack.com/v1/forward?access_key=${POSITIONSTACK_API_KEY}&query=${searchTerm}&bbox_module=1`)
    .then((response) => response.json())
    .then((locs) => locs.data[0])
    .then((data) => {
      const fetchedData = 
      {
        results: [
         {
           geometry: {
             location: {
               lng: data.longitude,
               lat: data.latitude,
             },
             viewport: {
               northeast: {
                 lat: data.bbox_module[3],
                 lng: data.bbox_module[2],
               },
               southwest: {
                 lat: data.bbox_module[1],
                 lng: data.bbox_module[0],
               },
             },
           },
         },
        ],
      }
      resolve(fetchedData)
    })
    .catch((err) => reject(`location not found: ${err}`))
  })
};


