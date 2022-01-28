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


import {FaSearch} from "react-icons/fa"
import Produtos from "../Produtos"

export default function Main() {


  return(
    <Container>
      <BarraBusca>
        <Input placeholder="Busque por um produto"/>
        <Icone><FaSearch/></Icone>
      </BarraBusca>
      <Produtos />
        {/* <ContainerPromo>
          <Products heading='Promoções' data={productData}/>
        </ContainerPromo>
        <ContainerHamburguer>
          <ProductsHamburguer heading='Hambúrgueres' data={productHamburguerData}/>
        </ContainerHamburguer>
        <ContainerBebidas>
          <ProductsBebidas heading='Bebidas' data={productBebidasData}/>
        </ContainerBebidas> */}
    </Container>
  );
}