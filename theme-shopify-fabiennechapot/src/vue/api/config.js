import axios from 'axios'

const API = axios.create({
    baseURL: `https://dadasport-app.faume.tech/api/v1/resaleplugin/`,
    headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
    }
});

export default API
