import React from 'react'
import Card from "./Card";
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Paginate from './Paginate';
import { CircularProgress } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getFishesByFilter, getFishes } from '../actions/fishes'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Main = () => {
    const dispatch = useDispatch()
    const { fishes, isLoading} = useSelector((state) => state.fishes)
    
    const query = useQuery()
    const history = useNavigate()
    const page = query.get('page') || 1

    const filterQuery = query.get('filterQuery') || "All"
       
    const filterAll = (val) => {
        dispatch(getFishes())
        history(`/fishes/filter?filterQuery=${val}`)
    }

    const filterFreshwater = (val) => {
        dispatch(getFishesByFilter(val,page))
        history(`/fishes/filter?filterQuery=${val}`)
    }

    const filterSaltwater = (val) => {
        dispatch(getFishesByFilter(val,page))
        history(`/fishes/filter?filterQuery=${val}`)
    }
    
    if (!fishes.length && !isLoading) return 'No fishes.';
   
  return (
    <section className="flex md:flex-row flex-col w-full items-start justify-start">
        <div className="flex md:flex-row flex-col w-full xl:max-w-[1280px]">
            <div className="bg-white sm:px-[16px] px-[6px] items-center justify-start flex-col md:w-[25%] w-[100%] p-6 border-r-[#E2E3E9] border-r-[1px]">
                <button  className="p-2 card w-full rounded-md font-poppins font-bold" value="All" onClick={(e) => filterAll(e.target.value)}>All</button>
                <button  className="p-2 card w-full rounded-md font-poppins font-bold" value="Freshwater" onClick={(e) => filterFreshwater(e.target.value)}>Freshwater</button>
                <button  className="p-2 card w-full rounded-md font-poppins font-bold" value="Saltwater" onClick={(e) => filterSaltwater(e.target.value)}>Saltwater</button>
            </div>
            <div className="md:w-[75%] w-[100%] flex flex-col px-6 py-6 justify-center items-center bg-[#f7f8fc]">
                <div className="flex flex-col sm:flex-row flex-wrap flex-1 px-6 py-6 justify-center items-center">
                    {isLoading ? <CircularProgress /> : (
                        fishes?.map((fish) => (
                        <div key={fish._id}>
                            <Card fish={fish} />
                        </div>
                    )))}
                </div>
                <div className="flex items-center justify-center">
                    <Paginate filterQuery={filterQuery} page={page} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main