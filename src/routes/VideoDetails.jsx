import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VideoDetails = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(`https://harbour.dev.is/api/videos/${videoId}`);
        if (!response.ok) throw new Error('Failed to fetch video details');
        const data = await response.json();
        setVideo(data);
      } catch (error) {
        setError(error.message);
      }
    };
    
    fetchVideoDetails();
  }, [videoId]);

  if (error) return <div>Error: {error}</div>;
  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <h1>{video.title}</h1>
      <video width="100%" controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoDetails;
