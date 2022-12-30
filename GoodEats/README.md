<h1>GoodEats 🍔</h1>

<h3>Tech Stack</h3>
<div>
<img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" alt="firebase"></a>
<img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" alt="expo"></a>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JS"></a>
<img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React-Native"></a>
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="yarn"></a>
</div>
 
### Setup
1. Install Project and Dependencies
```bash
$ git clone https://github.com/terrysu64/Mobile-Development-Projects.git
$ cd ./GoodEats
$ yarn add
$ yarn expo login -h
$ yarn start
```
2. Seteup Your Own Firestore database and Firebase Auth

sample config:
```javascript
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "goodeats-423bc.firebaseapp.com",
  projectId: "goodeats-423bc",
  storageBucket: "goodeats-423bc.appspot.com",
  messagingSenderId: "1082394813564",
  appId: "1:1082394813564:web:9ffc428228e74ba0fa15f9"
};
```

3. Create Your Own Yelp Fusion API Key 

sample restaurant location query:
```javascript
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
```

3. Create a `.env` With Personal Environment Variables

<h3>Issues and Updates</h3>

- Feel free to create PRs and raise relevant issues in the repo!
- Current to-do's: 
i) Find useable API to source restaurant menu data ⭐ (highest importance)
ii) Set up Jest with Expo and write a mock unit test.
iii) Resdesign the "settings" interface
