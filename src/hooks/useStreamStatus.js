import axios from "axios";
import { Level } from "hls.js";
import React, { useEffect, useState } from "react";

const useStreamStatus = (streamKey)=>{
    const[isonline,setIsOnline]=useState(false);

    useEffect(()=>{
        if(!streamKey) return

        const checkStatus =async ()=>{
            try {
                
                const res=await axios.get("http://localhost:8000/api/streams");

                const liveStream=res.data.live || {};

                if(liveStream[streamKey]){
                    setIsOnline(true);
                }
                else{
                    setIsOnline(false);
                }

            } catch (error) {
                setIsOnline(false);
            }
        }
checkStatus();
const interval =setInterval(checkStatus,5000);
return()=> clearInterval(interval)

    },[streamKey]);
    return isonline;
}

export default useStreamStatus;