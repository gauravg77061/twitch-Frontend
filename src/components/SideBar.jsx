import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// const followedChannels = [
//   { id: 1, userName: "Gaurav", isOnline: true },
//   { id: 2, userName: "Rahul", isOnline: false },
// ];

const SideBar = () => {

  const channels =useSelector((store) => store.channels);

  return (
       <aside className="w-70 shrink-0 h-[calc(100vh-64px)] bg-white border-r border-gray-200 px-4 py-5 overflow-y-auto">
      
      {/* Top */}
      <div className="mb-5">
        <p className="text-sm font-semibold text-gray-900">For you</p>
        <p className="mt-1 text-[11px] font-bold text-gray-500 tracking-widest">
          FOLLOWED CHANNELS
        </p>
      </div>

      {/* Channels */}
      <div className="space-y-1">
        {channels && channels.length > 0 ? (
          channels.map((channel) => (
            <Link
              key={channel.id}
              to={`/channels/${channel.id}`}
              className="
                group flex items-center justify-between
                rounded-xl px-3 py-2
                cursor-pointer transition
                hover:bg-gray-100
              "
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                {/* avatar (safe dummy initial) */}
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                  {channel.title?.[0] || "C"}
                </div>

                <p className="text-sm font-semibold text-gray-900 truncate">
                  {channel.title}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    channel.isOnline ? "bg-green-500" : "bg-red-500"
                  }`}
                />

                <span
                  className={`text-xs font-bold ${
                    channel.isOnline ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {channel.isOnline ? "Online" : "Offline"}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-sm text-gray-400">
            No followed channels
          </p>
        )}
      </div>
    </aside>
  );
};

export default SideBar;
