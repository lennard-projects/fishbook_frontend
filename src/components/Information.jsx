import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Paper, CircularProgress } from '@mui/material'
import { getFish } from '../actions/fishes';

const Information = () => {
  const { fish, isLoading } = useSelector((state) => state.fishes)
  const dispatch = useDispatch()
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(getFish(id))
  },[id]);

  if(!fish) return null

  if(isLoading){
    return (
      <Paper elevation={6}>
        <CircularProgress size="7em" />
      </Paper>
    )
  }
  return (
    <div className="bg-[#f7f8fc] w-full overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="w-full xl:max-w-[1280px] flex items-center justify-center m-6 p-8">
          <div className="flex flex-col items-center justify-center w-[600px] font-poppins border-[1px] border-black p-6 main-card shadow-2xl rounded-md">
            <h2 className="text-[24px] font-bold my-2">{fish.type} Fish</h2>
          
            <div className="p-4 bg-[#787878] rounded-md my-2 shadow-md">
              <img src={fish.image} alt={fish.name} className="w-[400px] h-[300px] rounded-md" />
            </div>

            <div className="flex flex-col items-start mt-4">
              <h2 className="text-[16px] font-semibold my-2">Name: <span className="font-normal ml-2">{fish.name}</span></h2>
              <h2 className="text-[16px] font-semibold my-2">Scientific Name: <span className="font-normal ml-2">{fish.scientificName}</span></h2>
              <h2 className="text-[16px] font-semibold my-2">Max Length: <span className="font-normal ml-2">{fish.maxLength}</span></h2>
              <h2 className="text-[16px] font-semibold my-2">Family: <span className="font-normal ml-2">{fish.family}</span></h2>
              <h2 className="text-[16px] font-semibold my-2">Remark: <span className="font-normal ml-2">{fish.remark}</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information