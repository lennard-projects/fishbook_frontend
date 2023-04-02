import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ fish }) => {
  
  return (
    <Link to={`/info/${fish._id}`} className="flex w-full max-w-[250px] m-4 rounded-md p-8 bg-white hover:shadow-2xl shadow-xl">
      <button>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[16px] font-poppins font-semibold">{fish.name}</h2>
                <div className="border-[#787878] border-[1px] mt-2 rounded-md">
                  <img src={fish.image} alt={fish.name} className="w-[320px] h-[120px] rounded-md" />
                </div>
            </div>
      </button>
    </Link>
  )
}

export default Card