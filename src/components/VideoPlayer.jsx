import React from 'react';

const VideoPlayer = ({ videoId }) => {
  return (
    <div>
      <iframe
        width="100%"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
