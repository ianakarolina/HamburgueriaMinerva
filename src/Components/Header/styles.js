import styled from "styled-components";

export const MenuItem = styled.h4` /*Opções do navbar - entre ou cadastre-se*/
    height: 5vh;
    width: 5vw;
    cursor:pointer;
    display: flex;
    &:hover{
        color:#E1E1E1 ;
    }
    margin-right: 15px;
`;

export const Head = styled.header`  /*o próprio header*/
    background-color: rgb(179,123,86);
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
    font-size: 2.5rem;
    cursor: pointer;
`;

export const HeaderMenu = styled.ul` /*menu - entre ou cadastre-se*/
    display: flex;
    font-weight: bold;
    color: rgb(73,22,3);
    align-items: center;
    position: absolute;
    right: 12%;
    top:50%;
`;

// export const ProdutosAdicionados = styled.div`
//     background-color: rgb(73,22,3);
//     width: 5vw;
//     height: 5vh;
//     position: absolute;
//     right: 6%;
//     top:50%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     border-radius: 5px;
// `;

// export const HeaderCarrinho = styled.i` /*ícone do carrinho*/
//     cursor: pointer;
//     &:hover{
//         color:#E1E1E1;
//     }
//     font-size:1.5rem;
//     display: flex;
//     color: white;
//     margin-left: 5px;
// `;

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



