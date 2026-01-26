import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setChannels } from '../utils/channelsSlice'
import ChannelsCard from './ChannelsCard'
const Channels = () => {

    const dispatch=useDispatch();

        const channels =useSelector((store) => store.channels);

    const getChannels = async () =>{

        if(channels && channels.length > 0){
            return ;
        }

         try {

            const res=await axios.get(BASE_URL+'api/channel',
                {withCredentials:true}
            );

            console.log(res?.data);
           dispatch(setChannels(res?.data?.channels));
            
        } catch (error) {
            console.log("Getting error with fetching data",error);
            
        }
}

useEffect(()=>{
    getChannels();
},[])

  return (
    <div >
      {channels && channels.length >0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {channels.map((channel) =>(
                <ChannelsCard key={channel.id} channel={channel}/>
            ))}

        </div>
      ):(
        <p className="text-gray-400 text-lg">No channels available </p>
      )}
    </div>
  )
}

export default Channels
