import React, { useState, useEffect} from 'react';
import {
    Content, 
    ProductPromoList, 
    Product, 
    PromoName, 
    HamburguerName, 
    ProductBurguer, 
    ProductHamburguerList,
    BebidasName,
    ProductBebidas,
    ProductBebidasList,
    Quantity
} from "./styles"

import product1 from "../../images/LinguiBurguer.jpeg"
import product2 from "../../images/GranBurger.jpeg"
import product3 from "../../images/BatataFrita.jpeg"
import product4 from "../../images/BigBurguer.jpeg"
import product5 from "../../images/BaianinhoBurguer.jpeg"
import product6 from "../../images/AbsurdoBurguer.jpeg"
import product7 from "../../images/Agua.png"
import product8 from "../../images/Coca.png"
import product9 from "../../images/Fanta.png"

import {FaShoppingCart} from "react-icons/fa"


export default function Produtos({ heading, data }) {

    const [quantity, setQuantity] = useState(0);
    const [actualItem, setActualItem] = useState({})

    function Increment (){
        setQuantity(quantity + 1);
    }

    useEffect(()=>{
        setActualItem({
            quantidade:quantity
        })
    }, [quantity])
    
    const productsPromo=[
        {
            id:1,
            name: "Lingui Burguer",
            price: "R$33,80",
            desc: "Farinha de bacon, onion rings, cheddar",
            image: product1
        },
        {
            id:2,
            name: "Gran Burguer",
            price: "R$35,90",
            desc: "Pão de batata, maionese, farofa de bacon",
            image: product2
        },
        {
            id:3,
            name: "Batata Frita Minerva",
            price: "R$20,90",
            desc: "200g de batata frita com cheddar e farofa de bacon",
            image: product3
        },
    ]

    const productsHamburguer=[
        {
            id:4,
            name: "Big Burguer",
            price: "R$53,80",
            desc: "Farinha de Bacon, Molho Big, American Cheese",
            image: product4
        },
        {
            id:5,
            name: "Baianinho Burguer",
            price: "R$55,90",
            desc: "Pão de batata, Maionese da Casa, carne 180g",
            image: product5
        },
        {
            id:6,
            name: "Absurdo Burguer",
            price: "R$62,90",
            desc: "Pão Australiano, Cream Cheese, Carne 180g",
            image: product6
        },
    ]

    const productsBebidas=[
        {
            id:7,
            name: "Água",
            price: "R$6,20",
            desc: "500ml",
            image: product7,
        },
        {
            id:8,
            name: "Coca-Cola",
            price: "R$8,90",
            desc: "1 Litro",
            image: product8,
        },
        {
            id:9,
            name: "Fanta Laranja",
            price: "R$3,90",
            desc: "350 ml",
            image: product9,
        },
    ]

  return (
      <div>
          <Content>
                <Quantity>
                    <i><FaShoppingCart/></i>{quantity}
                </Quantity>
                <PromoName>
                    <h3>Promoções</h3>
                </PromoName>
                <ProductPromoList>
                    {
                        productsPromo.map((product) => (
                        <Product>
                            <img src={product.image}/>
                            <h2>{product.name}</h2>
                            <p>{product.desc}</p>
                            <h1>{product.price}</h1>
                            <button onClick={Increment}>Adicionar</button>
                        </Product>
                        ))
                    }
                </ProductPromoList>
                <HamburguerName>
                    <h3>Hambúrgueres</h3>
                </HamburguerName>
                <ProductHamburguerList>
                    {
                        productsHamburguer.map((product) => (
                        <ProductBurguer>
                            <img src={product.image}/>
                            <h2>{product.name}</h2>
                            <p>{product.desc}</p>
                            <h1>{product.price}</h1>
                            <button onClick={Increment}>Adicionar</button>
                        </ProductBurguer>
                        ))
                    }
                </ProductHamburguerList>
                <BebidasName>
                    <h3>Bebidas</h3>
                </BebidasName>
                <ProductBebidasList>
                    {
                        productsBebidas.map((product) => (
                        <ProductBebidas>
                            <img src={product.image}/>
                            <h2>{product.name}</h2>
                            <p>{product.desc}</p>
                            <h1>{product.price}</h1>
                            <button onClick={Increment}>Adicionar</button>
                        </ProductBebidas>
                        ))
                    }
                </ProductBebidasList>
          </Content>
      </div>

  );
}
