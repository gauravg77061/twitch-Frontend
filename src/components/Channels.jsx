import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setChannels } from '../utils/channelsSlice'

const Channels = () => {

    const dispatch=useDispatch();

        const channels =useSelector((store) => store.channels);

    const getChannels = async () =>{
         try {

            const res=await axios.get(BASE_URL+'api/channel',
                {withCredentials:true}
            );

           // console.log(res?.data);
           dispatch(setChannels(res?.data?.channels));
            
        } catch (error) {
            console.log("Getting error with fetching data",error);
            
        }
}

useEffect(()=>{
    getChannels();
},[])

  return (
    <div>
      You are in channel content 
    </div>
  )
}

export default Channels
