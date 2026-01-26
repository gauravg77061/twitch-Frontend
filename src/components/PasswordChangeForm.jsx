import React, { useState } from 'react'
import {BASE_URL} from '../utils/constants'
import axios from 'axios';

const PasswordChangeForm = () => {

    const[password,setPassword]=useState("");
    const[newPassword,setNewPassword]=useState("");

    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");
    const[showToast,setShowToast]=useState(false);

    const isFormValid= password.trim().length > 0 &&
    newPassword.trim().length > 6;

    const handleSubmit =async(e)=>{
        e.preventDefault();
        setError("");

        if(!isFormValid){
            setError("Please enter valid passwords")
        }

        setLoading(true);
        try {
            const res=await axios.patch(BASE_URL+'api/settings/password',{
              password,
              newPassword,
              
            },{withCredentials:true});

            console.log("Password change respone",res.data);

            setShowToast(true);
            setPassword("");
            setNewPassword("");

            setTimeout(()=>setShowToast(false),3000)

        } catch (error) {
            console.error("Password updated error",error);
            setError(error.response?.data || "Failed to change password")
        } finally{
          setLoading(false);
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}
    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5"
    >

<h2 className='text-lg font-semibold text-gray-900'>
    Change Password
</h2>

<fieldset>
    <label className='block text-sm font-medium text-gray-600 mb-1'>
        Current Password
    </label>

<input type="password"
value={password}
onChange={(e)=> setPassword(e.target.value)}
className='w-full input input-bordered bg-white'
 />
 </fieldset>

 <fieldset>
    <label className='block text-sm font-medium text-gray-600 mb-1'>
        New Password
    </label>

<input type="password"
value={newPassword}
onChange={(e)=> setNewPassword(e.target.value)}
className='w-full input input-bordered bg-white'
 />

<p className='text-x5 text-gray-400 mt-1'>
    Must be atleast 6 characters
</p>

 </fieldset>

 {
    error && (
        <p className='text-error text-sm font-medium'>{error}</p>
    )
 }

 <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="
              btn btn-primary px-6
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </div>

    </form>

 {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success shadow-lg rounded-md">
            <span>✅ Password updated successfully</span>
          </div>
        </div>
      )}

    </>
  )
}

export default PasswordChangeForm
