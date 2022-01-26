import styled from "styled-components";

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
