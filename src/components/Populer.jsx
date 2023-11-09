import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

function Populer({ products }) {
  return (
    <PopulerContainer>
      <TitleContainer>
        <Title>Populer</Title>
        <Subtitle>See All</Subtitle>
      </TitleContainer>
      <ProductsGrid>
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} position={i+1} />
        ))}
      </ProductsGrid>
    </PopulerContainer>
  );
}

export default Populer;

const PopulerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 5rem;
  align-items: center;
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1rem;

  @media (min-width: 1000px) {
    margin-top: 3rem;
    grid-template-columns: repeat(4, 1fr); 
  }
  @media (min-width: 1300px) {
    margin-top: 0;
    grid-template-columns: repeat(4, 1fr); 
  }
`;