import React from 'react'
import { useParams } from 'react-router-dom';
import ChannelDescription from './ChannelDescription';
import Chat from './Chat';
import { useSelector } from 'react-redux';
const ChannelDetails  = () => {

    const {id}=useParams();

    const channels =useSelector((store) => store.channels);
//console.log(channels);
    //finding current channel
    const channel=channels.find((ch) => ch.id === id);

    if (!channel) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] text-gray-400">
      Loading channel...
    </div>
  );
}

  return (
        <div className="flex gap-4 min-h-[calc(100vh-64px)]">

      {/* LEFT: Channel Section */}
      <div className="flex-1 flex flex-col gap-4">

        {/* Video / Offline Placeholder */}
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden flex items-center justify-center">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-lg font-semibold">
              Channel is offline
            </span>
            <span className="text-sm">
              Stream will start soon
            </span>
          </div>

          {/*
            🔴 Future:
            Video player will come here
          */}
        </div>

        {/* Channel Description */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <ChannelDescription
          
          channelId={channel.id}
          title={channel.title}
          userName={channel.userName}
          description ={channel.description}
          isOnline={channel.isOnline}
          avatarUrl={channel.avatarUrl}

          />
        </div>
      </div>

      {/* RIGHT: Chat Section */}
      <div className="w-[340px] bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
        <Chat />
      </div>

    </div>
  )
}

export default ChannelDetails 
