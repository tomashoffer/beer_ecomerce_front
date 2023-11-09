import React from "react";
import styled from 'styled-components'
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom"; 

function App() {

  return (
    <Container>
      <Routes> 
        <Route path="/:id" element={<ProductPage />} /> 
        <Route path="/" element={<HomePage />} /> 
      </Routes> 
    </Container>
  );
}

export default App;

const Container = styled.div`
background-color: #FAFAFA;
`;
