import React from "react";
import Logo from "./Logo";

const NavButton = ({ text, clickHandler }) => {
  return (
    <span
      className="
        inline-flex items-center justify-center
        rounded-xl px-4 py-2 text-sm font-semibold
        text-white/80 hover:text-white
        hover:bg-white/10
        transition active:scale-[0.98]
        cursor-pointer select-none
      "
      onClick={clickHandler}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") clickHandler?.();
      }}
    >
      {text}
    </span>
  );
};

const NavBar = () => {
  return (
    <div
      className="
        sticky top-0 z-50 w-full
        border-b border-white/10
        bg-[#0f0f14]/70 backdrop-blur-xl
      "
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <NavButton text="Browse" clickHandler={() => {}} />
            <NavButton text="Login" clickHandler={() => {}} />
          </div>


          <div className="hidden md:flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
            <NavButton text="My Account" clickHandler={() => {}} />
            <NavButton text="Logout" clickHandler={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
