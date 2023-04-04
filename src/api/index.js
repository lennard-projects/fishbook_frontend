import axios from 'axios'

const url = 'https://fishbook-api.onrender.com/fishes'

export const fetchFishes = (page) => axios.get(`${url}?page=${page}`)

export const fetchFishesFilter = (filterQuery, page) => axios.get(`${url}/filter?filterQuery=${filterQuery}&page=${page}`)

export const fetchFish = (id) => axios.get(`${url}/${id}`)