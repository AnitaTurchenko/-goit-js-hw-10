import axios from "axios";
const MY_KEY = 'live_fwBuqesDYiXArvmDMqBotleFp4Re3eapJlolz82JXoKW1XIrQJ0fbr9zbWMGOrkI'
axios.defaults.headers.common["x-api-key"] = MY_KEY;
const BASE_URL = 'https://api.thecatapi.com/v1';


export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`)
    .then(res => res.json())
    // .then(console.log);
};

// export function fetchCatByBreed(breedId) {
//     return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`)
//     .then(res => res.json())
//     .then(console.log)
// }

// fetchBreeds();

export function fetchCatByBreed(breedId) {
    return axios
      .get(`${BASE_URL}/images/search?bre1ed_ids=${breedId}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        // return response.json();
        return response.data;
      });
  }