import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getImageName } from '../service/helpers'

function ProductCard({ product, position }) {
  const { id, brand, price, image } = product;

  const img = getImageName(image)

  return (
    <CardContainer position={position}>
       <StyledLink to={`/${id}-${brand}`}>
          <BrandLabel>{brand}</BrandLabel>
          <ProductImage src={img} alt={brand} />
       </StyledLink>
      <CardContainerTwo>
        <PriceLabel>${price}</PriceLabel>
        <AddButton>+</AddButton>
      </CardContainerTwo>
    </CardContainer>
  );
}

export default ProductCard;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 1rem;
  display: flex;
  padding-top: 0.2rem;
  padding-bottom: 0.5rem;
  border-radius: ${(props) => (props.position % 2 === 0 ? '2rem 0.75rem 0.75rem 0.75rem' : '0.75rem 2rem 0.75rem 0.75rem')};
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 9.5rem;
  height: 12.1875rem;
  flex-shrink: 0;
  box-shadow: 0 10px 20px rgba(15, 13, 35, 0.1);
`;
const CardContainerTwo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ProductImage = styled.img`
  width: auto;
  height: 7.625rem;
  max-width: 100%;
  object-fit: contain;
  border-radius: 1rem;
`;

const BrandLabel = styled.p`
  color: #323232;
  font-family: DM Sans;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
  margin-left: 1.2rem; 
  margin-top: 0.7rem; 
`;

const PriceLabel = styled.p`
  font-weight: 700;
  text-align: left; 
  color: #323232;
  font-family: DM Sans;
  font-size: 1rem;
  margin-bottom: 0.5rem; 
  display: flex;
  position: absolute;
  bottom: 0;
  left: 1rem;
  margin: 5px;
`;

const AddButton = styled.button`
  background: #FF9F24;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem 0rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
`;