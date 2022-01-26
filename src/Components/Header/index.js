import React from 'react';
import {FaUserCircle, FaBars} from "react-icons/fa";
import {
        Head, 
        HeaderName,
        HeaderMenu, 
        HeaderCarrinho, 
        HeaderButton,
        MenuItem, 
        ProdutosAdicionados,    
    } from "./styles"
import {Quantity, ProductButton} from "../Products/ProductsElements"


function Header() {
    const itensMenu =[
        {nome: "Login", icone:<FaUserCircle/>},
        {nome: "Contatos", icone:""}
    ]

    const renderList = itensMenu.map((item, index) => (
        <MenuItem key={index}>
            {item.icone}
            {item.nome}
        </MenuItem>
    ));

    return (
    <Head>
        <HeaderName>MINERVA</HeaderName>
        <HeaderMenu>{renderList}</HeaderMenu>
        {/* <ProdutosAdicionados>
            <HeaderCarrinho><FaShoppingCart/></HeaderCarrinho>
            <Quantity>
            </Quantity>
        </ProdutosAdicionados> */}
        <HeaderButton><FaBars/></HeaderButton>
    </Head>
    );
}

export default Header;