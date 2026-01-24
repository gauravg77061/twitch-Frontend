import React, { useState } from "react";
import {BASE_URL }from '../utils/constants';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";



const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[userName,setUserName] =useState("");
  const[error,setError]=useState("");
  const dispatch=useDispatch();
  const navigate =useNavigate();

  const handleSwitchForm = () => {
    setIsLoginForm((prev) => !prev);
  };

const handleSignup =async()=>{
  //console.log('clicked');
  try {
      const res=await axios.post(BASE_URL+'api/auth/register',
    {
      firstName,lastName,emailId:email,password,userName
    },

    {withCredentials:true}
  );
  //console.log(res);
      dispatch(addUser(res.data));

return navigate("/");
    
  } catch (error) {
    console.log("REGISTER ERROR:", error.response?.data);
  console.log("STATUS:", error.response?.status);
  setError(error.response?.data?.message || JSON.stringify(error.response?.data) || "Signup failed");
  }
}

  const handleLLogin= async ()=>{
    //console.log("hello world");
    try {
        const res= await axios.post(BASE_URL+'api/auth/login',
          {emailId:email,
            password
          },{withCredentials:true}
        );

        console.log(res?.data);
        dispatch(addUser(res.data));

return navigate("/");
        

    } catch (error) {
      setError(error?.response?.data || "something went wrong ");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-300 p-4">
      <div
        className="
          card
          w-96
          rounded-2xl
          border
          border-white/20
          bg-base-100
          shadow-[0_25px_70px_-20px_rgba(0,0,0,0.85)]
        "
        data-theme="dark"
      >
        <div className="card-body space-y-3">

          {/* LOGO */}
 {/* 🔥 ANIMATED LOGO */}
<div className="flex justify-center mb-4">
  <div className="relative">
    {/* Glow Ring */}
    <div className="absolute inset-0 rounded-xl bg-primary opacity-40 blur-lg animate-pulse ring-4 ring-purple-500/40"></div>

    {/* Main Logo */}
    <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center
                    shadow-xl animate-bounce ring-4 ring-purple-500/40">
      <span className="text-3xl font-extrabold text-white drop-shadow-lg ">
        T
      </span>
    </div>
  </div>
</div>



          {/* TITLE */}
          <h2 className="text-center text-3xl font-bold">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

          {/* FORM */}
          {isLoginForm ? (
            <fieldset className="rounded-xl border border-base-300 bg-base-200 p-4 space-y-3">

              <label className="label font-medium  text-white">Email</label>
              <input
                type="email"
                value={email}
                className="input w-full bg-base-200 text-white border border-white/40 focus:border-white outline-none transition"
                placeholder="Enter your email"
                onChange={(e) =>{
                    setEmail(e.target.value);
                   // console.log(e.target.value);
                }}
              />

              <label className="label font-medium  text-white">Password</label>
              <input
                type="password"
                value={password}
                className="input w-full bg-base-200 text-white border border-white/40 focus:border-white outline-none transition"
                placeholder="Password"
                onChange={(e)=>{
                    setPassword(e.target.value);
                    //console.log(e.target.value);
                }}
              />

            </fieldset>
          ) : (
            <fieldset className="rounded-xl border border-base-300 bg-base-200 p-4 space-y-3">

              <div className={`${isLoginForm ? "hidden" : "block"}`}>
                <label className="label font-medium  text-white">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  className="input w-full bg-base-200 text-white border border-white/40"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className={`${isLoginForm ? "hidden" : "block"}`}>
                <label className="label font-medium  text-white">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  className="input w-full bg-base-200 text-white border border-white/40"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <label className="label font-medium  text-white">User Name</label>
              <input
                type="text"
                value={userName}
                className="input w-full bg-base-200 text-white border border-white/40"
                placeholder="User Name"
                onChange={(e) =>{
                    setUserName(e.target.value);
                    //console.log(e.target.value);
                }}
              />

              <label className="label font-medium text-white">Email</label>
              <input
                type="email"
                value={email}
                className="input w-full bg-base-200 text-white border border-white/40"
                placeholder="Email"
                onChange={(e)=>{
                    setEmail(e.target.value);
                   // console.log(e.target.value);
                }}
              />

              <label className="label font-medium  text-white">Password</label>
              <input
                type="password"
                value={password}
                className="input w-full bg-base-200 text-white border border-white/40 focus:border-white outline-none transition"
                placeholder="Password"
                onChange={(e)=>{
                    setPassword(e.target.value);
                    //console.log(e.target.value);
                }}
              />

            </fieldset>
          )}

          {/* BUTTON */}
          <button className="btn btn-primary mt-4 w-full text-lg" onClick={isLoginForm ? (handleLLogin) : (handleSignup)}>
            {isLoginForm ? "Login" : "Sign Up"}
          </button>

          {/* TOGGLE */}
          <p
            className="cursor-pointer text-center text-sm text-primary hover:underline"
            onClick={handleSwitchForm}
          >
            {isLoginForm
              ? "New User? Signup here"
              : "Existing User? Login here"}
          </p>

        </div>
      </div>
    </div>
  );
};

export default AuthPage;
