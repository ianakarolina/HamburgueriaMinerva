import React, { useEffect, useState } from 'react';
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

import Cart from "../../Components/Cart"

const Products = ({ heading, data }) => {
   
    const [quantity, setQuantity] = useState(0);
    const [actualItem, setActualItem] = useState({})

    function Increment (){
        setQuantity(quantity + 1);
    }

    useEffect(()=>{
        setActualItem({
            quantidade:quantity
        })
    }, [quantity])

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
                                        <ProductButton onClick={Increment}>{product.button}</ProductButton>
                                    </QuantityInput>
                                </ProductInfo>
                            </ProductCard> 
                        )
                })}
            </ProductsWrapper>
            <Cart item={actualItem}/>
        </ProductsContainer>
    );
};

export default Products;
