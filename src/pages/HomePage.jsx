import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllProducts } from '../service/api';
import SearchBar from '../components/SearchBar';
import DrinkCategories from '../components/DrinkCategories';
import Footer from '../components/Footer';
import Populer from '../components/Populer';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/Header';
import BottomNav from '../components/BottomNav';
import useResponsive from '../hooks/useResponsive';

function HomePage() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const responsive = useResponsive(768);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error('Error getting products:', error);
      });
  }, []);

  const handleSearch = (term) => {
    const filtered = allProducts.filter((product) =>
      product.brand.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <ContainerHomePage>
      <ResponsiveAppBar />
      <ContainerComponents>
        <WelcomeContainer>
          <TitleUser>Hi Mr. Michael,</TitleUser>
          <WelcomeTitle>Welcome Back!</WelcomeTitle>
        </WelcomeContainer>
        <SearchBar onSearch={handleSearch} />
        <DrinkCategories />
        <Populer products={filteredProducts} />
        {responsive && <BottomNav />}
        {!responsive &&<Footer/>}
      </ContainerComponents>
      
    </ContainerHomePage>
  );
}

export default HomePage;

const ContainerComponents = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;

`;
const ContainerHomePage = styled.div`
  width: 95vw;
  background-color: #FAFAFA;
`;
const WelcomeContainer = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    margin-left: 0.3rem;
    text-align: left;
  }
`;
const TitleUser = styled.h3`
color: #646464;
font-family: DM Sans;
font-size: 2rem;
margin-bottom: 0;
@media (max-width: 768px) {
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 0;
}

`;
const WelcomeTitle = styled.h2`
color:  #323232;
font-family: DM Sans;
font-size: 4rem;
margin-top: 0;
@media (max-width: 768px) {
  font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 5px;
}
`;