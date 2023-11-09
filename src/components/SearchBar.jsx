import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/icons/search.png';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); 
  };

  return (
    <SearchBarContainer>
      <SearchIcon src={searchIcon} alt="Search Icon" />
      <SearchInput
        type="text"
        placeholder="Search burger, pizza, drink, or etc..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  background: #FFF;
  border: none;
  padding: 5px;
  padding-left: 1rem;
  width: 20rem;
  height: 3rem;
  margin: 0 auto; 
  border-radius: 0.75rem;
`;

const SearchIcon = styled.img`
  margin-right: 10px;
  width: 1.5rem;
  height: 1.5rem;
`;

const SearchInput = styled.input`
    flex: 1;
    border: none;
    background: transparent;
    font-size: 16px;
    outline: none;
    color: black;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.875rem;
    &::placeholder {
      color: #C4C4C4;
    }
`;
