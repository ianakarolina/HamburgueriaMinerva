import React from 'react';
import {FaUserCircle, FaShoppingCart, FaBars} from "react-icons/fa";
import {Head, HeaderName, HeaderMenu, HeaderCarrinho, HeaderButton, MenuItem, ProdutosAdicionados} from "./styles"
import {Quantity} from "../Products/ProductsElements"



function Header() {
    const itensMenu =[
        {nome: "Entre ou cadastre-se", icone:<FaUserCircle/>},
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
        <HeaderName>HAMBURGUERIA</HeaderName>
        <HeaderMenu>{renderList}</HeaderMenu>
        <ProdutosAdicionados>
            <HeaderCarrinho><FaShoppingCart/></HeaderCarrinho>
        </ProdutosAdicionados>
        
        <HeaderButton><FaBars/></HeaderButton>
    </Head>
    );
}

export default Header;