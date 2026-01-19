import React from 'react'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
     <Link to="/" className="flex items-center gap-3 group select-none">
      {/* Logo Image */}
      <div className="relative">
        {/* Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-purple-500/40 blur-md opacity-70 group-hover:opacity-100 transition" />

        <img
          src={logo}
          alt="Logo"
          className="relative h-12 w-12 md:h-14 md:w-14 rounded-2xl object-cover shadow-lg ring-2 ring-purple-500/30 group-hover:ring-purple-400/70 transition"
        />
      </div>

      {/* Brand Name */}
      <div className="leading-tight">
        <p className="text-lg md:text-xl font-extrabold text-white tracking-wide">
          Stream<span className="text-purple-400">Spark</span>
        </p>
        <p className="text-xs md:text-sm text-white/60 -mt-0.5">
          Live • Chat • Stream
        </p>
      </div>
    </Link>
  )
}

export default Logo
