import { END_LOADING, FETCH_ALL, START_LOADING, FETCH_BY_FILTER, FETCH_FISH } from "../constants/actionTypes";
import * as api from '../api'

export const getFishes = (page) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const { data } = await api.fetchFishes(page) 
        dispatch({ type: FETCH_ALL, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message);
    }
}

export const getFishesByFilter = (filterQuery, page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchFishesFilter(filterQuery, page)
        dispatch({ type: FETCH_BY_FILTER, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const getFish = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchFish(id)
        dispatch({ type: FETCH_FISH, payload: data})
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}
