import React from 'react';
import styled from 'styled-components';

function Size({ skus, activeSku, handleActiveSkuChange }) {

  return (
    <SizeContainer>
      <SizeContent>
        <SizeTitle>Size</SizeTitle>
        <SizeButtons length={skus.length}>
          {skus.map((sku) => (
            <SizeButton
              key={sku.code}
              active={sku === activeSku}
              onClick={() => handleActiveSkuChange(sku)}
            >
              {sku.name}
            </SizeButton>
          ))}
        </SizeButtons>
      </SizeContent>
    </SizeContainer>
  );
}

export default Size;

const SizeContainer = styled.div`
display: flex;
flex-direction: column;
width: 60%;
margin: 0 auto;
  @media (max-width: 768px) {
    width: 88%;
  }
`;
const SizeContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SizeTitle = styled.h3`
  color: #323232;
  font-family: DM Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 0;
  margin-bottom: 0;
`;

const SizeButtons = styled.div`
  display: grid;
  grid-template-columns:${(props) => (`repeat(${props.length}, 1fr)` )}; 
  gap: 10px;
  margin-top: 1rem;
`;

const SizeButton = styled.button`
  background-color: #FFF;
  border-radius: 0.96875rem;
  border: 1px solid ${({ active }) => (active ? '#FF9F24' : '#969696')};
  color: ${({ active }) => (active ? '#FF9F24' : '#969696')};
  font-family: DM Sans;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 8px 16px; 
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

