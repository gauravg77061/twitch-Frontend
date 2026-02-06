import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const BasePage = () => {

  const dispatch=useDispatch();
const navigate=useNavigate();
const userData=useSelector((store) =>store.user)

//console.log("This is the userData from the store",userData);

  const fetchUser=async()=>{
    if(userData) return ;

    try {
      const res=await axios.get(BASE_URL+'api/profile/view',{withCredentials:true,});
      //console.log("this is the res",res.data);

      dispatch(addUser(res?.data));

    } catch (error) {

      if(error.status === 401){
        navigate('/login');
      }
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchUser();
  },[userData,dispatch])

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

export default BasePage;
