import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const PromoName = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    margin: 30px;
    margin-top: 50px;
    h3{
        font-size: 1.6rem;
        border-bottom: 2px solid rgb(179,123,86);
        color: rgb(109,110,102);
        &:hover{
            border-bottom: 2px solid rgb(109,110,102);
            color: black;
        }
        cursor:pointer;
    }
`;

export const ProductPromoList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
`;

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0 2rem;
    width: 300px;
    line-height: 2;
    padding: 20px;

    img{
        height:200px;
        width: 300px;
        box-shadow: 8px 8px rgb(109,110,102);
        margin-bottom: 10px;
    }

    button{
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
    }

    p{
        font-size: 1rem;
    }

    h1{
        font-size: 1.4rem;
        font-weight: 500;
    }
`;

export const HamburguerName = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    margin: 30px;
    h3{
        font-size: 1.6rem;
        border-bottom: 2px solid rgb(179,123,86);
        color: rgb(109,110,102);
        &:hover{
            border-bottom: 2px solid rgb(109,110,102);
            color: black;
        }
        cursor:pointer;
    }
`;

export const ProductHamburguerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
`;

export const ProductBurguer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0 2rem;
    width: 300px;
    line-height: 2;
    padding: 20px;

    img{
        height:200px;
        width: 300px;
        box-shadow: 8px 8px rgb(109,110,102);
        margin-bottom: 10px;
    }

    button{
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
    }

    p{
        font-size: 1rem;
    }

    h1{
        font-size: 1.4rem;
        font-weight: 500;
    }
`;

export const BebidasName = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    margin: 30px;
    h3{
        font-size: 1.6rem;
        border-bottom: 2px solid rgb(179,123,86);
        color: rgb(109,110,102);
        &:hover{
            border-bottom: 2px solid rgb(109,110,102);
            color: black;
        }
        cursor:pointer;
    }
`;

export const ProductBebidasList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
`;

export const ProductBebidas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0 2rem;
    width: 300px;
    line-height: 2;
    padding: 20px;

    img{
        height:200px;
        width: 300px;
        box-shadow: 8px 8px rgb(109,110,102);
        margin-bottom: 10px;
    }

    button{
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
    }

    p{
        font-size: 1rem;
    }

    h1{
        font-size: 1.4rem;
        font-weight: 500;
    }
`;

export const Quantity=styled.div`
    background-color: rgb(73,22,3);
    width: 5vw;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    color: white;
    align-items: center;
    margin-left:93%;
    margin-top: -4%;

    i{
        font-size: 1.6rem;
        cursor: pointer;
        &:hover{
            color:#E1E1E1;
        }
    }
`;