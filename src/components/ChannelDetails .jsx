import React from 'react'
import { useParams } from 'react-router-dom';

const ChannelDetails  = () => {

    const {id}=useParams();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h1 className="text-xl font-bold">
        Channel ID: {id}
      </h1>
    </div>
  )
}

export default ChannelDetails 
