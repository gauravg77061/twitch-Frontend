import React from 'react'
import { useState } from 'react';


const ChannelDescription = ({
    title,
    userName,
    description,
    isOnline,
    avatarUrl,
}) => {
     const [imgError, setImgError] = useState(false);

  const fallbackAvatar =
    "https://ui-avatars.com/api/?name=" +
    title +
    "&background=7c3aed&color=fff&bold=true";

  return (
    
        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      
      {/* TOP */}
      <div className="flex items-start justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <img
            src={!imgError && avatarUrl ? avatarUrl : fallbackAvatar}
            onError={() => setImgError(true)}
            alt={title}
            className="w-14 h-14 rounded-full object-cover border"
          />

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {title}
            </h2>

            <p className="text-sm text-gray-500">
              @{userName}
            </p>
          </div>
        </div>

        {/* STATUS */}
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${
            isOnline
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isOnline ? "LIVE" : "OFFLINE"}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        {description || "No channel description available."}
      </p>
    </div>
  )
}

export default ChannelDescription
