import React, { useState } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import VideoCard from '../components/VideoCard.jsx';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 80%;
  max-width: 400px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const { data, error } = useSWR(
    query.trim() ? `https://harbour.dev.is/api/search?q=${query}` : null,
    fetcher
  );

  const handleResultClick = (videoId) => {
    navigate(`/videos/${videoId}`);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search for a video"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={() => setQuery(query)}>Search</Button>

      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

      <ResultsContainer>
        {data?.items?.length > 0 ? (
          data.items.map((video) => (
            <VideoCard
              key={video.id.videoId || video.id}
              video={video}
              onClick={() => handleResultClick(video.id.videoId || video.id)}
            />
          ))
        ) : (
          !error && query.trim() && <p>No videos found.</p>
        )}
      </ResultsContainer>
    </SearchContainer>
  );
}

export default Search;
