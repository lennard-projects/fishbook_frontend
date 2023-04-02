/* eslint-disable */
import { FETCH_ALL, START_LOADING, END_LOADING, FETCH_BY_FILTER, FETCH_FISH } from '../constants/actionTypes.js' 

export default(state = { isLoading: true, fishes: []}, action) => {
    switch(action.type){
        case FETCH_ALL:
            return {
                ...state,
                fishes: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            }
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case FETCH_BY_FILTER:
            return { ...state, 
                    fishes: action.payload.data,
                    currentPage: action.payload.currentPage,
                    numberOfPages: action.payload.numberOfPages }
        case FETCH_FISH: 
            return { ...state, fish: action.payload  }
        default:
            return state
    }
}
/* eslint-enable */