import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  max-width: 800px;
  height: 450px;
  border: none;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #555;
`;

function VideoDetails() {
  const { videoId } = useParams();
  console.log("Video ID from URL:", videoId); 
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(`https://harbour.dev.is/api/videos/${videoId}`);
        if (!response.ok) throw new Error('Failed to fetch video details');
        const data = await response.json();

        if (!data) {
          setError('Video not found');
          return;
        }

        setVideo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <VideoContainer>
      <VideoFrame
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Title>{video.snippet.title}</Title>
      <Description>{video.snippet.description}</Description>
    </VideoContainer>
  );
}

export default VideoDetails;
