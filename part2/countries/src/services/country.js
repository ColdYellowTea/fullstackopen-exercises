import axios from 'axios'
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"
const api_key = import.meta.env.WEATHER_KEY

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default {getAll}