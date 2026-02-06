import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const LiveStreamPlayer = ({streamKey}) => {
  const videoRef = useRef(null);
console.log("StreamUrl",streamKey);
  useEffect(() => {
    const video = videoRef.current;
    const streamUrl =
      `http://localhost:8000/live/${streamKey}/index.m3u8`;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      muted
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default LiveStreamPlayer;
