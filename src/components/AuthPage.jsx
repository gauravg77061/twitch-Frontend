import React, { useState } from "react";

const AuthPage = () => {
// 


  const handleSwitchForm = () => {
    setIsLoginForm((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gradient-to-br from-base-300 to-base-200 p-4">
      <div
        className="
  card
  bg-base-100
  w-96
  rounded-2xl
  border
  border-white/20
  shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] 
"
        data-theme="dark"
      >
        <div className="card-body">
          {/* 🔥 LOGO */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-xl bg-primary opacity-40 blur-lg animate-pulse"></div>

              {/* Main Logo */}
              <div
                className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center
                    shadow-xl animate-bounce"
              >
                <span className="text-3xl font-extrabold text-white drop-shadow-lg">
                  T
                </span>
              </div>
            </div>
          </div>

          {/* TITLE */}
          <h2 className="card-title justify-center text-3xl font-bold mb-6">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

          {/* FORM */}
          {isLoginForm ? (
            <fieldset className="fieldset bg-base-200 border border-base-300 rounded-xl p-4 space-y-2">
              <label className="label font-medium">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
              <label className="label font-medium">Password</label>

              <input
                type="password"
                className="input w-full bg-base-200 text-white border
    border-white/40 focus:border-whitefocus:ring-1 focus:ring-white/40 outline-none transition"
                placeholder="Password"
              />
            </fieldset>
          ) : (
            <fieldset className="fieldset bg-base-200 border border-base-300 rounded-xl p-4 space-y-2">
              <label className="label font-medium">First Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="First Name"
              />

              <label className="label font-medium">Last Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Last Name"
              />

              <label className="label font-medium">User Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="User Name"
              />

              <label className="label font-medium">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
              />
              <label className="label font-medium">Password</label>
              <input
                type="password"
                className="
    input
    w-full
    bg-base-200
    text-white
    border
border-white/40 
    focus:border-white
    focus:ring-1
    focus:ring-white/40
    outline-none
    transition
  "
                placeholder="Password"
              />
            </fieldset>
          )}

          {/* BUTTON */}
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary w-full text-lg">
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>

          {/* TOGGLE TEXT */}
          <p
            className="m-auto cursor-pointer py-3 text-sm text-primary hover:underline"
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
