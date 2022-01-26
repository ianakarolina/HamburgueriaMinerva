import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-left:5rem;
    padding-right: 5rem;
    background: white;
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
    font-weight: 500;
    font-size: 1.5rem;
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
    font-weight: 500;
`;

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 1.5rem;
`;

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: rgb(159,38,17);
    color: #fff;
    cursor: pointer;
    transition: 0.2 ease-out;
    &:hover{
        background: rgb(255,214,82);
        transition: 0.2s ease-out;
        color: #000;
    }
`;