import React, { useState } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar'; 
import VideoCard from '../components/VideoCard.jsx';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const fetcher = (url) => {
  return fetch(url).then((res) => res.json());
};

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const { data, error, isLoading } = useSWR(
    query.trim() ? `https://harbour.dev.is/api/search?q=${query}` : null,
    fetcher
  );

  const handleResultClick = (videoId) => {
    navigate(`/videos/${videoId}`);
  };

  const handleSearch = (query) => {
    console.log('Search Query:', query);
    setQuery(query);
  };

  console.log('Data:', data);
  console.log('Error:', error);

  return (
    <SearchContainer>
      <SearchBar onSearch={handleSearch} />

      {error && <p style={{ color: 'red' }}>Something went wrong. Please try again later.</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ResultsContainer>
          {data?.items?.length > 0 ? (
            data.items.map((video) => (
              <VideoCard
                key={video.id.videoId}
                video={video}
                onClick={() => handleResultClick(video.id.videoId)}
              />
            ))
          ) : (
            <p>No videos found</p>
          )}
        </ResultsContainer>
      )}
    </SearchContainer>
  );
}

export default Search;
