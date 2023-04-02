import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Pagination, PaginationItem } from '@mui/material'
import { getFishes, getFishesByFilter } from '../actions/fishes' 

const Paginate = ({ filterQuery, page }) => {
    const { numberOfPages } = useSelector((state) => state.fishes)
    const dispatch = useDispatch()
  
     useEffect(() => {
      
       if(filterQuery === "All" || filterQuery === null){
          dispatch(getFishes(page))
         } else {
          dispatch(getFishesByFilter(filterQuery, page))
         }
     },[page])

  return (
    <Pagination 
        className="justify-around"
        count={numberOfPages}
        page={Number(page) || 1}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/fishes?filterQuery=${filterQuery}&page=${item.page}`} />
        )}
    />
  )
}

export default Paginate