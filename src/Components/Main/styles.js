import styled from "styled-components";

export const Container = styled.div`   /*DIV PRINCIPAL*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const BarraBusca = styled.div` /*Ao redor da barra de busca*/
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(226, 225, 225);
    height: 30px;
    width: 14rem;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 2px 15px 0 rgba(136, 136, 136, 0.77);
`;

export const Input = styled.input`  /*Barra de busca*/
    width: 30rem;
    border: none;
    background: none;
    outline: none;
    padding:0;
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-family:'Outfit', sans-serif;
    line-height: 40px;
`;

export const Icone = styled.a` /*Icone de lupa*/
    display: flex;
    justify-content: center;
    align-items: center;
    color:rgb(179,123,86);
    cursor: pointer;

`;

export const ContainerProdutos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// export const ContainerPromo = styled.div` /*DIV DE PROMOCOES*/
//     align-items: center;
//     justify-content: center;
// `;


// export const ContainerHamburguer = styled.div` /* DIV DE HAMBURGUERES */
//     display: flex;
//     flex-direction: column;
//     font-size: 1.4rem;
//     font-weight: bolder;
// `;


// export const ContainerBebidas= styled.div` /* DIV DE BEBIDAS */
//     font-size: 1.4rem;
//     font-weight: bolder;
//     display:grid;
// `;
