import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BASE_URL } from '../utils/constants';

const SettingsForm = ({channel}) => {
//console.log("setting form mounted with :", channel);

const dispatch=useDispatch();

const[title,setTitle]=useState("");
const[description,setDescription]=useState("");
const[userName,setUserName]=useState("");
const[avatarUrl,setAvatarUrl]=useState("");

const[loading,setLoading]=useState(false);
const[error,setError]=useState("");
const[showToast,setShowToast]=useState(false);



useEffect(() => {
  if (channel) {
    setTitle(channel.title || "");
    setDescription(channel.description || "");
    setUserName(channel.userName || "");
    setAvatarUrl(channel.avatarUrl || "");
  }
}, [channel]);

const handleSubmit =async(e)=>{
  e.preventDefault();
  setError("");
  setLoading(true);
  // console.log("Submiting channel details",{
  //   title,
  //   description,
  //   userName,
  //   avatarUrl,
  // });
    try {
        const res=await axios.put(BASE_URL+'api/settings/channel',{
            title,
            description,
            userName,
            avatarUrl,
        },{withCredentials:true});
      //  console.log("API response",res?.data);
        setShowToast(true);
        setTimeout(()=>setShowToast(false),3000);
    } catch (error) {

        console.error(" API error:", error.response?.data);
  console.error(" Status:", error.response?.status);
  setError(error.response?.data || "Something went wrong");
        
    } finally{
      setLoading(false);
    }

}

  return (
   <>
   <form
    onSubmit={handleSubmit}
   className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5"
   >

    <h2 className="text-lg font-semibold text-gray-900">
        Channel Information
    </h2>

    <fieldset>
<label className="block text-sm font-medium text-gray-600 mb-1">
            Channel Title
          </label>
          <input type="text"
          value={title}
          onChange={(e) =>{
          //  console.log("Title changed",e.target.value);
            setTitle(e.target.value);
          }}
          className='w-full input input-bordered bg-white'
          />
    </fieldset>

        
     <fieldset>
<label className="block text-sm font-medium text-gray-600 mb-1">
            Username 
          </label>
          <input type="text"
          value={userName}
          onChange={(e) =>{
            //console.log("Title changed",e.target.value);
            setUserName(e.target.value);
          }}
          className='w-full input input-bordered bg-white'
          />
    </fieldset>

        <fieldset>
<label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <input type="text"
         value={description}
          
          onChange={(e) =>{
           // console.log("Title changed",e.target.value);
            setDescription(e.target.value);
          }}
          className='w-full input input-bordered bg-white'
          />
    </fieldset>
 <fieldset>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Avatar URL
          </label>
          <input
            value={avatarUrl}
            onChange={(e) => {
             // console.log("✏️ Avatar URL changed:", e.target.value);
              setAvatarUrl(e.target.value);
            }}
            className="w-full input input-bordered bg-white"
          />
        </fieldset>

{error && (
          <p className="text-error text-sm font-medium">
            {error}
          </p>
        )}

               <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="
              btn btn-primary px-6
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>

   </form>

{showToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success shadow-lg rounded-md">
            <span>✅ Channel settings updated successfully.</span>
          </div>
        </div>
      )}

   </>
  )
}

export default SettingsForm
