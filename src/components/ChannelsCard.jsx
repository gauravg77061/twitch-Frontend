

import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStreamStatus from "../hooks/useStreamStatus";

const ChannelsCard = ({ channel }) => {
  const [imgError, setImgError] = useState(false);

  const fallbackAvatar =
    "https://ui-avatars.com/api/?name=" +
    channel?.title +
    "&background=7c3aed&color=fff&bold=true";

  // ✅ REAL-TIME STREAM STATUS
  const isLive = useStreamStatus(channel?.streamKey);

  return (
    <div
      className="
        bg-white border border-gray-200
        rounded-2xl p-4
        shadow-sm hover:shadow-lg
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* TOP: Avatar + Title */}
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <div className="relative w-12 h-12 shrink-0">
          <img
            src={
              !imgError && channel?.avatarUrl
                ? channel.avatarUrl
                : fallbackAvatar
            }
            alt={channel?.title}
            onError={() => setImgError(true)}
            className="w-full h-full rounded-full object-cover border"
          />

          {/* 🔴 Live / Offline dot */}
          <span
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
              isLive ? "bg-red-500" : "bg-gray-400"
            }`}
          ></span>
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900 truncate">
            {channel?.title || "Untitled Channel"}
          </h2>
          <p className="text-sm text-gray-500">
            @{channel?.userName || "unknown"}
          </p>
        </div>
      </div>

      {/* BOTTOM: Status */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isLive
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {isLive ? "🔴 LIVE" : "OFFLINE"}
        </span>

        <Link
          to={`/channels/${channel?.id}`}
          className="text-xs text-purple-600 font-semibold hover:underline"
        >
          View Channel →
        </Link>
      </div>
    </div>
  );
};

export default ChannelsCard;

