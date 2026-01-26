import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import StreamKey from './StreamKey';
import SettingsForm from './SettingsForm';
import PasswordChangeForm from './PasswordChangeForm';

const Settings = () => {

    const channels=useSelector((store) => store.channels);

    const user=useSelector((store) => store.user);

    console.log(user);

    const myChannel = channels?.find((ch) => ch.id ===user?.channel);

    console.log("Derived my channel",myChannel);

    // useEffect(()=>{
    //   console.log("my channel derived",myChannel);
    // },[myChannel])

     if (!myChannel || !myChannel.streamKey) {
    return (
      <div className="text-gray-400 text-center mt-10">
        Loading channel...
      </div>
    );
  }

  return (
     <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Channel Settings
      </h1>

      <SettingsForm  channel={myChannel}/>

      <PasswordChangeForm className='m-4' />

      <StreamKey streamKey={myChannel.streamKey} />
    </div>
  )
}

export default Settings
