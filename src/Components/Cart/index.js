import React from 'react';
import {ActualItem, HeaderCarrinho, Item} from "./styles"
import {FaShoppingCart} from "react-icons/fa"

function Cart({item}) {
  return(
    <ActualItem>
        <HeaderCarrinho><FaShoppingCart/></HeaderCarrinho>
        <Item> {item.quantidade}</Item> 
    </ActualItem>
  );
}

export default Cart;
