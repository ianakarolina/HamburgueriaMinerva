import React, { useState } from 'react';
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
    QuantityInput,
    Quantity,
    ProductButton
} from './ProductsElements'

const Products = ({ heading, data }) => {
   
    const [quantity, setQuantity] = useState(0);

    function Increment (){
        setQuantity = (quantity + 1)
    }

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
                                    <QuantityInput>
                                        <Quantity>{quantity}</Quantity>
                                        <ProductButton onClick={Increment}>{product.button}</ProductButton>
                                    </QuantityInput>
                                </ProductInfo>
                            </ProductCard> 
                        )
                })}
            </ProductsWrapper>

        </ProductsContainer>
        
    );
};

export default Products;
