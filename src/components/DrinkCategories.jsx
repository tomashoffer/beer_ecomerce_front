import React, { useState } from 'react';
import styled from 'styled-components';
import BeerIcon from '../assets/icons/Beer.png'; 
import WineIcon from '../assets/icons/Wine-glass.png'; 


function DrinkCategories() {
  const [activeButton, setActiveButton] = useState('Beers');

  const handleButtonClick = (category) => {
    setActiveButton(category);
  };

  return (
    <DrinkCategoriesContainer>
        <TitleContainer>
            <Title>Drink Categories</Title>
            <Subtitle>See All</Subtitle>
        </TitleContainer>
        <ButtonsContainer>

            <Button
                active={activeButton === 'All'}
                btn={'All'}
                onClick={() => handleButtonClick('All')}
            >
                All
            </Button>
            <Button
                active={activeButton === 'Beers'}
                btn={'Beers'}
                onClick={() => handleButtonClick('Beers')}
            >
                <Icon src={BeerIcon} alt="Beer Icon" />
                Beers
            </Button>
            <Button
                active={activeButton === 'Wine'}
                btn={'Wine'}
                onClick={() => handleButtonClick('Wine')}
            >
                <Icon src={WineIcon} alt="Wine Icon" />
                Wine
            </Button>
        </ButtonsContainer>
    </DrinkCategoriesContainer>
  );
}

export default DrinkCategories;

const DrinkCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

`;
const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0rem;
  }
`;

const Title = styled.h2`
    color: #323232;
    font-family: DM Sans;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 768px) {
      color: #323232;
      font-size: 1.125rem;
    }
`;

const Subtitle = styled.h3`
    color: #646464;
    font-family: DM Sans;
    font-size:1rem;
    font-style: normal;
    font-weight: 400;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 40% 30%; 
  width: 60%;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 20% 40% 30%; 
    width: 100%;
    gap: 1rem;
  }
`;

const Button = styled.button`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  font-family: DM Sans;
  align-items: center;
  background: ${(props) => (props.active ? '#FF9F24' : '#FFF')};
  color: ${(props) => (props.active ? '#FFF' : '#323232')};
  border-radius: 0.75rem;
  padding:${(props) => (props.btn === "Beers" ? '1rem 1.5rem 1rem 0.2rem' : '1rem 1rem')};
  border: none;
  font-weight: 500;
  cursor: pointer;
`;


const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
