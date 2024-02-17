import axios from 'axios'

export const CulturePowerPath = axios.create({
    baseURL: 'https://modulo4t2.onrender.com/v1/'
})