import React from "react";

const followedChannels = [
  { id: 1, userName: "Gaurav", isOnline: true },
  { id: 2, userName: "Rahul", isOnline: false },
];

const SideBar = () => {
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
        {followedChannels.map((channel) => (
          <div
            key={channel.id}
            className="
              group flex items-center justify-between
              rounded-xl px-3 py-2
              cursor-pointer transition
              hover:bg-gray-100
            "
          >
            <div className="flex items-center gap-3">
              {/* avatar placeholder */}
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                {channel.userName[0]}
              </div>

              <p className="text-sm font-semibold text-gray-900">
                {channel.userName}
              </p>
            </div>

            {/* status */}
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
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
