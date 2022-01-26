import React, { useState } from 'react';
import {Container, 
        ContainerProdutos, 
        ContainerPromo, 
        Input, 
        BarraBusca, 
        Icone,  
        ContainerHamburguer,
        ContainerBebidas, 
      } from "./styles"

import Products from "../Products";
import ProductsHamburguer from "../ProductsHamburguer";
import ProductsBebidas from "../ProductsBebidas";
import { productData } from '../Products/data';
import { productHamburguerData } from '../ProductsHamburguer/data'
import { productBebidasData } from '../ProductsBebidas/data'

import {FaSearch} from "react-icons/fa"

export default function Main() {


  return(
    <Container>
      <BarraBusca>
        <Input placeholder="Busque por um produto"/>
        <Icone><FaSearch/></Icone>
      </BarraBusca>
      <ContainerProdutos>
        <ContainerPromo>
          <Products heading='Promoções' data={productData}/>
        </ContainerPromo>
        <ContainerHamburguer>
          <ProductsHamburguer heading='Hambúrgueres' data={productHamburguerData}/>
        </ContainerHamburguer>
        <ContainerBebidas>
          <ProductsBebidas heading='Bebidas' data={productBebidasData}/>
        </ContainerBebidas>
      </ContainerProdutos>     
    </Container>
  );
}