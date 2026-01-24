import React from "react";
import Logo from "./Logo";

const NavButton = ({ text, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      type="button"
      className="
        inline-flex items-center justify-center
        rounded-lg px-4 py-2 text-sm font-semibold
        text-white/80 hover:text-white
        hover:bg-white/10
        transition active:scale-[0.98]
      "
    >
      {text}
    </button>
  );
};

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-screen h-16 bg-[#0f0f14] border-b border-white/10">
      <div className="h-full w-full px-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        {/* Right */}
        <nav className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <NavButton text="Browse" clickHandler={() => {}} />
            <NavButton text="Login" clickHandler={() => {}} />
          </div>

          <div className="hidden md:flex items-center gap-2 ml-3 pl-3 border-l border-white/10">
            <NavButton text="My Account" clickHandler={() => {}} />
            <NavButton text="Logout" clickHandler={() => {}} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
