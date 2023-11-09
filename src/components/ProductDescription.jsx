import React, { useState } from 'react';
import styled from 'styled-components';

function ProductDescription({ product, price, stock }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = showFullDescription
    ? product.information
    : product.information.slice(0, 180);

  return (
    <ProductDescriptionContainer>
      <TitleContainer>
        <Brand>{product.brand}</Brand>
        <Price>${price}</Price>
      </TitleContainer>
      <OriginAndStock>Origin: {product.origin} | Stock: {stock}</OriginAndStock>
      <DesciptionContainer>
        <DescriptionTitle>Description</DescriptionTitle>
        <Description>
          {description}
          {product.information.length > 180 && !showFullDescription && '...'}
          {product.information.length > 180 && (
            <>
              <ReadMore onClick={() => setShowFullDescription(!showFullDescription)}>
                {showFullDescription ? ' Read less' : ' Read more'}
              </ReadMore>

            </>
          )}
        </Description>
      </DesciptionContainer>
    </ProductDescriptionContainer>
  );
}

export default ProductDescription;

const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
    @media (max-width: 768px) {
      width: 88%;
      margin-top: 1rem;
    }
  `;

const DesciptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Brand = styled.h2`
    color: #0F0D23;
    font-family: DM Sans;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 0;
`;

const Price = styled.h3`
    color: #FF9F24;
    font-family: DM Sans;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 0;
`;
const DescriptionTitle = styled.h3`
    color:  #323232;
    font-family: DM Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 0;
`;
const Description = styled.p`
    color: #969696;
    font-family: DM Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    margin-top:0.5rem;
`;
const ReadMore = styled.span`
    color: #FF9F24;
    font-family: DM Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    cursor: pointer;
`;

const OriginAndStock = styled.h4`
    color: #969696;
    font-family: DM Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 0;
    margin-bottom: 0;
`;

