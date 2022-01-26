import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 60vh;
    color: black;
`;

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`;

export const ProductImg = styled.img`
    height: 200px;
    width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px rgb(109,110,102);
`;

export const ProductsHeading = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    cursor: pointer;
`;

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: -2rem;
`;

export const ProductInfo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    font-size: 1rem;
`;

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 1.5rem;
`;

export const QuantityInput = styled.div``;

export const Quantity = styled.p``;

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: rgb(179,123,86);
    color: #fff;
    cursor: pointer;
    transition: 0.2 ease-out;
    &:hover{
        background: rgb(223,157,60);
        transition: 0.2s ease-out;
        color: #000;
    }
    font-family: 'Montserrat', sans-serif;
`;