import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import IconBag from '../assets/icons/icon-bag.png';

function AddToCart() {
  const handleAddToCartClick = () => {
    Swal.fire({
      title: 'Good job!',
      text: 'Your beer has been added to your cart!',
      icon: 'success',
      customClass: {
        title: 'sweetalert-title',
        content: 'sweetalert-content',
      },
    });
  };


  return (
    <AddToCartContainer>
      <IconButton>
        <Icon src={IconBag} alt="Bag Icon" />
      </IconButton>
      <AddToCartButton onClick={handleAddToCartClick}>
        Add to Cart
      </AddToCartButton>
    </AddToCartContainer>
  );
}
export default AddToCart;

const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 40%;
  margin: 0 auto;
  margin-top: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    width: 88%;
    padding-bottom: 2rem;
  }
`;


const IconButton = styled.button`
    background-color: #FFF;
    border-radius: 0.75rem;
    border: 0.8px solid var(--Primary-Color, #FF9F24);
    padding: .7rem;
    margin-right: 8px;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
`;

const AddToCartButton = styled.button`
  background-color: #FF9F24;
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-family: DM Sans;
  padding: 1rem .1rem;
  cursor: pointer;
  flex: 1;
`;



