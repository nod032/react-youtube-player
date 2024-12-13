import React from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const VideoTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
`;

const VideoPlayer = ({ video }) => {
  return (
    <PlayerContainer>
      <VideoTitle>{video.title}</VideoTitle>
      <video controls width="100%">
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
    </PlayerContainer>
  );
};

export default VideoPlayer;
