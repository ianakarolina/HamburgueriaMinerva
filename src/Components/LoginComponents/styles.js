import styled from "styled-components";

export const LoginContainer = styled.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginArea = styled.div`
    background-color:rgb(206,170,147);;
    width: 30vw;
    height: 70vh;
    border-radius: 30px;
    box-shadow: 0 2px 15px 0 rgba(136, 136, 136, 0.77);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`;



export const Name = styled.h2`
    font-size: 1.8rem;
    color: white;
    border-bottom: 2px solid rgb(73,22,3);
    width: 80%;
    text-align: center;

`;

export const BarraEmail = styled.div`
    width: 20rem;
    height: 3rem;
    background-color: white;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin:20px 30px;
`;

export const InputEmail = styled.input`
    width: 30rem;
    border: none;
    background: none;
    outline: none;
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-family:'Outfit', sans-serif;
    line-height: 40px;
    padding:0;
    margin-left: 10px;
`;

export const BarraSenha = styled.div`
    width: 20rem;
    height: 3rem;
    background-color: white;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom:12px;
`;

export const InputSenha =styled.input`
    width: 30rem;
    border: none;
    background: none;
    outline: none;
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-family:'Outfit', sans-serif;
    line-height: 40px;
    padding:0;
    margin-left: 10px;
`;

export const Entrar = styled.button`
    background-color: rgb(179,123,86);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    transition: 0.2 ease-out;
    &:hover{
        background: rgb(73,22,3);
        transition: 0.2s ease-out;
        color: white;
    }
    font-family: 'Montserrat', sans-serif;
    margin-bottom:30px;
`;

export const ForgetPass = styled.a`
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    cursor: pointer;
    margin:8px;
    font-weight:lighter;
`;

export const Cadastrar = styled.a`
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    cursor: pointer;
    margin-bottom: -50px;
`;