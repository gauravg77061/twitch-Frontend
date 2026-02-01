import React from 'react'
import { useParams } from 'react-router-dom';
import ChannelDescription from './ChannelDescription';
import Chat from './Chat';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import addFollowedChannel from '../utils/userSlice'
import axios from 'axios'; 
const ChannelDetails  = () => {

    const {id}=useParams();

    const channels =useSelector((store) => store.channels);
    const user=useSelector((store) => store.user);
    const dispatch=useDispatch();
//console.log(channels);
    //finding current channel
    const channel=channels.find((ch) => ch.id === id);

    const isFollowing=user?.followedChannels.includes(channel?.id);

    //console.log(channel?.id);

 const handleFollow = async () => {

  if(!channel?.id) return;

  try {
    console.log("Following channelId:", channel.id);

    const res = await axios.post(
      `${BASE_URL}api/channel/follow/${channel.id}`,
      {},
      { withCredentials: true }
    );

    console.log("Follow success", res.data);
    dispatch(addFollowedChannel(channel.id));
  } catch (error) {
    console.log("Follow Failed", error.response?.data);
  }
};


    if (!channel) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] text-gray-400">
      Loading channel...
    </div>
  );
}

  return (
    <div>
          <div className="flex gap-4 min-h-[calc(100vh-64px)]">
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Video Placeholder */}
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden flex items-center justify-center">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-lg font-semibold">Channel is offline</span>
            <span className="text-sm">Stream will start soon</span>
          </div>
        </div>

        {/* Channel Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {channel.title}
              </h2>
              <p className="text-sm text-gray-500">@{channel.userName}</p>
            </div>

            {/* Follow Button */}
            {user && (
              <button
                onClick={handleFollow}
                disabled={isFollowing}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                  isFollowing
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            )}
          </div>

          <ChannelDescription
            channelId={channel.id}
            title={channel.title}
            userName={channel.userName}
            description={channel.description}
            isOnline={channel.isOnline}
            avatarUrl={channel.avatarUrl}
          />
        </div>
      </div>

      {/* RIGHT SIDE CHAT */}
      <div className="w-85 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
        <Chat />
      </div>
    </div>
    </div>
  )
}

export default ChannelDetails 
