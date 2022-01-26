import styled from "styled-components";

export const MenuItem = styled.h4` /*Opções do navbar - entre ou cadastre-se*/
    height: 5vh;
    width: 15vw;
    cursor:pointer;
    display: flex;
`;

export const Head = styled.header`  /*o próprio header*/
    background-color: rgb(159,38,17);
    display: flex;
    padding-top: 4%;
    padding-bottom: 4%;
    justify-content: space-between;
    position:relative;
`;

export const HeaderName = styled.h1`
    padding-left: 3%;
    color: white;
    font-weight: bold;
    font-size: 2.2rem;
    cursor: pointer;
`;

export const HeaderMenu = styled.ul` /*menu - entre ou cadastre-se*/
    display: flex;
    font-weight: bold;
    color: rgb(73,22,3);
    &:hover{
        color:#E1E1E1 ;
    }
    align-items: center;
    position: absolute;
    right: 3%;
    top:50%;
`;

export const HeaderCarrinho = styled.i` /*ícone do carrinho*/
    cursor: pointer;
    &:hover{
        color:#E1E1E1;
    }
    font-size:1.5rem;
    display: flex;
    position: absolute;
    right: 8%;
    top:50%;
    color: rgb(73,22,3);
`;

export const HeaderButton = styled.i`
    cursor: pointer;
    font-size: 1.2rem;
    &:hover{
        color:#E1E1E1;
    }
    padding-right: 2%;
    position: absolute;
    right: 1%;
    top:50%;
    color: rgb(73,22,3);

`;

export const ProdutosAdicionados = styled.div``;

