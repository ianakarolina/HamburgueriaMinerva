import React from 'react';
import {
    ProductsContainer,
    ProductsWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsBebidasElements'

const ProductsBebidas = ({ heading, data }) => {
  return (
  <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
          {data.map ((product, index) => {
                return(
                    <ProductCard key={index}>
                        <ProductImg src={product.img}/>
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.button}</ProductButton>
                        </ProductInfo>
                    </ProductCard> 
                )
          })}
      </ProductsWrapper>


  </ProductsContainer>
  
  );
};

export default ProductsBebidas;