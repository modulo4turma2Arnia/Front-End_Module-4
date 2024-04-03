import axios from 'axios'

export const CulturePowerPath = axios.create({
   baseURL: 'https://back-end-module-4.onrender.com/v1/'
   // baseURL: 'https://modulo4t2.onrender.com/v1/'
})