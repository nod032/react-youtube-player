import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  text-align: center;
`;

const VideoCard = ({ video, onClick }) => {
  const { title, description, thumbnailUrl } = video;
  
  return (
    <CardContainer onClick={onClick}>
      <VideoThumbnail src={thumbnailUrl} alt={title} />
      <Title>{title}</Title>
      <p>{description}</p>
    </CardContainer>
  );
};

export default VideoCard;
