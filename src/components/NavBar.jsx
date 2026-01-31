import React from "react";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const NavButton = ({ text, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      type="button"
      className="
        inline-flex items-center justify-center
        rounded-xl px-4 py-2 text-sm font-semibold
        text-white/70 hover:text-white
        hover:bg-white/10
        transition-all duration-200
        active:scale-95
      "
    >
      {text}
    </button>
  );
};

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hangleLogout = async () => {
    try {
      await axios.post(BASE_URL + "api/auth/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  const handleBrowse=()=>{
   // console.log("browse clicked ")
    navigate('/channels')
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-16 bg-[#0f0f14]/95 backdrop-blur border-b border-white/10 shadow-lg">
      <div className="h-full w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        {/* Right */}
        <nav className="flex items-center gap-3">
          
          {/* Browse */}
          <div className="hidden sm:flex items-center">
            <NavButton text="Browse" clickHandler={handleBrowse} />
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-3 ml-3 pl-3 border-l border-white/10">
            {!user ? (
              <Link
                to="/login"
                className="
                  bg-purple-600 hover:bg-purple-700
                  text-white text-sm font-semibold
                  px-5 py-2 rounded-lg
                  shadow-md hover:shadow-purple-500/30
                  transition-all duration-200
                  active:scale-95
                "
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  to="/settings"
                  className="
                    text-sm font-semibold text-white/80
                    hover:text-white hover:bg-white/10
                    px-4 py-2 rounded-lg
                    transition-all duration-200
                  "
                >
                  My Account
                </Link>

                <button
                  onClick={hangleLogout}
                  className="
                    text-sm font-semibold text-red-400
                    hover:text-white hover:bg-red-500/20
                    px-4 py-2 rounded-lg
                    border border-red-500/30
                    transition-all duration-200
                    active:scale-95
                  "
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
