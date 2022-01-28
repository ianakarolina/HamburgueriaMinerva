import styled from "styled-components";

// export const MenuItem = styled.h4` /*Opções do navbar - entre ou cadastre-se*/
//     height: 5vh;
//     width: 5vw;
//     cursor:pointer;
//     display: flex;
//     &:hover{
//         color:#E1E1E1 ;
//     }
//     margin-right: 15px;
// `;

export const Head = styled.header`  /*o próprio header*/
    background-color: rgb(179,123,86);
    display: flex;
    padding: 50px 50px;
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
    justify-content: center;
    cursor: pointer;
    
    li{
        font-size: 18px;
        margin-right: 20px;
        &:hover{
            color:white;
        }
    }
    i{
        font-size: 1.5rem;
        &:hover{
            color:white;
        }
    }

    a{
        text-decoration: none;
        color:rgb(73,22,3);
        transition: filter .2s;
    }

    a:hover{
        color:white;
    }
`;

export const HeaderLinks = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
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

export const ActualItem = styled.div`
    background-color: rgb(73,22,3);
    width: 5vw;
    height: 5vh;
    position: absolute;
    right: 6%;
    top:-10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    color: white;
`;

export const HeaderCarrinho = styled.i`
    cursor: pointer;
    &:hover{
        color:#E1E1E1;
    }
    font-size:1.5rem;
    display: flex;
    color: white;
    margin-left: 5px;
    align-items: center;
`;

export const Item = styled.p`
    font-size: 1rem;
    margin-left: 4px;
`;

