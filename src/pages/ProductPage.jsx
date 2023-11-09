import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getProduct } from '../service/api';
import { getProductStockAndPrice } from '../service/api';
import DetailNavbar from '../components/DetailNavbar';
import ProductDescription from '../components/ProductDescription';
import AddToCart from '../components/AddToCart';
import Size from '../components/Size';
import { getImageName } from '../service/helpers';


function ProductPage() {
  const { id } = useParams();
  const parts = id.split("-");
  const prodId = parts[0];
  const [product, setProduct] = useState(null);
  const [productImg, setProductImg] = useState('');
  const [activeSku, setActiveSku] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productStock, setProductStock] = useState(null);

  useEffect(() => {
    getProduct(prodId)
      .then((data) => {
        setProduct(data);
        const img = getImageName(data.image);
        setProductImg(img);
        setActiveSku(data.skus[0]);
      })
      .catch((error) => {
        console.error('Error when obtaining the product:', error);
      });
  }, [id, prodId]);


  useEffect(() => {
    if (activeSku) {
      getProductStockAndPrice(activeSku.code)
        .then((stockAndPrice) => {
          setProductPrice(stockAndPrice.price);
          setProductStock(stockAndPrice.stock);
        })
        .catch((error) => {
          console.error('Error when obtaining price and stock:', error);
        });
    }
  }, [prodId, activeSku]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activeSku) {
        getProductStockAndPrice(activeSku.code)
          .then((stockAndPrice) => {
            setProductPrice(stockAndPrice.price);
            setProductStock(stockAndPrice.stock);
          })
          .catch((error) => {
            console.error('Error when obtaining price and stock:', error);
          });
      }
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [activeSku]);

  const handleActiveSkuChange = (sku) => {
    setActiveSku(sku);
  };

  return (
    <ContainerProductPage>
      <DetailNavbar />
      {product && 
        <ContainerComponents>
          <ProductImage src={productImg} alt="Product" />
          <ContainerCard>
            <ProductDescription product={product} price={productPrice} stock={productStock} />
            <Size skus={product.skus} activeSku={activeSku} handleActiveSkuChange={handleActiveSkuChange} />
            <AddToCart />
          </ContainerCard>
        </ContainerComponents>
      }
    </ContainerProductPage>
  );
}

export default ProductPage;

const ContainerComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  background-color: #FAFAFA;
`;
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
  border-radius: 3rem 3rem 0rem 0rem;
  background: #FFF;
  position: absolute;
  bottom: 0rem;
  left: 0;
  top: 22rem;
  @media (max-width: 768px) {
    top: 20rem;
  }
`;
const ContainerProductPage = styled.div`
  width: 95vw;
  background-color: #FAFAFA;
`;

const ProductImage = styled.img`
  width: auto;
  background-color: #FAFAFA;
  height: 15rem;
  max-width: 100%;
  object-fit: contain;
  border-radius: 1rem;
  margin: 1rem auto; 
  display: block; 
  @media (max-width: 768px) {
    margin: 0 auto;
    margin: 2rem auto; 
    height: 13rem;
  }
`;